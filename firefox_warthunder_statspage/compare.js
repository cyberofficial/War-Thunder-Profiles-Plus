function addSaveAndCompareButtons() {
        // Export Data button
        const exportButton = document.createElement('button');
        exportButton.textContent = 'Export Data';
        exportButton.style.cursor = 'pointer';
        exportButton.style.background = '#10b981';
        exportButton.style.color = '#fff';
        exportButton.style.border = 'none';
        exportButton.style.borderRadius = '5px';
        exportButton.style.padding = '3px 10px';
        exportButton.style.fontWeight = '500';
        exportButton.style.fontSize = '13px';
        exportButton.style.marginRight = '6px';
        exportButton.style.transition = 'background 0.2s';
        exportButton.onmouseover = () => exportButton.style.background = '#059669';
        exportButton.onmouseout = () => exportButton.style.background = '#10b981';
        exportButton.onclick = function() {
            getAllProfiles(function(profiles) {
                const dataStr = JSON.stringify(profiles, null, 2);
                const blob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'warthunder_profiles_backup.json';
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }, 100);
            });
        };

        // Import Data button
        const importButton = document.createElement('button');
        importButton.textContent = 'Import Data';
        importButton.style.cursor = 'pointer';
        importButton.style.background = '#818cf8';
        importButton.style.color = '#fff';
        importButton.style.border = 'none';
        importButton.style.borderRadius = '5px';
        importButton.style.padding = '3px 10px';
        importButton.style.fontWeight = '500';
        importButton.style.fontSize = '13px';
        importButton.style.marginRight = '6px';
        importButton.style.transition = 'background 0.2s';
        importButton.onmouseover = () => importButton.style.background = '#6366f1';
        importButton.onmouseout = () => importButton.style.background = '#818cf8';
        importButton.onclick = function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'application/json';
            input.onchange = function(e) {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function(evt) {
                    try {
                        const imported = JSON.parse(evt.target.result);
                        if (!Array.isArray(imported)) throw new Error('Invalid format');
                        if (typeof chrome !== 'undefined' && chrome.storage) {
                            chrome.storage.local.set({ profiles: imported }, function() {
                                alert('Profiles imported successfully!');
                                location.reload();
                            });
                        } else if (typeof browser !== 'undefined' && browser.storage) {
                            browser.storage.local.set({ profiles: imported }).then(() => {
                                alert('Profiles imported successfully!');
                                location.reload();
                            }, (error) => {
                                alert('Error importing: ' + error);
                            });
                        } else {
                            alert('Storage API not found');
                        }
                    } catch (err) {
                        alert('Invalid file or format.');
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        };
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

        // Creating Save and Compare buttons with modern styles
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.id = 'saveBtn';
        saveButton.style.cursor = 'pointer';
        saveButton.style.background = '#2563eb';
        saveButton.style.color = '#fff';
        saveButton.style.border = 'none';
        saveButton.style.borderRadius = '6px';
        saveButton.style.padding = '3px 10px';
        saveButton.style.fontWeight = '500';
        saveButton.style.fontSize = '13px';
        saveButton.style.marginRight = '6px';
        saveButton.style.boxShadow = '0 1px 2px rgba(0,0,0,0.04)';
        saveButton.style.transition = 'background 0.2s';
        saveButton.onmouseover = () => saveButton.style.background = '#1d4ed8';
        saveButton.onmouseout = () => saveButton.style.background = '#2563eb';

        // Compare dropdown and button
        const compareDropdown = document.createElement('select');
        compareDropdown.id = 'compareDropdown';
        compareDropdown.style.marginLeft = '10px';
        compareDropdown.style.display = 'none';
        compareDropdown.style.borderRadius = '5px';
        compareDropdown.style.padding = '3px 7px';
        compareDropdown.style.border = '1px solid #d1d5db';
        compareDropdown.style.background = '#e5edfa';
        compareDropdown.style.color = '#1a1a1a';
        compareDropdown.style.fontWeight = '500';
        compareDropdown.style.fontSize = '13px';
        compareDropdown.style.marginRight = '6px';

        const compareButton = document.createElement('button');
        compareButton.textContent = 'Compare';
        compareButton.id = 'compareBtn';
        compareButton.style.cursor = 'pointer';
        compareButton.style.background = '#f3f4f6';
        compareButton.style.color = '#111827';
        compareButton.style.border = '1px solid #d1d5db';
        compareButton.style.borderRadius = '6px';
        compareButton.style.padding = '3px 10px';
        compareButton.style.fontWeight = '500';
        compareButton.style.fontSize = '13px';
        compareButton.style.marginRight = '6px';
        compareButton.style.transition = 'background 0.2s';
        compareButton.onmouseover = () => compareButton.style.background = '#e5e7eb';
        compareButton.onmouseout = () => compareButton.style.background = '#f3f4f6';

        // Populate dropdown with saved profiles
        getAllProfiles(function(profiles) {
            compareDropdown.innerHTML = '';
            let deleteBtn = document.getElementById('deleteProfileBtn');
            let wipeButton = document.getElementById('wipeBtn');
            compareDropdown.style.display = 'none';
            compareButton.style.display = 'none';
            if (wipeButton) wipeButton.style.display = 'none';
            // Remove delete button if it exists
            if (deleteBtn && deleteBtn.parentNode) {
                deleteBtn.parentNode.removeChild(deleteBtn);
                deleteBtn = null;
            }

            if (profiles.length > 0) {
                compareDropdown.style.display = 'inline';
                profiles.forEach((profile, idx) => {
                    const date = new Date(profile._savedAt || profile.currentSystemTime || Date.now());
                    const option = document.createElement('option');
                    option.value = idx;
                    option.textContent = `${profile.profileName || 'Profile'} (${date.toLocaleString()})`;
                    compareDropdown.appendChild(option);
                });
                compareButton.style.display = '';
                if (wipeButton) wipeButton.style.display = '';
                // Add delete button only if profiles exist
                if (!deleteBtn) {
                    deleteBtn = document.createElement('button');
                    deleteBtn.id = 'deleteProfileBtn';
                    deleteBtn.textContent = 'Delete Selected';
                    deleteBtn.style.cursor = 'pointer';
                    deleteBtn.style.background = '#f87171';
                    deleteBtn.style.color = '#fff';
                    deleteBtn.style.border = 'none';
                    deleteBtn.style.borderRadius = '5px';
                    deleteBtn.style.padding = '3px 10px';
                    deleteBtn.style.fontWeight = '500';
                    deleteBtn.style.fontSize = '13px';
                    deleteBtn.style.marginRight = '6px';
                    deleteBtn.style.transition = 'background 0.2s';
                    deleteBtn.onmouseover = () => deleteBtn.style.background = '#ef4444';
                    deleteBtn.onmouseout = () => deleteBtn.style.background = '#f87171';
                    compareDropdown.parentNode.insertBefore(deleteBtn, compareDropdown.nextSibling);
                }
                deleteBtn.style.display = '';
                deleteBtn.onclick = function() {
                    const idx = compareDropdown.selectedIndex;
                    if (idx < 0 || profiles.length === 0) return;
                    profiles.splice(idx, 1);
                    if (typeof chrome !== 'undefined' && chrome.storage) {
                        chrome.storage.local.set({ profiles }, function() {
                            console.log('Profile deleted.');
                            getAllProfiles(function(newProfiles) {
                                compareDropdown.innerHTML = '';
                                if (deleteBtn && deleteBtn.parentNode) {
                                    deleteBtn.parentNode.removeChild(deleteBtn);
                                }
                                if (newProfiles.length > 0) {
                                    newProfiles.forEach((profile, idx) => {
                                        const date = new Date(profile._savedAt || profile.currentSystemTime || Date.now());
                                        const option = document.createElement('option');
                                        option.value = idx;
                                        option.textContent = `${profile.profileName || 'Profile'} (${date.toLocaleString()})`;
                                        compareDropdown.appendChild(option);
                                    });
                                    compareDropdown.style.display = '';
                                    compareButton.style.display = '';
                                    if (wipeButton) wipeButton.style.display = '';
                                    // Re-add delete button
                                    if (!document.getElementById('deleteProfileBtn')) {
                                        let newDeleteBtn = document.createElement('span');
                                        newDeleteBtn.id = 'deleteProfileBtn';
                                        newDeleteBtn.textContent = ' (Delete Selected)';
                                        newDeleteBtn.style.cursor = 'pointer';
                                        newDeleteBtn.style.marginLeft = '10px';
                                        compareDropdown.parentNode.insertBefore(newDeleteBtn, compareDropdown.nextSibling);
                                        newDeleteBtn.onclick = deleteBtn.onclick;
                                    }
                                } else {
                                    compareDropdown.style.display = 'none';
                                    compareButton.style.display = 'none';
                                    if (wipeButton) wipeButton.style.display = 'none';
                                }
                            });
                        });
                    } else if (typeof browser !== 'undefined' && browser.storage) {
                        browser.storage.local.set({ profiles }).then(() => {
                            console.log('Profile deleted.');
                            getAllProfiles(function(newProfiles) {
                                compareDropdown.innerHTML = '';
                                if (deleteBtn && deleteBtn.parentNode) {
                                    deleteBtn.parentNode.removeChild(deleteBtn);
                                }
                                if (newProfiles.length > 0) {
                                    newProfiles.forEach((profile, idx) => {
                                        const date = new Date(profile._savedAt || profile.currentSystemTime || Date.now());
                                        const option = document.createElement('option');
                                        option.value = idx;
                                        option.textContent = `${profile.profileName || 'Profile'} (${date.toLocaleString()})`;
                                        compareDropdown.appendChild(option);
                                    });
                                    compareDropdown.style.display = '';
                                    compareButton.style.display = '';
                                    if (wipeButton) wipeButton.style.display = '';
                                    // Re-add delete button
                                    if (!document.getElementById('deleteProfileBtn')) {
                                        let newDeleteBtn = document.createElement('span');
                                        newDeleteBtn.id = 'deleteProfileBtn';
                                        newDeleteBtn.textContent = ' (Delete Selected)';
                                        newDeleteBtn.style.cursor = 'pointer';
                                        newDeleteBtn.style.marginLeft = '10px';
                                        compareDropdown.parentNode.insertBefore(newDeleteBtn, compareDropdown.nextSibling);
                                        newDeleteBtn.onclick = deleteBtn.onclick;
                                    }
                                } else {
                                    compareDropdown.style.display = 'none';
                                    compareButton.style.display = 'none';
                                    if (wipeButton) wipeButton.style.display = 'none';
                                }
                            });
                        }, (error) => {
                            console.error(`Error: ${error}`);
                        });
                    } else {
                        console.error('Storage API not found');
                    }
                };
            }
        });

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

            // Reload the page after saving
            location.reload();
        };

        // Compare functionality for selected profile
        compareButton.onclick = function() {
            getAllProfiles(function(profiles) {
                const idx = compareDropdown.selectedIndex;
                if (profiles.length === 0 || idx < 0) return;
                const data = profiles[idx];
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

        // Appending buttons and dropdown to the header
        sectionHeader.appendChild(saveButton);
        sectionHeader.appendChild(exportButton);
        sectionHeader.appendChild(importButton);
        sectionHeader.appendChild(compareDropdown);
        sectionHeader.appendChild(compareButton);
        // add a button to wipe data
        const wipeButton = document.createElement('button');
        wipeButton.textContent = 'Wipe Data';
        wipeButton.style.cursor = 'pointer';
        wipeButton.id = 'wipeBtn';
        wipeButton.style.background = '#fbbf24';
        wipeButton.style.color = '#111827';
        wipeButton.style.border = 'none';
        wipeButton.style.borderRadius = '5px';
        wipeButton.style.padding = '3px 10px';
        wipeButton.style.fontWeight = '500';
        wipeButton.style.fontSize = '13px';
        wipeButton.style.transition = 'background 0.2s';
        wipeButton.onmouseover = () => wipeButton.style.background = '#f59e42';
        wipeButton.onmouseout = () => wipeButton.style.background = '#fbbf24';
        wipeButton.onclick = function() {
            if (confirm('Are you sure you want to clear all saved profiles? This action cannot be undone.')) {
                wipeData();
            }
        }
        sectionHeader.appendChild(wipeButton);
    }
}

// Helper functions to save and retrieve data
function saveData(dataToSave) {
    // Add a timestamp to each save for uniqueness
    dataToSave._savedAt = Date.now();
    // Retrieve existing profiles array, append new, and save
    getAllProfiles(function(profiles) {
        if (!Array.isArray(profiles)) profiles = [];
        profiles.push(dataToSave);
        if (typeof chrome !== 'undefined' && chrome.storage) {
            chrome.storage.local.set({ profiles }, function() {
                console.log('Profiles array saved in Chrome storage:', profiles);
            });
        } else if (typeof browser !== 'undefined' && browser.storage) {
            browser.storage.local.set({ profiles }).then(() => {
                console.log('Profiles array saved in Firefox storage:', profiles);
            }, (error) => {
                console.error(`Error: ${error}`);
            });
        } else {
            console.error('Storage API not found');
        }
    });
}

// Helper to get all saved profiles as an array
function getAllProfiles(callback) {
    if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.local.get(['profiles'], function(result) {
            callback(result.profiles || []);
        });
    } else if (typeof browser !== 'undefined' && browser.storage) {
        browser.storage.local.get('profiles').then(result => {
            callback(result.profiles || []);
        }, (error) => {
            console.error(`Error: ${error}`);
            callback([]);
        });
    } else {
        console.error('Storage API not found');
        callback([]);
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
        chrome.storage.local.set({ profiles: [] }, function() {
            console.log('All profiles wiped from Chrome storage');
            // update compare button text and dropdown
            const compareButton = document.getElementById('compareBtn');
            if (compareButton) compareButton.textContent = ' (Compare)';
            const compareDropdown = document.getElementById('compareDropdown');
            if (compareDropdown) {
                compareDropdown.innerHTML = '';
                compareDropdown.style.display = 'none';
            }
            location.reload();
        });
    } else if (typeof browser !== 'undefined' && browser.storage) {
        browser.storage.local.set({ profiles: [] }).then(() => {
            console.log('All profiles wiped from Firefox storage');
            const compareButton = document.getElementById('compareBtn');
            if (compareButton) compareButton.textContent = ' (Compare)';
            const compareDropdown = document.getElementById('compareDropdown');
            if (compareDropdown) {
                compareDropdown.innerHTML = '';
                compareDropdown.style.display = 'none';
            }
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
