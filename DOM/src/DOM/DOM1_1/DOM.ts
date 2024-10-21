// Dom-Elements-TS-Level-1_1

// ! Trying with 'step by step'

// 1 - Set up your file
// my dom.ts

// 2 - Find the important parts of your webpage / create variables

const inputText = document.getElementById('inputText') as HTMLInputElement; // looking for input box

const button = document.querySelector('#button'); // looking for button

const myList = document.querySelector('#myList'); // looking for list where items will apper / output field

// 3 - Make a special helper (function) to add items

const addItemToList = () => {
    //get the text from the input box
    const inputValue = inputText.value.trim(); // gets the value, get rid of space bars

    if(inputValue){
        // Create a new item for your list
        const li = document.createElement('li'); // create list element 
        li.textContent = inputValue; // in list element 'upload' whatever user wrote 
        myList?.appendChild(li); //create child element within myList aka <ul> 
        inputText.value = ""; // clear the field 
    }
}
// 4 - Make the button work / Add an event listener for 'click' / addItemToList 

button?.addEventListener("click", () => { //add event to the btn 1 argument event 2nd argument function *struggle to remember 
    addItemToList()
});