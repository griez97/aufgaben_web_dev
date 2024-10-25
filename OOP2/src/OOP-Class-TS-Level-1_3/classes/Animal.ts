class Animal {
    private _species: string;
    private _age: number;
    private _color: string;

    get species() {
        return this._species;
    }

    get age(): number {
        return this._age;
    }

    get color(): string {
        return this._color;
    }

    set species(value: string) {
        this.species = value;
    }

    set age(value: number) {
        this._age = value;
    }

    set color(value: string) {
        this.color = value;
    }

    constructor(species: string, age: number, color: string) {
        this._species = species;
        this._age = age;
        this._color = color;
    }
}

export default Animal;
