import CarType from "./CarType";

class Car {
    _marke: string;
    private _baujahr: number;
    _speed: number;
    _carTypes: CarType;

    get bauJahr() {
        return this._baujahr;
    }

    constructor(marke: string, baujahr: number, speed: number, carType: CarType) {
        this._marke = marke;
        this._baujahr = baujahr;
        this._speed = speed;
        this._carTypes = carType;
    }

    getSpeedInfo(): string {
        if (this._speed <= 40) {
            return "Driving slowly";
        } else if (this._speed > 40 && this._speed <= 70) {
            return "Driving normally";
        } else if (this._speed > 70 && this._speed <= 120) {
            return "Driving fast";
        } else if (this._speed > 120 && this._speed <= 190) {
            return "Driving really fast";
        } else {
            return "WTF";
        }
    }

    getCarType(): CarType {
        //return `This car (${this._marke}) type is: ${this._carTypes}`;
        return this._carTypes;
    }
}

export default Car;
