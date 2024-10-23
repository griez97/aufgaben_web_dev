const input = document.querySelector("#input") as HTMLInputElement;
const btnCapitalLetter = document.querySelector("#btnCapitalLetter") as HTMLButtonElement;
const btnSpaces = document.querySelector("#btnSpaces") as HTMLButtonElement;
const btnVocals = document.querySelector("#btnVocals") as HTMLButtonElement;
const resultContainer = document.querySelector("#result") as HTMLDivElement;

const bigLettersCount = (str: string) => {
    let result = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (
            (str[i] >= "A" && str[i] <= "Z") ||
            str[i] === "Ä" ||
            str[i] === "Ü" ||
            str[i] === "Ö"
        ) {
            result++;
        }
    }
    return result;
};

const spaceCount = (str: string) => {
    let result = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === " ") {
            result++;
        }
    }
    return result;
};

const countVowels = (str: string) => {
    let result = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    const inputStr = str.toLowerCase();

    for (let i = 0; i < inputStr.length; i++) {
        if (vowels.includes(inputStr[i])) {
            result++;
        }
    }
    return result;
};

const createElement = (str: string) => {
    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = str;
    resultContainer.innerHTML = "";
    resultContainer.appendChild(resultParagraph);
};

btnCapitalLetter.addEventListener("click", () => {
    const inputValue = input.value;
    const count = bigLettersCount(inputValue);
    createElement(`Number of capital letters: ${count}`);
});

btnSpaces.addEventListener("click", () => {
    const inputValue = input.value;
    const count = spaceCount(inputValue);
    createElement(`Number of spaces: ${count}`);
});

btnVocals.addEventListener("click", () => {
    const inputValue = input.value;
    const count = countVowels(inputValue);
    createElement(`Number of spaces: ${count}`);
});
