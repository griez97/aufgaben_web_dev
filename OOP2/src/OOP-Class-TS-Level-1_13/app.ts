import Car from "./classes/Car";
import CarType from "./classes/CarType";
import Driver from "./classes/Drivers";

const mercedes = new Car("Mercedes Benz", 2003, 190, CarType.Sedan);
console.log(mercedes);

const porsche = new Car("Porsche", 2023, 294, CarType.Hatchback);
console.log(porsche);

const opel = new Car("Opel", 1983, 80, CarType.Coupe);
console.log(opel);

const michael = new Driver("Michael", "Schmidt", 32, opel, 1995);
const daniel = new Driver("Daniel", "Griez", 27, porsche, 2018);
const andrej = new Driver("Andrej", "Dortmann", 27, mercedes, 2020);

porsche.getSpeedInfo();

console.log(mercedes.getSpeedInfo());
console.log(porsche.getSpeedInfo());
console.log(opel.getSpeedInfo());

console.log(daniel.licenseFromYear); //period
console.log(andrej.licenseFromYear);
console.log(michael.licenseFromYear);

console.log(porsche.getCarType());
