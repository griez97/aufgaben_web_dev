import IceCreamFlavor from "./Classes/Ice";

const ice1 = new IceCreamFlavor("Vanilla", 2.5, false, "Mid taste, very beta");
const ice2 = new IceCreamFlavor("Chocolate", 2.75, true);
const ice3 = new IceCreamFlavor("Strawberry", 2.6, true);
const ice4 = new IceCreamFlavor(
    "Mint Chocolate Chip",
    3.0,
    false,
    "Refreshing mint with chocolate chips"
);

const iceCreamFlavors: IceCreamFlavor[] = [ice1, ice2, ice3, ice4];

iceCreamFlavors.forEach((flavor) => {
    if (flavor._isPopular === true) {
        console.log(flavor._iceName);
    }
});
