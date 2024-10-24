let person = {
    vorname: "Anton",
    nachname: "Fish",
    alter: 34,
    familienstand: "ledig",
    groesse: 1.78,
    zeigeProfil: function () {
        return `Vorname: ${this.vorname} ${this.nachname}, 
        <br/>
        Alter: ${this.alter},
        <br/>
        Koerpergroesse: ${this.groesse},
        <br/>
        Familienstand: ${this.familienstand} `;
    },
};
let personNext = {
    vorname: "Willy",
    nachname: "Mecroon",
    alter: 45,
    familienstand: "ledig",
    groesse: 1.88,
    zeigeProfil: () => {
        return `Vorname: ${this.vorname} ${this.nachname}, 
        <br/>
        Alter: ${this.alter},
        <br/>
        Koerpergroesse: ${this.groesse},
        <br/>
        Familienstand: ${this.familienstand}`;
    },
};

document.getElementById("person")!.innerHTML = person.zeigeProfil();

document.getElementById("person")!.innerHTML += personNext.zeigeProfil();
