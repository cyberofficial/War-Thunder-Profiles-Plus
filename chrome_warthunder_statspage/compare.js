function addSaveAndCompareButtons() {
    const path = '#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.community__user-rate.user-rate > div.user-profile__stat.user-stat > div > ul.user-stat__list.totalsTab';
    const totalsTab = document.querySelector(path);

    if (totalsTab) {
        const totalsItem = totalsTab.querySelector('.user-stat__list-item'); // 'Totals' label

        // Create and append the Save button
        const saveButton = document.createElement('span');
        saveButton.textContent = '(Save) ';
        saveButton.style.cursor = 'pointer';
        saveButton.onclick = function() {
            let dataToSave = {};
            totalsTab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                if (index > 0) { // Skip the 'Totals' label
                    const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                    dataToSave['value' + index] = currentValue;
                }
            });
            chrome.storage.local.set(dataToSave);
            console.log('All values saved:', dataToSave);
        };

        // Create and append the Compare button
        const compareButton = document.createElement('span');
        compareButton.textContent = '(Compare) ';
        compareButton.style.cursor = 'pointer';
        compareButton.onclick = function() {
            totalsTab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                if (index > 0) { // Skip the 'Totals' label
                    chrome.storage.local.get('value' + index, function(data) {
                        if (data['value' + index] !== undefined) {
                            const savedValue = data['value' + index];
                            console.log(`Loaded saved value for item ${index}:`, savedValue); // Log the loaded saved value
                            const currentValue = parseInt(item.textContent.replace(/,/g, ''), 10);
                            const difference = currentValue - savedValue;
                            item.textContent = `${currentValue.toLocaleString()} (+${difference.toLocaleString()})`;
                        } else {
                            alert('No saved value to compare for item ' + index + '. Please click Save first.');
                        }
                    });
                }
            });
        };

        // Append the buttons next to the 'Totals' label
        totalsItem.appendChild(saveButton);
        totalsItem.appendChild(compareButton);
    }
}

// Run the function to add buttons
addSaveAndCompareButtons();