import Animal from "./classes/Animal";
import Continent from "./enums/Continents";
import EnclosureId from "./enums/Enclosure";
import { createAnimal } from "./func/createAnimal";
import "./style.css";

const selectAnimal = document.getElementById("select-animal") as HTMLSelectElement;
const nameOfAnimalInput = document.getElementById("nameInput") as HTMLInputElement;
const birthYearInput = document.getElementById("birthYearInput") as HTMLInputElement;
const selectContinent = document.getElementById("select-continent") as HTMLSelectElement;
const selectSpecialNeeds = document.getElementById("select-specialNeeds") as HTMLSelectElement;
const selectHabitat = document.getElementById("select-enclosure") as HTMLSelectElement;
const savannahEnclosure = document.getElementById("savannah") as HTMLElement;
const jungleEnclosure = document.getElementById("jungle") as HTMLElement;
const reptileEnclosure = document.getElementById("reptileHouse") as HTMLElement;
const aquariumEnclosure = document.getElementById("aquarium") as HTMLElement;
const createAnimalButton = document.getElementById("button") as HTMLInputElement;


const allZooAnimals: Animal[] = [];
const savannahAnimals: Animal[] = [];
const jungleAnimals: Animal[] = [];
const reptileHouseAnimals: Animal[] = [];
const aquariumAnimals: Animal[] = [];

createAnimalButton.addEventListener("click", (event: Event) => {
    event.preventDefault();

    const type = selectAnimal.value;
    const name = nameOfAnimalInput.value;
    const yearOfBirth = Number(birthYearInput.value);
    const continent = selectContinent.value;
    const specialNeeds = selectSpecialNeeds.value;
    const habitat = selectHabitat.value;

    const create = createAnimal(
        type,
        name,
        yearOfBirth,
        Number(continent),
        specialNeeds,
        Number(habitat)
    );

    console.log(create);

    if (create) {
        if (!type || !name || !yearOfBirth || !continent || !specialNeeds || !habitat) {
            console.error("All fields requered!");
        } else {
            allZooAnimals.push(create);
            console.log(allZooAnimals);
        }

        function chooseHabitat() {
            if (type && name && yearOfBirth && continent && specialNeeds && habitat) {
                if (create?._enclosureID === EnclosureId.SavannahHabitat) {
                    savannahAnimals.push(create);
                    console.log(savannahAnimals);
                }
                if (create?._enclosureID === EnclosureId.JungleHabitat) {
                    jungleAnimals.push(create);
                    console.log(jungleAnimals);
                }
                if (create?._enclosureID === EnclosureId.ReptileHouse) {
                    reptileHouseAnimals.push(create);
                    console.log(reptileHouseAnimals);
                }
                if (create?._enclosureID === EnclosureId.AquaticHabitat) {
                    aquariumAnimals.push(create);
                    console.log(aquariumAnimals);
                }
            }
        }
        chooseHabitat();
        displayAnimals();
    }
});

function displayAnimals(): void {
    if (savannahAnimals && savannahEnclosure) {
        savannahAnimals.forEach((animal: Animal, index) => {
            const emojiDiv = document.createElement("div") as HTMLDivElement;
            emojiDiv.className = "Emoji tooltip";
            const emoji = document.createElement("div") as HTMLDivElement;
            emoji.textContent = animal._emoji;
            const currentYear = new Date().getFullYear();
            const age = currentYear - animal._yeahOfBirth;

            //! tooltip

            const tooltip = document.createElement("div") as HTMLDivElement;
            tooltip.className = "savannahtooltip tooltiptext";
            tooltip.innerHTML = `
            Name: ${animal._name}
            Age: ${age}
            Origin: ${continentFn(animal._continents)}
            SpecialNeeds: ${animal._specialNeeds}
            `;

            emojiDiv.appendChild(emoji);
            emojiDiv.appendChild(tooltip);

            emojiDiv?.addEventListener("dblclick", () => {
                savannahAnimals.splice(index, 1);
                displayAnimals();
            });

            savannahEnclosure.appendChild(emojiDiv);
        });
    }

    if (jungleAnimals && jungleEnclosure) {
        jungleAnimals.forEach((animal: Animal, index) => {
            const emojiDiv = document.createElement("div") as HTMLDivElement;
            emojiDiv.className = "Emoji tooltip";
            const emoji = document.createElement("div") as HTMLDivElement;
            emoji.textContent = animal._emoji;
            const currentYear = new Date().getFullYear();
            const age = currentYear - animal._yeahOfBirth;

            //! tooltip

            const tooltip = document.createElement("div") as HTMLDivElement;
            tooltip.className = "savannahtooltip tooltiptext";
            tooltip.innerHTML = `
            Name: ${animal._name}
            Age: ${age}
            Origin: ${continentFn(animal._continents)}
            SpecialNeeds: ${animal._specialNeeds}
            `;

            emojiDiv.appendChild(emoji);
            emojiDiv.appendChild(tooltip);

            jungleEnclosure.appendChild(emojiDiv);
        });
    }
}

function continentFn(continentEnum: number): string {
    switch (continentEnum) {
        case 0:
            return "Africa";
        case 1:
            return "Antarctica";
        case 2:
            return "Asia";
        case 3:
            return "Europe";
        case 4:
            return "NorthAmerica";
        case 5:
            return "Oceania";
        case 6:
            return "SouthAmerica";
        default:
            return "No case";
    }
}
