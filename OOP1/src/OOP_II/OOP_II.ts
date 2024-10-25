import Dog from "./classes/Dog";
import Owner from "./classes/Owner";
import Person from "./classes/Person";

const Mary = new Owner("Mary", "Musterstr", "12 345");

const Farid = new Owner("Farid", "Musterstr", "12321", "Hamburg");

console.log(Mary);
console.log(Farid);

const dog01 = new Dog("woffy", 5, Mary);
console.log(dog01);

const person = new Person("Neco", "Aye", new Date());
console.log(person);
