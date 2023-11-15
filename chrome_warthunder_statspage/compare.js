function addSaveAndCompareButtons() {
    const totalsPath = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab';
    const profileNameSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > li.user-profile__data-nick';
    const levelSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > li:nth-child(4)';
    const regDateSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > li.user-profile__data-regdate';
    const accountAgeSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > h3';

    const totalsTab = document.querySelector(totalsPath);
    const profileNameElem = document.querySelector(profileNameSelector);
    const levelElem = document.querySelector(levelSelector);
    const regDateElem = document.querySelector(regDateSelector);
    const accountAgeElem = document.querySelector(accountAgeSelector);

    if (totalsTab && profileNameElem && levelElem && regDateElem && accountAgeElem) {
        const totalsItem = totalsTab.querySelector('.user-stat__list-item'); // 'Totals' label

        // Create and append the Save button
        const saveButton = document.createElement('span');
        saveButton.textContent = ' (Save)';
        saveButton.style.cursor = 'pointer';
        saveButton.onclick = function() {
            let dataToSave = {};
            totalsTab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                if (index > 0) { // Skip the 'Totals' label
                    const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                    dataToSave['value' + index] = currentValue;
                }
            });
            dataToSave['profileName'] = profileNameElem.textContent.trim();
            dataToSave['level'] = levelElem.textContent.trim();
            dataToSave['regDate'] = regDateElem.textContent.trim();
            dataToSave['accountAge'] = accountAgeElem.textContent.trim();
            chrome.storage.local.set(dataToSave);
            console.log('All values, profile name, level, registration date, and account age saved:', dataToSave);
        };

        // Create and append the Compare button
        const compareButton = document.createElement('span');
        compareButton.textContent = ' (Compare)';
        compareButton.style.cursor = 'pointer';
        compareButton.onclick = function() {
            // check if document.querySelector("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > li.user-profile__data-nick") has compare in it, if so ignore
            const profileName = profileNameElem.textContent.trim();
            if (profileName.includes('Comparing with')) {
                return;
            }
            chrome.storage.local.get(null, function(data) {
                profileNameElem.textContent = `${profileNameElem.textContent.trim()} | Comparing with ${data.profileName}`;
                levelElem.textContent = `${levelElem.textContent.trim()} | ${data.profileName}: ${data.level}`;
                regDateElem.textContent = `${regDateElem.textContent.trim()} | ${data.profileName}: ${data.regDate}`;

                // Create a new h3 element for account age comparison
                const newAccountAgeElem = document.createElement('h3');
                newAccountAgeElem.className = 'account-age';
                newAccountAgeElem.textContent = `${data.profileName}: ${data.accountAge}`;
                accountAgeElem.parentNode.insertBefore(newAccountAgeElem, accountAgeElem.nextSibling);

                totalsTab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                    if (index > 0 && data['value' + index] !== undefined) {
                        const savedValue = data['value' + index];
                        const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                        const difference = currentValue - savedValue;
                        const differenceText = difference >= 0 ? `+${difference}` : difference;
                        item.textContent = `${currentValue} | ${savedValue} | ${differenceText}`;
                    } else if (index > 0) {
                        alert('No saved value to compare for item ' + index + '. Please click Save first.');
                    }
                });
            });
        };

        // Append the buttons next to the 'Totals' label
        totalsItem.appendChild(saveButton);
        totalsItem.appendChild(compareButton);
    }
}

// Run the function to add buttons
addSaveAndCompareButtons();
