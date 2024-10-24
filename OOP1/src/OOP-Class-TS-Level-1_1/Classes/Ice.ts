class IceCreamFlavor {
    _iceName: string = "";
    _price: number = 0;
    _isPopular: boolean = false;
    _description?: string = undefined;

    constructor(iceName: string, price: number, isPopular: boolean, description?: string) {
        this._iceName = iceName;
        this._price = price;
        this._isPopular = isPopular;
        this._description = description;
    }
}

export default IceCreamFlavor;
