function sayHello() {
    const headLine = document.createElement("h1");
    const greeting = document.createTextNode("Hello Everybody!");
    headLine.appendChild(greeting);
    document.body.appendChild(headLine);
}
sayHello();

function sumOf(a: number, b: number): number {
    return a + b;
}
console.log(sumOf(5, 6));

function multiply(a: number, b: number) {
    alert(a * b);
}
//multiply(2, 3);

type TPeople = {
    firstName: string;
    lastName: string;
    age: number;
    address: {
        city: string;
        street: string;
        houseNumber: number;
        zipCode: number;
    };
};

function helloEverybody(user: TPeople) {
    Object.keys(user).forEach((key) => {
        console.log(key);
    });
    Object.keys(user.address).forEach((key) => {
        console.log(key);
    });
}

const userFirst: TPeople = {
    firstName: "Daniel",
    lastName: "Griez",
    age: 27,
    address: {
        city: "Dusseldorf",
        street: "Tiny Street",
        houseNumber: 999,
        zipCode: 40477,
    },
};

helloEverybody(userFirst);

// * Konvertiere schließlich alle Funktionen in die neue Arrow-Functions Schreibweise

//todo sayHello
const sayHelloArrow = () => {
    const headLine = document.createElement("h2");
    const greetingText = document.createTextNode("Hello from Arrow Function :D");
    headLine.appendChild(greetingText);
    document.body.appendChild(headLine);
};
sayHelloArrow();

//todo sumOf
const sumOfArrow = (a: number, b: number) => a + b;
console.log(sumOfArrow(2, 8));

//todo multiply

const multiplyArrow = (a: number, b: number) => alert(a * b);
//multiplyArrow(6, 8);

//todo helloEverybody

const helloEverybodyArrow = (user: TPeople) => {
    Object.keys(user).forEach((key) => {
        console.log(key);
    });
    Object.keys(user.address).forEach((key) => {
        console.log(key);
    });
};

helloEverybodyArrow(userFirst);
