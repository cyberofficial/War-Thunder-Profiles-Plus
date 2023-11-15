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
        const totalsItem = totalsTab.querySelector('.user-stat__list-item');

        const saveButton = document.createElement('span');
        saveButton.textContent = ' (Save)';
        saveButton.style.cursor = 'pointer';
        const compareButton = document.createElement('span');
        compareButton.textContent = ' (Compare)';
        compareButton.style.cursor = 'pointer';

        saveButton.onclick = function() {
            let dataToSave = {};
            totalsTab.querySelectorAll('.user-stat__list-item').forEach((item, index) => {
                if (index > 0) {
                    const currentValue = parseInt(item.textContent.split(' | ')[0].replace(/,/g, ''), 10);
                    dataToSave['value' + index] = currentValue;
                }
            });
            dataToSave['profileName'] = profileNameElem.textContent.trim();
            dataToSave['level'] = levelElem.textContent.trim();
            dataToSave['regDate'] = regDateElem.textContent.trim();
            dataToSave['accountAge'] = accountAgeElem.textContent.trim();
            saveData(dataToSave);
        };

        compareButton.onclick = function() {
            getData(function(data) {
                profileNameElem.textContent = `${profileNameElem.textContent.trim()} | Comparing with ${data.profileName}`;
                levelElem.textContent = `${levelElem.textContent.trim()} | ${data.profileName}: ${data.level}`;
                regDateElem.textContent = `${regDateElem.textContent.trim()} | ${data.profileName}: ${data.regDate}`;

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

        totalsItem.appendChild(saveButton);
        totalsItem.appendChild(compareButton);
    }
}

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

addSaveAndCompareButtons();