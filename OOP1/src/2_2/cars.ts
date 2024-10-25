class Car {
    _marke: string;
    _baujahr: number;
    _speed: number;

    constructor(marke: string, baujahr: number, speed: number) {
        this._marke = marke;
        this._baujahr = baujahr;
        this._speed = speed;
    }
}

const mercedes = new Car("MErcedes Benz", 2003, 190);
console.log(mercedes);

const porsche = new Car("Porsche", 2023, 294);
console.log(porsche);

const opel = new Car("Opel", 1983, 80);
console.log(opel);

class Driver {
    _firstName: string;
    _lastName: string;
    _age: number;
    _car: Car;

    constructor(firstName: string, lastName: string, age: number, car: Car) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._car = car;
    }
}

const michael = new Driver("Michael", "Schmidt", 32, opel);
const daniel = new Driver("Daniel", "Griez", 27, porsche);
const andrej = new Driver("Andrej", "Dortmann", 27, mercedes);
