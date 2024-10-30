/* 
🦁 Lion (Mammal)
🐻 Bear (Mammal)
🐒 Monkey (Mammal)
🐻 Panda (Mammal)
🦅 Eagle (Bird)
🐦 Toucan (Bird)
🐊 Alligator (Reptile)
🐢 Turtle (Reptile)
🐡 Pufferfish (Fish)
*/

import Continent from "../enums/Continents";
import EnclosureId from "../enums/Enclosure";

class Animal {
    _emoji: string;
    _type: string;
    _name: string;
    _yeahOfBirth: number;
    _continents: Continent;
    _specialNeeds: string;
    _enclosureID: EnclosureId;

    constructor(
        emoji: string,
        type: string,
        name: string,
        yeahOfBirth: number,
        continents: Continent,
        specialNeeds: string,
        enclosureID: EnclosureId
    ) {
        this._emoji = emoji;
        this._type = type;
        this._name = name;
        this._yeahOfBirth = yeahOfBirth;
        this._continents = continents;
        this._specialNeeds = specialNeeds;
        this._enclosureID = enclosureID;
    }

    get age(): number {
        return new Date().getFullYear() - this._yeahOfBirth;
    }
}

export default Animal;
