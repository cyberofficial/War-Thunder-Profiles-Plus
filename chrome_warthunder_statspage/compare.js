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
    const aviation_AB_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible';
    const aviation_RB_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.historyFightTab';
    const aviation_SB_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.simulationFightTab';
    const aviation_total_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.totalsTab';
    const ground_AB_row =  '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.arcadeFightTab.is-visible';
    const ground_RB_row =  '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.historyFightTab';
    const ground_SB_row =  '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.simulationFightTab';
    const ground_total_row =  '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(2) > ul.user-stat__list.totalsTab';
    const ab_naval_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.arcadeFightTab.is-visible';
    const rb_naval_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.historyFightTab';
    const naval_total_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div:nth-child(3) > ul.user-stat__list.totalsTab';
    const totalUnits_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(2)';
    const totalEliteUnits_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(3)';
    const totalMedals_row = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(4)';
    const totalUnits = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(2) > li.user-score__list-item.user-score__list-item--plane';
    const totalEliteUnitsNumber = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(3) > li.user-score__list-item.user-score__list-item--elitplanes';
    const totalMedalsNumber = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(4) > li.user-score__list-item.user-score__list-item--orderlevel';

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

            function saveABNavalData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave['abNavalvalue' + index] = currentValue;
                    }
                });
            }

            // save the column data for AB Naval
            saveABNavalData(ab_naval_row_elem, 'abNaval');

            function saveRBNavalData(tab, tabName) {
                tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > -1) {
                        const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                        dataToSave['rbNavalvalue' + index] = currentValue;
                    }
                });
            }

            // save the column data for RB Naval
            saveRBNavalData(rb_naval_row_elem, 'rbNaval');

            function saveNavalTotalData(tab, tabName) {
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

                // Compare aviation AB data with #bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-rate__fightType > div > div.user-stat__list-row.is-active > ul.user-stat__list.arcadeFightTab.is-visible
                function AB_compareTabData(tab, tabName) {
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

                function compareAviationRBData(tab, tabName) {
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

                function compareAviationSBData(tab, tabName) {
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

                function compareAviationTotalData(tab, tabName) {
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

                function compareGroundABData(tab, tabName) {
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

                function compareGroundRBData(tab, tabName) {
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

                function compareGroundSBData(tab, tabName) {
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

                function compareGroundTotalData(tab, tabName) {
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

                function compareABNavalData(tab, tabName) {
                    tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                        const savedValue = data['abNavalvalue' + index];
                        if (savedValue !== undefined) {
                            const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                            const difference = currentValue - savedValue;
                            const differenceText = difference >= 0 ? `+${difference}` : difference;
                            item.innerHTML = `${currentValue} | ${savedValue} | <span class="${difference >= 0 ? 'positive' : 'negative'}">${differenceText}</span>`;
                        }
                    });
                }

                function compareRBNavalData(tab, tabName) {
                    tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                        const savedValue = data['rbNavalvalue' + index];
                        if (savedValue !== undefined) {
                            const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                            const difference = currentValue - savedValue;
                            const differenceText = difference >= 0 ? `+${difference}` : difference;
                            item.innerHTML = `${currentValue} | ${savedValue} | <span class="${difference >= 0 ? 'positive' : 'negative'}">${differenceText}</span>`;
                        }
                    });
                }

                function compareNavalTotalData(tab, tabName) {
                    tab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                        const savedValue = data['navalTotalvalue' + index];
                        if (savedValue !== undefined) {
                            const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                            const difference = currentValue - savedValue;
                            const differenceText = difference >= 0 ? `+${difference}` : difference;
                            item.innerHTML = `${currentValue} | ${savedValue} | <span class="${difference >= 0 ? 'positive' : 'negative'}">${differenceText}</span>`;
                        }
                    });
                }

                function compareTotalUnitsData(tab, tabName) {
                    tab.querySelectorAll('.user-score__list-item').forEach((item, index) => {
                        const savedValue = data['totalUnitsvalue' + index];
                        if (savedValue !== undefined) {
                            const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                            const difference = currentValue - savedValue;
                            // if the difference is 0 then don't show the difference
                            if (difference === 0) {
                                item.innerHTML = `${currentValue} | ${savedValue}`;
                            } else {
                                const differenceText = difference >= 0 ? `+${difference}` : difference;
                                item.innerHTML = `${currentValue} | ${savedValue} | <span class="${difference >= 0 ? 'positive' : 'negative'}">${differenceText}</span>`;
                            }
                        }
                    });
                }

                function compareTotalEliteUnitsData(tab, tabName) {
                    tab.querySelectorAll('.user-score__list-item').forEach((item, index) => {
                        const savedValue = data['totalEliteUnitsvalue' + index];
                        if (savedValue !== undefined) {
                            const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                            const difference = currentValue - savedValue;
                            // if the difference is 0 then don't show the difference
                            if (difference === 0) {
                                item.innerHTML = `${currentValue} | ${savedValue}`;
                            } else {
                                const differenceText = difference >= 0 ? `+${difference}` : difference;
                                item.innerHTML = `${currentValue} | ${savedValue} | <span class="${difference >= 0 ? 'positive' : 'negative'}">${differenceText}</span>`;
                            }
                        }
                    });
                }

                function compareTotalMedalsData(tab, tabName) {
                    tab.querySelectorAll('.user-score__list-item').forEach((item, index) => {
                        const savedValue = data['totalMedalsvalue' + index];
                        if (savedValue !== undefined) {
                            const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                            const difference = currentValue - savedValue;
                            // if the difference is 0 then don't show the difference
                            if (difference === 0) {
                                item.innerHTML = `${currentValue} | ${savedValue}`;
                            } else {
                                const differenceText = difference >= 0 ? `+${difference}` : difference;
                                item.innerHTML = `${currentValue} | ${savedValue} | <span class="${difference >= 0 ? 'positive' : 'negative'}">${differenceText}</span>`;
                            }
                        }
                    });
                }

                const totalUnitsValue = parseInt(totalUnits_elem.textContent.split(' ')[2].replace(/,/g, ''), 10);
                const savedTotalUnitsValue = data['totalUnitsValue'];
                const totalUnitsDifference = totalUnitsValue - savedTotalUnitsValue;
                // if the difference is 0 then don't show the difference
                if (totalUnitsDifference === 0) {
                    totalUnits_elem.innerHTML = `TOTAL UNITS: ${totalUnitsValue}`;
                } else {
                    const totalUnitsDifferenceText = totalUnitsDifference >= 0 ? `+${totalUnitsDifference}` : totalUnitsDifference;
                    totalUnits_elem.innerHTML = `TOTAL UNITS: ${totalUnitsValue} | ${savedTotalUnitsValue} | <span class="${totalUnitsDifference >= 0 ? 'positive' : 'negative'}">${totalUnitsDifferenceText}</span>`;
                }

                const totalEliteUnitsNumberValue = parseInt(totalEliteUnitsNumber_elem.textContent.split(' ')[2].replace(/,/g, ''), 10);
                const savedTotalEliteUnitsNumberValue = data['totalEliteUnitsNumberValue'];
                const totalEliteUnitsNumberDifference = totalEliteUnitsNumberValue - savedTotalEliteUnitsNumberValue;
                // if the difference is 0 then don't show the difference
                if (totalEliteUnitsNumberDifference === 0) {
                    totalEliteUnitsNumber_elem.innerHTML = `ELITE UNITS: ${totalEliteUnitsNumberValue}`;
                } else {
                    const totalEliteUnitsNumberDifferenceText = totalEliteUnitsNumberDifference >= 0 ? `+${totalEliteUnitsNumberDifference}` : totalEliteUnitsNumberDifference;
                    totalEliteUnitsNumber_elem.innerHTML = `ELITE UNITS: ${totalEliteUnitsNumberValue} | ${savedTotalEliteUnitsNumberValue} | <span class="${totalEliteUnitsNumberDifference >= 0 ? 'positive' : 'negative'}">${totalEliteUnitsNumberDifferenceText}</span>`;
                }

                const totalMedalsNumberValue = parseInt(totalMedalsNumber_elem.textContent.split(' ')[2].replace(/,/g, ''), 10);
                const savedTotalMedalsNumberValue = data['totalMedalsNumberValue'];
                const totalMedalsNumberDifference = totalMedalsNumberValue - savedTotalMedalsNumberValue;
                // if the difference is 0 then don't show the difference
                if (totalMedalsNumberDifference === 0) {
                    totalMedalsNumber_elem.innerHTML = `Total Medals: ${totalMedalsNumberValue}`;
                } else {
                    const totalMedalsNumberDifferenceText = totalMedalsNumberDifference >= 0 ? `+${totalMedalsNumberDifference}` : totalMedalsNumberDifference;
                    totalMedalsNumber_elem.innerHTML = `Total Medals: ${totalMedalsNumberValue} | ${savedTotalMedalsNumberValue} | <span class="${totalMedalsNumberDifference >= 0 ? 'positive' : 'negative'}">${totalMedalsNumberDifferenceText}</span>`;
                }


                compareTabData(totalsTab, 'totals');
                compareTabData(arcadeBattlesTab, 'arcade');
                compareTabData(realisticBattlesTab, 'realistic');
                compareTabData(simulationBattlesTab, 'simulation');
                AB_compareTabData(aviation_AB_row_elem, 'aviationAB');
                compareAviationRBData(aviation_RB_row_elem, 'aviationRB');
                compareAviationSBData(aviation_SB_row_elem, 'aviationSB');
                compareAviationTotalData(aviation_total_row_elem, 'aviationTotal');
                compareGroundABData(ground_AB_row_elem, 'groundAB');
                compareGroundRBData(ground_RB_row_elem, 'groundRB');
                compareGroundSBData(ground_SB_row_elem, 'groundSB');
                compareGroundTotalData(ground_total_row_elem, 'groundTotal');
                compareABNavalData(ab_naval_row_elem, 'abNaval');
                compareRBNavalData(rb_naval_row_elem, 'rbNaval');
                compareNavalTotalData(naval_total_row_elem, 'navalTotal');
                compareTotalUnitsData(totalUnits_row_elem, 'totalUnits');
                compareTotalEliteUnitsData(totalEliteUnits_row_elem, 'totalEliteUnits');
                compareTotalMedalsData(totalMedals_row_elem, 'totalMedals');
                
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
