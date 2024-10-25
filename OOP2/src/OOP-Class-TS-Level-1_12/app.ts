import IceCreamFlavor from "./classes/IceCream";

const ice1 = new IceCreamFlavor("Vanilla", 2.5, false, "Mid taste, very beta");
const ice2 = new IceCreamFlavor("Chocolate", 2.75, true);
const ice3 = new IceCreamFlavor("Strawberry", 2.6, true);

ice1.getTotalPrice(3); //7,5
ice1.printInfo();
ice1.getLengthOfDescription();

ice2.getTotalPrice(2); //5,5
ice2.printInfo();
ice2.getLengthOfDescription();

ice3.getTotalPrice(4); //10,4
ice3.printInfo();
ice3.getLengthOfDescription();
