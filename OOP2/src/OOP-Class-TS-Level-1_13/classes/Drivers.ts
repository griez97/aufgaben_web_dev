import Car from "./Car";

class Driver {
    _firstName: string;
    _lastName: string;
    _age: number;
    _car: Car;
    private _licenseFromYear: number;

    get licenseFromYear() {
        return this._licenseFromYear;
    }

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        car: Car,
        licenseFromYear: number
    ) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._car = car;
        this._licenseFromYear = licenseFromYear;
    }
}

export default Driver;
