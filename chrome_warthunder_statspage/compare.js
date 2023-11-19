function addSaveAndCompareButtons() {
    // Selectors for various parts of the page
    const baseSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info';
    const userProfileSelector = `${baseSelector} > div.user-profile`;
    const userRateSelector = `${baseSelector} > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div`;
    const userRateFightTypeSelector = `${baseSelector} > div.community__user-rate.user-rate > div.user-rate__fightType > div`;
    
    // User Profile Information
    const profileNameSelector = `${userProfileSelector} > ul > li.user-profile__data-nick`;
    const levelSelector = `${userProfileSelector} > ul > li:nth-child(4)`;
    const regDateSelector = `${userProfileSelector} > ul > li.user-profile__data-regdate`;
    const accountAgeSelector = `${userProfileSelector} > ul > h3`;
    const avatarSelector = `${userProfileSelector} > div`;
    
    // User Stats
    const totalsPath = `${userRateSelector} > ul.totalsTab`;
    const arcadeBattlesSelector = `${userRateSelector} > ul.arcadeFightTab.is-visible`;
    const realisticBattlesSelector = `${userRateSelector} > ul.historyFightTab`;
    const simulationBattlesSelector = `${userRateSelector} > ul.simulationFightTab`;
    
    // Aviation Rows
    const aviation_AB_row = `${userRateFightTypeSelector} > div.user-stat__list-row.is-active > ul.arcadeFightTab.is-visible`;
    const aviation_RB_row = `${userRateFightTypeSelector} > div.user-stat__list-row.is-active > ul.historyFightTab`;
    const aviation_SB_row = `${userRateFightTypeSelector} > div.user-stat__list-row.is-active > ul.simulationFightTab`;
    const aviation_total_row = `${userRateFightTypeSelector} > div.user-stat__list-row.is-active > ul.totalsTab`;
    
    // Ground Rows
    const ground_AB_row = `${userRateFightTypeSelector} > div:nth-child(2) > ul.arcadeFightTab.is-visible`;
    const ground_RB_row = `${userRateFightTypeSelector} > div:nth-child(2) > ul.historyFightTab`;
    const ground_SB_row = `${userRateFightTypeSelector} > div:nth-child(2) > ul.simulationFightTab`;
    const ground_total_row = `${userRateFightTypeSelector} > div:nth-child(2) > ul.totalsTab`;
    
    // Naval Rows
    const ab_naval_row = `${userRateFightTypeSelector} > div:nth-child(3) > ul.arcadeFightTab.is-visible`;
    const rb_naval_row = `${userRateFightTypeSelector} > div:nth-child(3) > ul.historyFightTab`;
    const naval_total_row = `${userRateFightTypeSelector} > div:nth-child(3) > ul.totalsTab`;
    
    // Total Units
    const totalUnits_row = `${baseSelector} > div.user-profile__score.user-score > ul:nth-child(2)`;
    const totalEliteUnits_row = `${baseSelector} > div.user-profile__score.user-score > ul:nth-child(3)`;
    const totalMedals_row = `${baseSelector} > div.user-profile__score.user-score > ul:nth-child(4)`;
    const totalUnits = `${totalUnits_row} > li.user-score__list-item.user-score__list-item--plane`;
    const totalEliteUnitsNumber = `${totalEliteUnits_row} > li.user-score__list-item.user-score__list-item--elitplanes`;
    const totalMedalsNumber = `${totalMedals_row} > li.user-score__list-item.user-score__list-item--orderlevel`;
    
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
    const aviation_AB_row_elem = document.querySelector(aviation_AB_row);
    const aviation_RB_row_elem = document.querySelector(aviation_RB_row);
    const aviation_SB_row_elem = document.querySelector(aviation_SB_row);
    const aviation_total_row_elem = document.querySelector(aviation_total_row);
    const ground_AB_row_elem = document.querySelector(ground_AB_row);
    const ground_RB_row_elem = document.querySelector(ground_RB_row);
    const ground_SB_row_elem = document.querySelector(ground_SB_row);
    const ground_total_row_elem = document.querySelector(ground_total_row);
    const ab_naval_row_elem = document.querySelector(ab_naval_row);
    const rb_naval_row_elem = document.querySelector(rb_naval_row);
    const naval_total_row_elem = document.querySelector(naval_total_row);
    const totalUnits_row_elem = document.querySelector(totalUnits_row);
    const totalEliteUnits_row_elem = document.querySelector(totalEliteUnits_row);
    const totalMedals_row_elem = document.querySelector(totalMedals_row);
    const totalUnits_elem = document.querySelector(totalUnits);
    const totalEliteUnitsNumber_elem = document.querySelector(totalEliteUnitsNumber);
    const totalMedalsNumber_elem = document.querySelector(totalMedalsNumber);

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
                    const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                    dataToSave[`${tabName}value${index}`] = currentValue;
                });
            }
            
            // Saving data from each tab
            saveTabData(totalsTab, 'totals');
            saveTabData(arcadeBattlesTab, 'arcade');
            saveTabData(realisticBattlesTab, 'realistic');
            saveTabData(simulationBattlesTab, 'simulation');

            // get all user-score__list-item from user-score__list-col excluding user-score__list-item user-score__list-item--plane from #bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(2)
            totalUnits_row_elem.querySelectorAll('.user-score__list-col:not(.user-score__list-col--plane) .user-score__list-item').forEach((item, index) => {
                const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                dataToSave[`totalUnitsvalue${index}`] = currentValue;
            });

            // parse the total units value, the text looks like "TOTAL UNITS: 2322" just want the number
            const totalUnitsValue = parseInt(totalUnits_elem.textContent.split(' ')[2].replace(/,/g, ''), 10);
            dataToSave['totalUnitsValue'] = totalUnitsValue;
            const totalEliteUnitsNumberValue = parseInt(totalEliteUnitsNumber_elem.textContent.split(' ')[2].replace(/,/g, ''), 10);
            dataToSave['totalEliteUnitsNumberValue'] = totalEliteUnitsNumberValue;
            const totalMedalsNumberValue = parseInt(totalMedalsNumber_elem.textContent.split(' ')[2].replace(/,/g, ''), 10);
            dataToSave['totalMedalsNumberValue'] = totalMedalsNumberValue;

            // save the column data for total units
            saveTabData(totalUnits_row_elem, 'totalUnits');

            // same thing but not user-score__list-item user-score__list-item--elitplanes
            totalEliteUnits_row_elem.querySelectorAll('.user-score__list-col:not(.user-score__list-col--elitplanes) .user-score__list-item').forEach((item, index) => {
                const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                dataToSave[`totalEliteUnitsvalue${index}`] = currentValue;
            });

            // save the column data for total elite units
            saveTabData(totalEliteUnits_row_elem, 'totalEliteUnits');

            // same thing but user-score__list-item user-score__list-item--orderlevel
            totalMedals_row_elem.querySelectorAll('.user-score__list-col:not(.user-score__list-col--orderlevel) .user-score__list-item').forEach((item, index) => {
                const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                dataToSave[`totalMedalsvalue${index}`] = currentValue;
            });

            function saveAviationData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave[`${tabName}value${index}`] = currentValue;
                    }
                });
            }

            // save the column data for aviation AB
            saveAviationData(aviation_AB_row_elem, 'aviationAB');

            function saveAviationRBData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave[`${tabName}value${index}`] = currentValue;
                    }
                });
            }

            // save the column data for aviation RB
            saveAviationRBData(aviation_RB_row_elem, 'aviationRB');

            function saveAviationSBData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave[`${tabName}value${index}`] = currentValue;
                    }
                });
            }

            // save the column data for aviation SB
            saveAviationSBData(aviation_SB_row_elem, 'aviationSB');

            function saveAviationTotalData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave[`${tabName}value${index}`] = currentValue;
                    }
                });
            }

            // save the column data for aviation total
            saveAviationTotalData(aviation_total_row_elem, 'aviationTotal');

            function saveGroundABData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave[`${tabName}value${index}`] = currentValue;
                    }
                });
            }

            // save the column data for ground AB
            saveGroundABData(ground_AB_row_elem, 'groundAB');

            function saveGroundRBData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave[`${tabName}value${index}`] = currentValue;
                    }
                });
            }

            // save the column data for ground RB
            saveGroundRBData(ground_RB_row_elem, 'groundRB');

            function saveGroundSBData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave[`${tabName}value${index}`] = currentValue;
                    }
                });
            }

            // save the column data for ground SB
            saveGroundSBData(ground_SB_row_elem, 'groundSB');

            function saveGroundTotalData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave[`${tabName}value${index}`] = currentValue;
                    }
                });
            }

            // save the column data for ground total
            saveGroundTotalData(ground_total_row_elem, 'groundTotal');

            function saveABNavalData(tab) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave['abNavalvalue' + index] = currentValue;
                    }
                });
            }

            // save the column data for AB Naval
            saveABNavalData(ab_naval_row_elem, 'abNaval');

            function saveRBNavalData(tab) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave['rbNavalvalue' + index] = currentValue;
                    }
                });
            }

            // save the column data for RB Naval
            saveRBNavalData(rb_naval_row_elem, 'rbNaval');

            function saveNavalTotalData(tab) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave['navalTotalvalue' + index] = currentValue;
                    }
                });
            }

            // save the column data for Naval total
            saveNavalTotalData(naval_total_row_elem, 'navalTotal');

            // Saving additional profile data
            dataToSave['profileName'] = profileNameElem.textContent.trim();
            dataToSave['level'] = levelElem.textContent.trim();
            dataToSave['regDate'] = regDateElem.textContent.trim();
            dataToSave['accountAge'] = accountAgeElem.textContent.trim();
            dataToSave['currentSystemTime'] = Date.now();

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
                const existingClonedProfile = document.getElementById('cloned-profile');
                if (existingClonedProfile) {
                    existingClonedProfile.remove();
                }

                if (profileNameElem.textContent.includes('Comparing with') || !data.profileName) {
                    return;
                }

                const profileSection = document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile");
                const clonedProfile = profileSection.cloneNode(true);
                clonedProfile.id = 'cloned-profile';

                updateProfile(clonedProfile, data);
                profileSection.parentNode.insertBefore(clonedProfile, profileSection.nextSibling);

                // Compare tab data
                compareTabData(totalsTab, 'totals', data);
                compareTabData(arcadeBattlesTab, 'arcade', data);
                compareTabData(realisticBattlesTab, 'realistic', data);
                compareTabData(simulationBattlesTab, 'simulation', data);
                compareTabData(aviation_AB_row_elem, 'aviationAB', data);
                compareTabData(aviation_RB_row_elem, 'aviationRB', data);
                compareTabData(aviation_SB_row_elem, 'aviationSB', data);
                compareTabData(aviation_total_row_elem, 'aviationTotal', data);
                compareTabData(ground_AB_row_elem, 'groundAB', data);
                compareTabData(ground_RB_row_elem, 'groundRB', data);
                compareTabData(ground_SB_row_elem, 'groundSB', data);
                compareTabData(ground_total_row_elem, 'groundTotal', data);
                compareTabData(ab_naval_row_elem, 'abNaval', data);
                compareTabData(rb_naval_row_elem, 'rbNaval', data);
                compareTabData(naval_total_row_elem, 'navalTotal', data);

                // Compare vehicles and rewards data
                compareData(totalUnits_row_elem, 'totalUnits', data);
                compareData(totalEliteUnits_row_elem, 'totalEliteUnits', data);
                compareData(totalMedals_row_elem, 'totalMedals', data);
            });
        };

        function updateProfile(clonedProfile, data) {
            if (data.avatarUrl) {
                clonedProfile.querySelector('.user-profile__ava img').src = data.avatarUrl;
                clonedProfile.querySelector('.user-profile__ava img').alt = data.profileName;
            }

            const clonedClanTagElem = clonedProfile.querySelector('.user-profile__data-clan a');
            if (clonedClanTagElem) {
                clonedClanTagElem.textContent = data.clanTag;
                clonedClanTagElem.href = data.clanUrl;
            }

            const date = new Date(data.currentSystemTime);
            clonedProfile.querySelector('li.user-profile__data-nick').textContent = 'Comparing with: ' + data.profileName + ' | From ' + date.toLocaleString();
            clonedProfile.querySelector('li:nth-child(4)').textContent = `${data.level}`;
            clonedProfile.querySelector('li.user-profile__data-regdate').textContent = `${data.regDate}`;
            clonedProfile.querySelector('h3.account-age').textContent = `${data.accountAge}`;
        }

        function compareTabData(tab, tabName, data) {
            tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                const savedValue = data[`${tabName}value${index}`];
                if (savedValue !== undefined) {
                    const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                    const difference = currentValue - savedValue;
                    const differenceText = difference >= 0 ? `+${difference}` : difference;
                    item.innerHTML = `${currentValue} | ${savedValue} | <span class="${difference >= 0 ? 'positive' : 'negative'}">${differenceText}</span>`;
                }
            });
        }

        function compareData(tab, tabName, data) {
            tab.querySelectorAll('.user-stat__list-item, .user-score__list-item').forEach((item, index) => {
                const savedValue = data[`${tabName}value${index}`];
                if (savedValue !== undefined) {
                    const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                    const difference = currentValue - savedValue;
                    const differenceText = difference >= 0 ? `+${difference}` : difference;
                    item.innerHTML = difference === 0
                        ? `${currentValue} | ${savedValue}`
                        : `${currentValue} | ${savedValue} | <span class="${difference >= 0 ? 'positive' : 'negative'}">${differenceText}</span>`;
                }
            });
        }

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
