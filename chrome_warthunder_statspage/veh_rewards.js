// Function to calculate and display the total for a specific list
function calculateAndDisplayTotal(selector, totalLabel) {
    // Select the list
    let list = document.querySelector(selector);

    // Ensure the list exists
    if (!list) {
        console.error("List not found for selector: " + selector);
        return;
    }

    // Get all list items
    let listItems = list.querySelectorAll("li");

    // Calculate the total, skipping the first item
    let total = 0;
    for (let i = 1; i < listItems.length; i++) {
        total += parseInt(listItems[i].textContent) || 0;
    }

    // Update the first list item with the total
    if (listItems.length > 0) {
        listItems[0].textContent = `${totalLabel}: ${total}`;
    }
}

// Call the function for each list with appropriate selectors and labels
calculateAndDisplayTotal("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(2)", "Total Units");
calculateAndDisplayTotal("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(3)", "Elite Units");
calculateAndDisplayTotal("#bodyRoot > div.content > div:nth-child(2) > div:nth-child(3) > div > section > div.user-info > div.user-profile__score.user-score > ul:nth-child(4)", "Total Medals");
