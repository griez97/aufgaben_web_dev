// Dom-Elements-TS-Level-2_2

// 1 get elements

const vorname = document.getElementById("vorname") as HTMLInputElement;

const nachname = document.getElementById("nachname") as HTMLInputElement;

const land = document.getElementById("land") as HTMLInputElement;

const submit = document.getElementById("submit") as HTMLInputElement;

// 2 i guess i need the value off vor- nachname
// + the chosen option

const inputValues = () => {
    let valueName = vorname.value;
    let valueLastName = nachname.value;
    let valueLand = land.value;

    if (valueLand && valueLastName && valueName) {
        console.log(valueName, valueLastName, valueLand);
    }
};

// 3 add event to the button

submit?.addEventListener("click", (e: Event) => {
    e.preventDefault();
    inputValues();
    vorname.value = "";
    nachname.value = "";
});
