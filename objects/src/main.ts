// import './style.css'

// =====================
//        Objekte-TS-Level-1_4
// =====================
console.log("%c Objekte-TS-Level-1_4 ", "background: tomato; color: gold;");

/* 
- Verwende den vorgegebenen Code.
 */
type Pet = {
  tiertyp: string;
  namen: string[];
};

let unsereHaustiere: Pet[] = [
  {
    tiertyp: 'Katze',
    namen: ['Gipsy', 'Nala', 'Dinky']
  },
  {
    tiertyp: 'Hunde',
    namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
  }
];

/* 
- Greife auf die Werte "Nala" und "Droopy" in diesem Array von Objekten zu und lasse sie dir auf der Konsole ausgeben. 
*/

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);

/* 
- Lasse dir einmal alle Hundenamen anzeigen.
 */

console.log(unsereHaustiere[0].namen);
console.log(unsereHaustiere[1].namen);

// * but can I display them with one log?

console.log(unsereHaustiere.map( pet => pet.namen)); //yes i can lol - as array with sub-arrays

console.log(unsereHaustiere.map( pet => pet.namen).flat()); // .flat() flattens this array of arrays into a single array containing all the names - cute - as one array

console.log(unsereHaustiere.map(pet => ({ [pet.tiertyp]: pet.namen }))); //online bonus - display with objects

/* 
- Ändere folgende Werte:
    - Droopy in Snoppy
    - Dinky in Pinky
*/
// unsereHaustiere[1].namen[2] = "Snoopy"
// unsereHaustiere[0].namen[2] = "Pinky"

// TODO: margin comment - wenn ich er kopieren will dann nur das array und nicht [{...}] so wie davor versucht => const copy = [...unsereHaustiere]

/* 
- Erstelle ein weiteres Objekt vom Typ Pet, z. B. Hamster
*/

const hamster: Pet = {
    tiertyp: 'Hamster',
    namen: ['Bobby', 'Hobby', 'Tobby']
}

/* 
- Füge das Objekt im Array hinzu
*/

unsereHaustiere.push(hamster);
console.log(unsereHaustiere);

// =====================
//        Objekte-TS-Level-1_5
// =====================
console.log("%c Objekte-TS-Level-1_5 ", "background: tomato; color: gold;");

/* 
- Verwende den vorgegebenen Code: den Typ Lager und ein Objekt vom Typ Lager
*/
type Lager = {
  schreibtisch: {
      schublade: string;
  };
  schrank: {
      "Obere Schublade": {
          Ordner1: string;
          Ordner2: string;
      };
      "Untere Schublade": string;
  };
};

let unserLager: Lager = {
  schreibtisch: {
      schublade: "Hefter"
  },
  schrank: {
      "Obere Schublade": {
          Ordner1: "Dokumente",
          Ordner2: "Geheimnisse"
      },
      "Untere Schublade": "Cola"
  }
};

/*
- Greife auf die Eigenschaften des Objekts zu und gib folgende Werte in der Konsole aus:
    - Geheimnisse
    - Cola
    - Hefter 
*/

console.log(unserLager.schrank['Obere Schublade'].Ordner2);
console.log(unserLager.schrank['Untere Schublade']);
console.log(unserLager.schreibtisch.schublade);

// =====================
//        Objekte-TS-Level-1_6
// =====================
console.log("%c Objekte-TS-Level-1_6 ", "background: tomato; color: gold;");

type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

let meineTopVier: Musik[] = [
  {
    kunstler: 'The Beatles',
    title: 'Abbey Road',
    release_jahr: 1969,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
  },
  {
    kunstler: 'Pink Floyd',
    title: 'Dark Side of the Moon',
    release_jahr: 1978,
    formate: ['CS', 'CD', 'LP', 'Download'],
    gold: true
  },
  {
    kunstler: 'Led Zeppelin',
    title: 'Led Zeppelin IV',
    release_jahr: 1971,
    formate: ['CS', 'LP', 'Download'],
    gold: true
  },
  {
    kunstler: 'Metallica',
    title: 'Kill ’Em All und Ride the Lightning',
    release_jahr: 1983,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
  }
];

/* 
- Greife auf folgende Werte dieses Objekts zu und lasse sie dir auf der Konsole ausgeben:
- "The Beatles"
- aus dem Objekt Pink Floyd: "Download"
- aus dem Objekt Pink Floyd: true
- die Releasejahre: 1971 und 1983
- Von Metallica: "MC"
- aus dem Objekt  Metallica das Wort: "Ride"
*/

console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(meineTopVier[1].gold);
console.log(meineTopVier[2].release_jahr, meineTopVier[3].release_jahr);
console.log(meineTopVier[3].formate[2]);
console.log(meineTopVier[3].title.split(' ')[4]); //ayoooo 


/* 
- Lege ein neues Objekt vom Typ Musik an und füge es zum Array hinzu.
*/

let charlie: Musik = 
{
  kunstler: 'Charli XCX',
  title: 'Brat and it`s completely different but also still brat',
  release_jahr: 2024,
  formate: ['LP', 'CD', 'Download'],
  gold: true
}

meineTopVier.push(charlie);
console.log(meineTopVier);

// =====================
//        Objekte-TS-Level-1_7
// =====================
console.log("%c Objekte-TS-Level-1_7 ", "background: tomato; color: gold;");

const topFour = document.getElementById('topFour') as HTMLElement;

const renderMusic = ((arr: any) => {

  topFour.innerHTML = "";

  arr.forEach((element: any) => {
    console.log(element);
    
/* 
- kunstler
- title
- formate
*/

    topFour.innerHTML +=`
    <div style="margin-bottom: 50px; border: solid 1px black;">
      <p>${element.kunstler}</p>
      <p>${element.title}</p>
      <p>${element.formate}</p>
    </div>
    `

  });
})

renderMusic(meineTopVier);

// =====================
//        Objekte-TS-Level-1_8
// =====================
console.log("%c Objekte-TS-Level-1_8 ", "background: tomato; color: gold;");

type Address = {
  street: string;
  city: string;
  postalCode: string;
};

type Student = {
  name: string;
  age: number;
  coop: boolean;
  address: Address;
  emails: string[];
};

let studentData: Student[] = [
  {
      name: "Alex",
      age: 23,
      coop: false,
      address: {
          street: "Don Valley Business Park",
          city: "Toronto",
          postalCode: "ONM3C3E5"
      },
      emails: ["alex69@gmail.com", "alex123@yahoo.com"]
  },
  {
      name: "Sandra",
      age: 22,
      coop: true,
      address: {
          street: "34 Lawrence Ave",
          city: "Toronto",
          postalCode: "ONM3C0E5"
      },
      emails: ["sandra@gmail.com", "sandra@yahoo.com"]
  }
];

/* 
- Lernziel: Zugriff auf Objekte mit Hilfe von forEach und/oder map.
- Greife mit Hilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
- Schreibe eine Function für das Objekt, die in der Konsole folgendes ausgibt:
    - name
    - coop
    - city
    - emails
*/

console.log("%c map ", "background: gold; color: tomato;");


console.log(studentData.map( student => student.name));
console.log(studentData.map( student => student.coop));
console.log(studentData.map( student => student.address.city));
console.log(studentData.map( student => student.emails));

studentData.map(student => console.log(student.address.street))

console.log("%c forEach ", "background: gold; color: tomato;");

console.log(studentData.forEach( arr => arr.name)); //why undefined

studentData.forEach((element) => console.log(element.name));
studentData.forEach((element) => console.log(element.coop));
studentData.forEach((element) => console.log(element.address.city));
studentData.forEach((element) => console.log(element.emails));