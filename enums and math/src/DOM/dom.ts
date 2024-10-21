/* const input = document.getElementById('input') as HTMLInputElement;
const inputBtn = document.getElementById('inputBtn') as HTMLInputElement;
const hereWeCreateElements = document.getElementById('hereWeCreateElements') as HTMLElement;

const addItems = () => {
    const value = input.value;



    const list = document.createElement('li');


    document.body.appendChild(list);
}

addItems();


inputBtn?.addEventListener('click', addItems) */

/* 
potrzebuje fled z value z ktorego biore co ktos napisal
przycisk kroty odbiera value z feld i dodaje w section
*/

/* 
// main.ts

// DOM-Elemente auswählen
const inputElement: HTMLInputElement | null = document.getElementById('inputText') as HTMLInputElement;
const addButton: HTMLButtonElement | null = document.querySelector('button');
const shoppingList: HTMLUListElement | null = document.getElementById('myList') as HTMLUListElement;

// Funktion zum Hinzufügen eines Elements zur Liste
function addItemToList(): void {
    if (inputElement && shoppingList) {
        const itemText: string = inputElement.value.trim();
        
        if (itemText !== '') {
            // Neues Li-Element erstellen
            const newItem: HTMLLIElement = document.createElement('li');
            newItem.textContent = itemText;
            
            // Li-Element zur Liste hinzufügen
            shoppingList.appendChild(newItem);
            
            // Input-Feld leeren
            inputElement.value = '';
        }
    }
}

// Event-Listener für den Button
if (addButton) {
    addButton.addEventListener('click', addItemToList);
}

// Event-Listener für die Enter-Taste im Input-Feld
if (inputElement) {
    inputElement.addEventListener('keypress', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            addItemToList();
        }
    });
}

 */

/* // ! Trying again with step by step 'tutorial'. Trying not to look for AI help.
// 1 Set up your file
// my dom.ts

// 2 Find the important parts of your webpage

const inputText = document.getElementById('inputText') as HTMLInputElement; // looking for input box

const button = document.querySelector('#button'); // looking for button

const myList = document.querySelector('#myList'); // looking for list where items will apper / output field

// 3 Make a special helper (function) to add items

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
// 4 Make the button work / Add an event listener for 'click' / addItemToList 

button?.addEventListener("click", () => { //add event to the btn 1 argument event 2nd argument function *struggle to remember 
    addItemToList()
}); */

const nodeListParagraph = document.querySelectorAll("p") as NodeListOf<HTMLParagraphElement>;

const collectionParagraph = document.getElementsByTagName('p') as HTMLCollectionOf<HTMLParagraphElement>;


