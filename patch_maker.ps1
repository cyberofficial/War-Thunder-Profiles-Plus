$ErrorActionPreference = "Stop"


# Configuration
$repoOwner = "cyberofficial"
$repoName = "War-Thunder-Profiles-Plus"

# Specify branches and commits to compare
$branch1 = "current" # old
$commit1 = "645b9cfda631b27ff84359c7ce252dd6ac876046" # or "latest"
$branch2 = "dev"     # new (latest)
$commit2 = "645b9cfda631b27ff84359c7ce252dd6ac876046" # or "latest"

$baseDir = (Get-Location).Path
$logFile = "$baseDir\build_log.txt"

# Extensions to include in flattening (configurable)
$flattenExtensions = @('*.js','*.json','*.css','*.md','*.html')

# Ensure output directory exists
if (!(Test-Path $baseDir)) {
    New-Item -ItemType Directory -Path $baseDir | Out-Null
}

# Log function
function Log {
    param ($msg)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $line = "[$timestamp] $msg"
    Write-Host $line
    Add-Content -Path $logFile -Value $line
}

# Clean up old logs and files
Remove-Item -Force "$baseDir\repo_old.txt","$baseDir\repo_current.txt","$logFile" -ErrorAction Ignore
Remove-Item -Force -Recurse "$baseDir\old","$baseDir\new" -ErrorAction Ignore

Log "Starting repo comparison build process..."


# Helper to get latest commit if needed
function Get-LatestCommit {
    param (
        [string]$branch
    )
    $apiUrl = "https://api.github.com/repos/$repoOwner/$repoName/branches/$branch"
    Log "Querying GitHub API for latest commit on branch '$branch'..."
    $branchData = Invoke-RestMethod -Uri $apiUrl -Headers @{ "User-Agent" = "PowerShell" }
    return $branchData.commit.sha
}

# Resolve commit hashes (support "latest" as a value)
if ($commit1 -eq "latest") {
    $commit1 = Get-LatestCommit -branch $branch1
}
if ($commit2 -eq "latest") {
    $commit2 = Get-LatestCommit -branch $branch2
}

# Function to download and extract a commit snapshot
function Download-RepoZip {
    param (
        [string]$commit,
        [string]$destPath
    )

    $zipUrl = "https://github.com/$repoOwner/$repoName/archive/$commit.zip"
    $zipFile = "$baseDir\$commit.zip"

    Log "Downloading commit $commit from $zipUrl..."
    Invoke-WebRequest -Uri $zipUrl -OutFile $zipFile

    Log "Extracting $zipFile to $destPath..."
    Expand-Archive -Path $zipFile -DestinationPath $destPath

    Remove-Item $zipFile
}

# Function to flatten browser extension files into a single text file
function Flatten-RepoToText {
    param (
        [string]$InputPath,
        [string]$OutputFile
    )

    Log "Flattening extension files from $InputPath to $OutputFile..."

    if (Test-Path $OutputFile) {
        Remove-Item $OutputFile
    }

    foreach ($type in $flattenExtensions) {
        Get-ChildItem -Path $InputPath -Recurse -Filter $type -File | ForEach-Object {
            $relativePath = $_.FullName.Substring($InputPath.Length).TrimStart('\')
            $ext = $_.Extension.TrimStart('.')
            Add-Content -Path $OutputFile -Value "`nFile Location: $relativePath"
            Add-Content -Path $OutputFile -Value "````$ext"
            Get-Content $_.FullName | Add-Content -Path $OutputFile
            Add-Content -Path $OutputFile -Value "````"
        }
    }

    Log "Finished writing to $OutputFile."
}


# Download snapshots
Download-RepoZip -commit $commit1 -destPath "$baseDir\old"
Download-RepoZip -commit $commit2 -destPath "$baseDir\new"

# Locate extracted directories (GitHub zips include repoName-commit as root folder)
$oldExtracted = Get-ChildItem "$baseDir\old" | Where-Object { $_.PSIsContainer } | Select-Object -First 1
$newExtracted = Get-ChildItem "$baseDir\new" | Where-Object { $_.PSIsContainer } | Select-Object -First 1

# Flatten to single .txt files
Flatten-RepoToText -InputPath $oldExtracted.FullName -OutputFile "$baseDir\repo_old.txt"
Flatten-RepoToText -InputPath $newExtracted.FullName -OutputFile "$baseDir\repo_current.txt"

Log "✅ Completed successfully."
