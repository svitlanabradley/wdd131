// Step 1: Declare variables for input, button, and list
const input = document.querySelector('#favchap'); 
const button = document.querySelector('button'); 
const list = document.querySelector('#list'); 

// Step 2: Add a click event listener to the button
button.addEventListener('click', function () {
    // Step 3: Check if the input value is not blank
    if (input.value.trim() !== '') {
        // Step 4: Create a new list item (li) and delete button
        const li = document.createElement('li'); 
        const deleteButton = document.createElement('button'); 

        // Step 5: Populate the li's textContent with the input value
        li.textContent = input.value;

        // Step 6: Populate the delete button with a ❌
        deleteButton.textContent = '❌';

        // Step 7: Append the delete button to the li
        li.append(deleteButton);

        // Step 8: Append the li to the list
        list.append(li);

        // Step 9: Add an event listener to the delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Remove the list item when delete button is clicked
            input.focus(); // Set focus back to the input field
        });

        // Step 10: Clear the input field and reset focus
        input.value = ''; // Clear the input
        input.focus(); // Set focus back to the input field
    } else {
        // Step 11: Handle the case where input is empty
        alert('Please enter a chapter name!'); 
        input.focus(); // Set focus back to the input field
    }
});
