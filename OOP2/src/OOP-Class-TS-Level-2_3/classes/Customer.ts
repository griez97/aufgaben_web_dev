class Customer {
    private _name: string;
    private _email: string;
    private _address: string;
    private _postalCode: number;
    private _city: string;

    constructor(name: string, email: string, address: string, postalCode: number, city: string) {
        this._name = name;
        this._email = email;
        this._address = address;
        this._postalCode = postalCode;
        this._city = city;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length > 60) {
            console.error("Name cannot be longer than 60 letters");
        } else {
            this._name = value;
        }
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (value.includes("@")) {
            this._email = value;
        } else {
            console.error("Email must include an @");
        }
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get postalCode(): number {
        return this._postalCode;
    }

    set postalCode(value: number) {
        const stringValue = value.toString();
        if (value >= 0 && value <= 99999 && stringValue.length === 5) {
            //&& String(value.length)
            this._postalCode = value;
        } else {
            console.error("Postal Code must be 5 digits and between 00000 and 99999");
        }
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }
}
