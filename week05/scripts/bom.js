// Step 1: Declare variables for input, button, and list
const input = document.querySelector('#favchap'); 
const button = document.querySelector('button'); 
const list = document.querySelector('#list'); 

const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Step 2: Add a click event listener to the button
button.addEventListener('click', function () {
    // Step 3: Check if the input value is not blank
    if (input.value !== '') { // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    } else {
        // Step 11: Handle the case where input is empty
        alert('Please enter a chapter name!'); 
        input.focus(); // Set focus back to the input field
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it')
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}