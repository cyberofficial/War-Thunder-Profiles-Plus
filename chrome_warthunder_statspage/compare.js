function addSaveAndCompareButtons() {
    // Selectors for various parts of the page
    const totalsPath = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab';
    const profileNameSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > li.user-profile__data-nick';
    const levelSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > li:nth-child(4)';
    const regDateSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > li.user-profile__data-regdate';
    const accountAgeSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > h3';
    const arcadeBattlesSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.arcadeFightTab.is-visible';
    const realisticBattlesSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.historyFightTab';
    const simulationBattlesSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.simulationFightTab';
    const avatarSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > div';


    // Querying elements
    const totalsTab = document.querySelector(totalsPath);
    const profileNameElem = document.querySelector(profileNameSelector);
    const levelElem = document.querySelector(levelSelector);
    const regDateElem = document.querySelector(regDateSelector);
    const accountAgeElem = document.querySelector(accountAgeSelector);
    const arcadeBattlesTab = document.querySelector(arcadeBattlesSelector);
    const realisticBattlesTab = document.querySelector(realisticBattlesSelector);
    const simulationBattlesTab = document.querySelector(simulationBattlesSelector);
    const avatarElem = document.querySelector(avatarSelector);

    if (totalsTab && profileNameElem && levelElem && regDateElem && accountAgeElem && arcadeBattlesTab && realisticBattlesTab && simulationBattlesTab) {
        const totalsItem = totalsTab.querySelector('.user-stat__list-item');
        // select content__header
        const sectionHeader = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.content__title");

        // Creating Save and Compare buttons
        const saveButton = document.createElement('span');
        saveButton.textContent = ' (Save)';
        saveButton.style.cursor = 'pointer';
        // give save the id of saveBtn
        saveButton.id = 'saveBtn';
        const compareButton = document.createElement('span');
        compareButton.textContent = ' (Compare)';
        compareButton.id = 'compareBtn';
        // if there is a saved named from compare then make it say (Compare with <profilenamehere>)
        getData(function(data) {
            if (data.profileName) {
                compareButton.textContent = ` (Compare with ${data.profileName})`;
            }
        });
        compareButton.style.cursor = 'pointer';

        // Save functionality
        saveButton.onclick = function() {
            // Resetting text before saving
            profileNameElem.textContent = profileNameElem.textContent.split(' | ')[0];
            levelElem.textContent = levelElem.textContent.split(' | ')[0];
            regDateElem.textContent = regDateElem.textContent.split(' | ')[0];
            if (document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > h3:nth-child(7)")) {
                document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > h3:nth-child(7)").remove();
            }
            
            let dataToSave = {};
            function saveTabData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > 0) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave[`${tabName}value${index}`] = currentValue;
                    }
                });
            }

            // Saving data from each tab
            saveTabData(totalsTab, 'totals');
            saveTabData(arcadeBattlesTab, 'arcade');
            saveTabData(realisticBattlesTab, 'realistic');
            saveTabData(simulationBattlesTab, 'simulation');

            // Saving additional profile data
            dataToSave['profileName'] = profileNameElem.textContent.trim();
            dataToSave['level'] = levelElem.textContent.trim();
            dataToSave['regDate'] = regDateElem.textContent.trim();
            dataToSave['accountAge'] = accountAgeElem.textContent.trim();

            // Saving avatar URL
            // remove the extra avatar if it exists
            if (document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > div:nth-child(2)") && document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > div:nth-child(2)").querySelector('img')) {
                document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > div:nth-child(2)").remove();
            }
            if (avatarElem && avatarElem.querySelector('img')) {
                dataToSave['avatarUrl'] = avatarElem.querySelector('img').src;
            }


            const clanTagElem = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div:nth-child(1) > ul > li.user-profile__data-clan a");
            // if there is no clan tag then save not in a clan
            if (!clanTagElem) {
                dataToSave['clanTag'] = 'Not in a clan';
                dataToSave['clanUrl'] = '';
            }
            if (clanTagElem) {
                dataToSave['clanTag'] = clanTagElem.textContent.trim();
                dataToSave['clanUrl'] = clanTagElem.href;
            }

            saveData(dataToSave);
            
            // update compare button text
            compareButton.textContent = ` (Compare with ${dataToSave.profileName})`;
        };

        // Compare functionality
        compareButton.onclick = function() {
            getData(function(data) {
                // Preventing multiple comparisons by checking if there's already a cloned profile
                const existingClonedProfile = document.getElementById('cloned-profile');
                if (existingClonedProfile) {
                    existingClonedProfile.remove();
                }
        
                if (profileNameElem.textContent.includes('Comparing with')) {
                    return;
                }

                // if there is no data saved then return
                if (!data.profileName) {
                    return;
                }
        
                // Clone the profile section
                const profileSection = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile");
                const clonedProfile = profileSection.cloneNode(true);
                clonedProfile.id = 'cloned-profile'; // Assign an ID to the cloned profile for easy identification and removal
        
                // Update the cloned profile with compared data
                if (data.avatarUrl) {
                    clonedProfile.querySelector('.user-profile__ava img').src = data.avatarUrl;
                    clonedProfile.querySelector('.user-profile__ava img').alt = data.profileName;
                }

                const clonedClanTagElem = clonedProfile.querySelector('.user-profile__data-clan a');
                if (clonedClanTagElem) {
                    clonedClanTagElem.textContent = data.clanTag;
                    clonedClanTagElem.href = data.clanUrl;
                }
        
                clonedProfile.querySelector('li.user-profile__data-nick').textContent = data.profileName;
                clonedProfile.querySelector('li:nth-child(4)').textContent = `${data.level}`;
                clonedProfile.querySelector('li.user-profile__data-regdate').textContent = `${data.regDate}`;
                clonedProfile.querySelector('h3.account-age').textContent = `${data.accountAge}`;
        
                // Insert the cloned profile next to the original
                profileSection.parentNode.insertBefore(clonedProfile, profileSection.nextSibling);
        
                // Comparing data from each tab
                function compareTabData(tab, tabName) {
                    tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                        if (index > 0 && data[`${tabName}value${index}`] !== undefined) {
                            const savedValue = data[`${tabName}value${index}`];
                            const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                            const difference = currentValue - savedValue;
                            const differenceText = difference >= 0 ? `+${difference}` : difference;
                            item.innerHTML = `${currentValue} | ${savedValue} | <span class="${difference >= 0 ? 'positive' : 'negative'}">${differenceText}</span>`;
                        }
                    });
                }
        
                compareTabData(totalsTab, 'totals');
                compareTabData(arcadeBattlesTab, 'arcade');
                compareTabData(realisticBattlesTab, 'realistic');
                compareTabData(simulationBattlesTab, 'simulation');
            });
        };        

        // Appending buttons to the totals item
        //totalsItem.appendChild(saveButton);
        //totalsItem.appendChild(compareButton);
        sectionHeader.appendChild(saveButton);
        sectionHeader.appendChild(compareButton);
        // add a button to wipe data
        const wipeButton = document.createElement('span');
        wipeButton.textContent = ' (Wipe Data)';
        wipeButton.style.cursor = 'pointer';
        wipeButton.id = 'wipeBtn';
        wipeButton.onclick = function() {
            wipeData();
        }
        sectionHeader.appendChild(wipeButton);
    }
}

// Helper functions to save and retrieve data
function saveData(dataToSave) {
    if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.local.set(dataToSave, function() {
            console.log('Data saved in Chrome storage:', dataToSave);
        });
    } else if (typeof browser !== 'undefined' && browser.storage) {
        browser.storage.local.set(dataToSave).then(() => {
            console.log('Data saved in Firefox storage:', dataToSave);
        }, (error) => {
            console.error(`Error: ${error}`);
        });
    } else {
        console.error('Storage API not found');
    }
}

function getData(callback) {
    if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.local.get(null, callback);
    } else if (typeof browser !== 'undefined' && browser.storage) {
        browser.storage.local.get().then(callback, (error) => {
            console.error(`Error: ${error}`);
        });
    } else {
        console.error('Storage API not found');
    }
}

// function to wipe all data
function wipeData() {
    if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.local.clear(function() {
            console.log('Data wiped from Chrome storage');
            // update compare button text
            const compareButton = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.content__title > span:nth-child(2)");
            compareButton.textContent = ' (Compare)';
            // refresh page
            location.reload();
        });
    } else if (typeof browser !== 'undefined' && browser.storage) {
        browser.storage.local.clear().then(() => {
            console.log('Data wiped from Firefox storage');
            // update compare button text
            const compareButton = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.content__title > span:nth-child(2)");
            compareButton.textContent = ' (Compare)';
            // refresh page
            location.reload();
        }, (error) => {
            console.error(`Error: ${error}`);
        });
    } else {
        console.error('Storage API not found');
    }
}

// Adding save and compare buttons on page load
addSaveAndCompareButtons();
