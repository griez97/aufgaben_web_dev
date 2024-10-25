class Owner {
    _name: string;
    _address: string;
    _zipCode: string;
    _city?: string;

    constructor(name: string, address: string, zipCode: string, city?: string) {
        this._name = name;
        this._address = address;
        this._zipCode = zipCode;
        this._city = city;
    }
}

export default Owner;
