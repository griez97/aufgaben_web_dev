import {
    Lion,
    Elephant,
    Bear,
    Monkey,
    Dolphin,
    Snake,
    Turtle,
    Crocodile,
    Lizard,
    Parrot,
    Eagle,
    Macaw,
    Fish,
    Trout,
    Shark,
    Octopus,
    Squid,
    Frog,
    Alligator,
    Swan,
    Duck,
    Clownfish,
    Tiger,
    Rhinoceros,
    Cockatoo,
    Pufferfish,
    Panda,
    Camel,
    Toucan,
    Flamingo,
} from "../classes/Animal_classes";
import continents from "../enums/Continents";
import enclosureID from "../enums/Enclosure";

export function createAnimal(
    type: string,
    name: string,
    yearOfBirth: number,
    continents: continents,
    specialNeeds: string,
    enclosureID: enclosureID
) {
    switch (type) {
        case "Lion":
            return new Lion(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Elephant":
            return new Elephant(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Bear":
            return new Bear(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Monkey":
            return new Monkey(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Dolphin":
            return new Dolphin(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Snake":
            return new Snake(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Turtle":
            return new Turtle(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Crocodile":
            return new Crocodile(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Lizard":
            return new Lizard(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Parrot":
            return new Parrot(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Eagle":
            return new Eagle(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Macaw":
            return new Macaw(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Fish":
            return new Fish(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Trout":
            return new Trout(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Shark":
            return new Shark(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Octopus":
            return new Octopus(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Squid":
            return new Squid(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Frog":
            return new Frog(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Alligator":
            return new Alligator(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Swan":
            return new Swan(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Duck":
            return new Duck(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Clownfish":
            return new Clownfish(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Tiger":
            return new Tiger(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Rhinoceros":
            return new Rhinoceros(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Cockatoo":
            return new Cockatoo(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Pufferfish":
            return new Pufferfish(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Panda":
            return new Panda(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Camel":
            return new Camel(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Toucan":
            return new Toucan(name, yearOfBirth, continents, specialNeeds, enclosureID);
        case "Flamingo":
            return new Flamingo(name, yearOfBirth, continents, specialNeeds, enclosureID);
        default:
            break;
    }
}
