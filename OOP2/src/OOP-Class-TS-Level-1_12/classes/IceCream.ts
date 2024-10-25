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

    getTotalPrice(numberOfScoops: number) {
        console.log(numberOfScoops * this._price);
    }

    printInfo() {
        if (this._isPopular) {
            console.log(`Flavor ${this._iceName} popular and costs ${this._price} Euro`);
        } else {
            console.log(`Flavor ${this._iceName} is not so popular and costs ${this._price} Euro`);
        }
    }

    getLengthOfDescription() {
        if (this._description) {
            console.log(`Length is: `, this._description.length);
        } else {
            console.log(`Length is: `, 0);
        }
    }
}

export default IceCreamFlavor;
