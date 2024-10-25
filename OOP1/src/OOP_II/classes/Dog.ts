import Owner from "./Owner";

class Dog {
    _name: string;
    _age: number;
    _owner: Owner;
    _breed: string | undefined = "";
    _favFood?: string;
    _numbersOfMeals: number = 0;

    constructor(name: string, age: number, owner: Owner) {
        this._name = name;
        this._age = age;
        this._owner = owner;
        console.log("Dog is created " + this._name);
    }

    // * Methoden
    sleep(): void {
        console.log(`${this._name} is sleeping...`);
    }
}

export default Dog;

// Getter und Setter within the class
