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

        // Creating Save and Compare buttons
        const saveButton = document.createElement('span');
        saveButton.textContent = ' (Save)';
        saveButton.style.cursor = 'pointer';
        const compareButton = document.createElement('span');
        compareButton.textContent = ' (Compare)';
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

            saveData(dataToSave);
        };

        // Compare functionality
        compareButton.onclick = function() {
            getData(function(data) {
                // Preventing multiple comparisons
                if (profileNameElem.textContent.includes('Comparing with')) {
                    return;
                }

                // Updating profile information
                profileNameElem.textContent = `${profileNameElem.textContent.trim()} | Comparing with ${data.profileName}`;
                levelElem.textContent = `${levelElem.textContent.trim()} | ${data.profileName}: ${data.level}`;
                regDateElem.textContent = `${regDateElem.textContent.trim()} | ${data.profileName}: ${data.regDate}`;

                // Adding new account age comparison
                const newAccountAgeElem = document.createElement('h3');
                newAccountAgeElem.className = 'account-age';
                newAccountAgeElem.textContent = `${data.profileName}: ${data.accountAge}`;
                accountAgeElem.parentNode.insertBefore(newAccountAgeElem, accountAgeElem.nextSibling);

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

                // Comparing and displaying avatars
                if (data.avatarUrl) {
                    const savedAvatarElem = document.createElement('div');
                    savedAvatarElem.className = 'user-profile__ava';
                    savedAvatarElem.innerHTML = `<img src="${data.avatarUrl}" alt="${data.profileName}">`;
                    
                    avatarElem.insertAdjacentElement('afterend', savedAvatarElem);
                }

                // Comparing data from each tab
                compareTabData(totalsTab, 'totals');
                compareTabData(arcadeBattlesTab, 'arcade');
                compareTabData(realisticBattlesTab, 'realistic');
                compareTabData(simulationBattlesTab, 'simulation');
            });
        };

        // Appending buttons to the totals item
        totalsItem.appendChild(saveButton);
        totalsItem.appendChild(compareButton);
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

// Adding save and compare buttons on page load
addSaveAndCompareButtons();
