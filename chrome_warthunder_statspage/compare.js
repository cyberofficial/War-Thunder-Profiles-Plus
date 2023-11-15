function addSaveAndCompareButtons() {
    const path = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab';
    const totalsTab = document.querySelector(path);
    const profileNameSelector = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile > ul > li.user-profile__data-nick';
    const profileNameElem = document.querySelector(profileNameSelector);

    if (totalsTab && profileNameElem) {
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
            const profileName = profileNameElem.textContent.trim();
            dataToSave['profileName'] = profileName;
            chrome.storage.local.set(dataToSave);
            console.log('All values and profile name saved:', dataToSave);
        };

        // Create and append the Compare button
        const compareButton = document.createElement('span');
        compareButton.textContent = ' (Compare)';
        compareButton.style.cursor = 'pointer';
        compareButton.onclick = function() {
            chrome.storage.local.get(null, function(data) {
                if (data.profileName !== undefined) {
                    profileNameElem.textContent = `${profileNameElem.textContent.trim()} | Comparing with ${data.profileName}`;
                }
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
