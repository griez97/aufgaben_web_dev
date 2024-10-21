// Dom-Elements-TS-Level-1_9

//1 - get the elements from html into ts 

const farbeAuswahlen = document.getElementById('farbeAuswahlen') as HTMLSelectElement;
const button = document.getElementById('button');

//2 - funtion to remove selected option, hmmm

const removeSelected = () => {
    const selected = farbeAuswahlen.selectedIndex;
    console.log(selected);
    

    if(selected){
        farbeAuswahlen.remove(selected)
    }
}

//3 - add event onto btn

button?.addEventListener('click', (e) => { // Added event parameter 'e'
    e.preventDefault(); // Prevents the form from submitting / this part was done with the help of internet 
    removeSelected(); // Call the function to remove the selected option
});