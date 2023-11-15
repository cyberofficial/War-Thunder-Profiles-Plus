function convertTimeToMinutes(timeString) {
    // Split the timeString by space and filter out any empty strings
    const units = timeString.split(" ").filter(Boolean);
    let totalMinutes = 0;

    units.forEach(unit => {
        // Check if unit is a number (for months with a space before 'M')
        if (!isNaN(unit)) {
            // Peek at the next unit to see if it's 'M' without advancing the loop
            const nextIndex = units.indexOf(unit) + 1;
            if (units[nextIndex] === 'M') {
                totalMinutes += parseFloat(unit) * 43800;
            }
        } else {
            // Extract the last character as the unit
            let lastChar = unit.slice(-1);
            // Extract the number without the unit
            let value = unit.slice(0, -1);

            if (lastChar === 'd') {
                totalMinutes += parseInt(value) * 1440;
            } else if (lastChar === 'h') {
                totalMinutes += parseInt(value) * 60;
            } else if (lastChar === 'm') {
                totalMinutes += parseInt(value);
            }
        }
    });

    return totalMinutes;
}

function loadScript(scriptName, callback) {
    var script = document.createElement('script');
    script.src = chrome.runtime.getURL(scriptName);
    script.addEventListener('load', callback);
    document.head.appendChild(script);
  }

  // check for cloudflare or Redirecting text
if (!document.documentElement.innerHTML.includes("Cloudflare") && !document.documentElement.innerHTML.includes("Redirecting")) {
    // if the url doesn't userinfo, then it's not a user page so we just exit the script
    if (window.location.href.includes("userinfo")) {
        // this is the user page, so we can execute the script

        // Create the new ul element with the 'totalsTab' class
        let totalsTab = document.createElement('ul');
        totalsTab.className = 'user-stat__list totalsTab';

        // Add li items to totalsTab
        let itemsToAdd = ['Totals', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
        itemsToAdd.forEach(itemText => {
            let li = document.createElement('li');
            li.className = 'user-stat__list-item';
            li.textContent = itemText; // Set the text content for each li element
            totalsTab.appendChild(li); // Append the li to the ul
        });

        // Select the parent element where the new ul will be appended
        let parentElement = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div");

        // Append the totalsTab ul to the parent element
        parentElement.appendChild(totalsTab);

        // Function to create a totalsTab ul with the appropriate number of li items
        function createTotalsTab(numberOfItems) {
            let totalsTab = document.createElement('ul');
            totalsTab.className = 'user-stat__list totalsTab';

            for (let i = 0; i < numberOfItems; i++) {
                let li = document.createElement('li');
                li.className = 'user-stat__list-item';
                li.textContent = (i === 0) ? '-' : '-'; // Set the first item to 'Totals' and the rest to '-'
                totalsTab.appendChild(li);
            }

            return totalsTab;
        }

        // Select all the user-stat__list-row elements
        let statRows = document.querySelectorAll('.user-profile__stat.user-stat.user-stat--tabs .user-stat__list-row');

        // Iterate over each stat row
        statRows.forEach(statRow => {
            // Find the .user-stat__list--titles ul to determine the number of li items
            let titleList = statRow.querySelector('.user-stat__list--titles');
            let numberOfItems = titleList.childElementCount;

            // Create the totalsTab ul with the correct number of li items
            let totalsTab = createTotalsTab(numberOfItems);

            // Append the totalsTab ul to the stat row
            statRow.appendChild(totalsTab);
        });
                
        // Varibles Section
        var Arcade_victories = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(2)").innerText;
        // if the innertext is empty. says 0, or say "N/A" then set it to 0
        if (Arcade_victories == "" || Arcade_victories == "0" || Arcade_victories == "N/A") {
            Arcade_victories = "0";
        }
        var Realistic_victories = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.historyFightTab > li:nth-child(2)").innerText;
        if (Realistic_victories == "" || Realistic_victories == "0" || Realistic_victories == "N/A") {
            Realistic_victories = "0";
        }
        var Simulation_victories = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab > li:nth-child(2)").innerText;
        if (Simulation_victories == "" || Simulation_victories == "0" || Simulation_victories == "N/A") {
            Simulation_victories = "0";
        }

        var AB_Completed_Missions = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(3)").innerText;
        if (AB_Completed_Missions == "" || AB_Completed_Missions == "0" || AB_Completed_Missions == "N/A") {
            AB_Completed_Missions = "0";
        }
        var RB_Completed_Missions = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.historyFightTab > li:nth-child(3)").innerText;
        if (RB_Completed_Missions == "" || RB_Completed_Missions == "0" || RB_Completed_Missions == "N/A") {
            RB_Completed_Missions = "0";
        }
        var SB_Completed_Missions = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab > li:nth-child(3)").innerText;
        if (SB_Completed_Missions == "" || SB_Completed_Missions == "0" || SB_Completed_Missions == "N/A") {
            SB_Completed_Missions = "0";
        }

        // Victories/battles ratio
        // Victories = //*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[1]/div/ul[5]/li[2]
        // Completed Missions = //*[@id="bodyRoot"]/div[4]/div[2]/div[3]/div/section/div[2]/div[2]/div[1]/div/ul[5]/li[3]
        var Victories_Battles_Ratio = (parseInt(Arcade_victories) + parseInt(Realistic_victories) + parseInt(Simulation_victories)) / (parseInt(AB_Completed_Missions) + parseInt(RB_Completed_Missions) + parseInt(SB_Completed_Missions));
        // convert to ##% format
        Victories_Battles_Ratio = (Victories_Battles_Ratio * 100).toFixed(0) + "%";
        document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab > li:nth-child(4)").innerText = Victories_Battles_Ratio;


        // since deaths have a comma in them, we need to remove it aswell as parse it as an int
        var AB_Deaths = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(5)").innerText.replace(/,/g, '');
        if (AB_Deaths == "" || AB_Deaths == "0" || AB_Deaths == "N/A") {
            AB_Deaths = "0";
        }
        var RB_Deaths = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.historyFightTab > li:nth-child(5)").innerText.replace(/,/g, '');
        if (RB_Deaths == "" || RB_Deaths == "0" || RB_Deaths == "N/A") {
            RB_Deaths = "0";
        }
        var SB_Deaths = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab > li:nth-child(5)").innerText.replace(/,/g, '');
        if (SB_Deaths == "" || SB_Deaths == "0" || SB_Deaths == "N/A") {
            SB_Deaths = "0";
        }

        // lions earn
        var AB_Lions_Earned = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(6)").innerText.replace(/,/g, '');
        if (AB_Lions_Earned == "" || AB_Lions_Earned == "0" || AB_Lions_Earned == "N/A") {
            AB_Lions_Earned = "0";
        }
        var RB_Lions_Earned = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.historyFightTab > li:nth-child(6)").innerText.replace(/,/g, '');
        if (RB_Lions_Earned == "" || RB_Lions_Earned == "0" || RB_Lions_Earned == "N/A") {
            RB_Lions_Earned = "0";
        }
        var SB_Lions_Earned = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab > li:nth-child(6)").innerText.replace(/,/g, '');
        if (SB_Lions_Earned == "" || SB_Lions_Earned == "0" || SB_Lions_Earned == "N/A") {
            SB_Lions_Earned = "0";
        }

        // play time
        const AB_PlayTime = document.querySelector(".arcadeFightTab .user-stat__list-item:nth-child(7)").innerText;
        // if the innertext is empty. says 0, or say "N/A" then set it to 0 minutes
        if (AB_PlayTime == "" || AB_PlayTime == "0" || AB_PlayTime == "N/A") {
            AB_PlayTime = "0m";
        }
        const AB_PlayTime_In_Minutes = convertTimeToMinutes(AB_PlayTime);
        //console.log("AB Play Time: " + AB_PlayTime_In_Minutes);
        document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(7)").innerText = (AB_PlayTime_In_Minutes / 60).toLocaleString() + " hours";
        
        const RB_PlayTime = document.querySelector(".historyFightTab .user-stat__list-item:nth-child(7)").innerText;
        if (RB_PlayTime == "" || RB_PlayTime == "0" || RB_PlayTime == "N/A") {
            RB_PlayTime = "0m";
        }
        const RB_PlayTime_In_Minutes = convertTimeToMinutes(RB_PlayTime);
        //console.log("RB Play Time: " + RB_PlayTime_In_Minutes);
        document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.historyFightTab > li:nth-child(7)").innerText = (RB_PlayTime_In_Minutes / 60).toLocaleString() + " hours";

        const SB_PlayTime = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab > li:nth-child(7)").innerText;
        if (SB_PlayTime == "" || SB_PlayTime == "0" || SB_PlayTime == "N/A") {
            SB_PlayTime = "0m";
        }
        const SB_PlayTime_In_Minutes = convertTimeToMinutes(SB_PlayTime);
        //console.log("SB Play Time: " + SB_PlayTime_In_Minutes);
        document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab > li:nth-child(7)").innerText = (SB_PlayTime_In_Minutes / 60).toLocaleString() + " hours";

        // Air Targets Destroyed
        var AB_Air_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(8)").innerText;
        if (AB_Air_Targets_Destroyed == "" || AB_Air_Targets_Destroyed == "0" || AB_Air_Targets_Destroyed == "N/A") {
            AB_Air_Targets_Destroyed = "0";
        }
        var RB_Air_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.historyFightTab > li:nth-child(8)").innerText;
        if (RB_Air_Targets_Destroyed == "" || RB_Air_Targets_Destroyed == "0" || RB_Air_Targets_Destroyed == "N/A") {
            RB_Air_Targets_Destroyed = "0";
        }
        var SB_Air_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab > li:nth-child(8)").innerText;
        if (SB_Air_Targets_Destroyed == "" || SB_Air_Targets_Destroyed == "0" || SB_Air_Targets_Destroyed == "N/A") {
            SB_Air_Targets_Destroyed = "0";
        }

        // Ground Targets Destroyed
        var AB_Ground_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(9)").innerText;
        if (AB_Ground_Targets_Destroyed == "" || AB_Ground_Targets_Destroyed == "0" || AB_Ground_Targets_Destroyed == "N/A") {
            AB_Ground_Targets_Destroyed = "0";
        }
        //console.log(AB_Ground_Targets_Destroyed);
        var RB_Ground_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.historyFightTab > li:nth-child(9)").innerText;
        if (RB_Ground_Targets_Destroyed == "" || RB_Ground_Targets_Destroyed == "0" || RB_Ground_Targets_Destroyed == "N/A") {
            RB_Ground_Targets_Destroyed = "0";
        }
        //console.log(RB_Ground_Targets_Destroyed);
        var SB_Ground_Targets_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab > li:nth-child(9)").innerHTML;
        if (SB_Ground_Targets_Destroyed == "" || SB_Ground_Targets_Destroyed == "0" || SB_Ground_Targets_Destroyed == "N/A") {
            SB_Ground_Targets_Destroyed = "0";
        }
        //console.log(SB_Ground_Targets_Destroyed);

        // Naval Targets Destroyed
        var AB_Ships_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.arcadeFightTab.is-visible > li:nth-child(10)").innerText;
        if (AB_Ships_Destroyed == "" || AB_Ships_Destroyed == "0" || AB_Ships_Destroyed == "N/A") {
            AB_Ships_Destroyed = "0";
        }
        var RB_Ships_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.historyFightTab > li:nth-child(10)").innerText;
        if (RB_Ships_Destroyed == "" || RB_Ships_Destroyed == "0" || RB_Ships_Destroyed == "N/A") {
            RB_Ships_Destroyed = "0";
        }
        var SB_Ships_Destroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab > li:nth-child(10)").innerText;
        if (SB_Ships_Destroyed == "" || SB_Ships_Destroyed == "0" || SB_Ships_Destroyed == "N/A") {
            SB_Ships_Destroyed = "0";
        }

        // HTML Section
        const Victories = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab > li:nth-child(2)");
        const Completed_Missions = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab > li:nth-child(3)");
        const Deaths = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab > li:nth-child(5)");
        const Lions = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab > li:nth-child(6)");
        const PlayTime = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab > li:nth-child(7)");
        const AirTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab > li:nth-child(8)");
        const GroundTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab > li:nth-child(9)");
        const NavalTargetsDestroyed = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab > li:nth-child(10)");

        // Set the text of the element to "Victories: " + the total victories
        Victories.innerText = (parseInt(Arcade_victories) + parseInt(Realistic_victories) + parseInt(Simulation_victories));
        Completed_Missions.innerText = (parseInt(AB_Completed_Missions) + parseInt(RB_Completed_Missions) + parseInt(SB_Completed_Missions));
        Deaths.innerText = (parseInt(AB_Deaths) + parseInt(RB_Deaths) + parseInt(SB_Deaths));
        // convert the lions earned to a string with commas and set the text of the element to "Lions Earned: " + the total lions earned
        Lions.innerText = (parseInt(AB_Lions_Earned) + parseInt(RB_Lions_Earned) + parseInt(SB_Lions_Earned)).toLocaleString();
        // Convert playtime to hours then show it as a string with commas and set the text of the element to "Play Time: " + the total play time
        PlayTime.innerText = ((AB_PlayTime_In_Minutes + RB_PlayTime_In_Minutes + SB_PlayTime_In_Minutes) / 60).toLocaleString() + " hours";
        AirTargetsDestroyed.innerText = (parseInt(AB_Air_Targets_Destroyed) + parseInt(RB_Air_Targets_Destroyed) + parseInt(SB_Air_Targets_Destroyed));
        GroundTargetsDestroyed.innerText = (parseInt(AB_Ground_Targets_Destroyed) + parseInt(RB_Ground_Targets_Destroyed) + parseInt(SB_Ground_Targets_Destroyed));
        NavalTargetsDestroyed.innerText = (parseInt(AB_Ships_Destroyed) + parseInt(RB_Ships_Destroyed) + parseInt(SB_Ships_Destroyed));

        // Convert reg date to hours
        const regDateElement = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > li.user-profile__data-regdate");
        const regDateString = regDateElement.textContent.match(/\d{2}\.\d{2}\.\d{4}/)[0];
        const regDate = new Date(regDateString.split('.').reverse().join('-'));
        const currentDate = new Date();
        const timeDiff = currentDate - regDate;
        const daysOld = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const h3 = document.createElement('h3');
        h3.className = 'account-age';
        h3.textContent = `${(daysOld / 365).toFixed(1)} years old | ${daysOld} days old | ${daysOld * 24} hours old`;
        regDateElement.parentNode.insertBefore(h3, regDateElement.nextSibling);

        loadScript('AVIATION.js', function() {
            console.log('AVIATION.js has been loaded and executed.');
        });
        loadScript('GROUND.js', function() {
            console.log('GROUND.js has been loaded and executed.');
        });
        loadScript('NAVAL.js', function() {
            console.log('NAVAL.js has been loaded and executed.');
        });
        
    } else {
        console.log("You are not on a user page. The script for War Thunder Player Stats was not executed.");
    }

} else {
  console.log("Cloudflare detected. The script for War Thunder Player Stats page was not executed.");
}


