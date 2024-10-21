import "./style.css";

// Get DOM elements
const inputText = document.getElementById("inputText") as HTMLInputElement;
const keyInput = document.getElementById("key") as HTMLInputElement;
const outputText = document.getElementById("outputText") as HTMLInputElement;
const encodeButton = document.getElementById("coded") as HTMLButtonElement;
const decodeButton = document.getElementById("decoded") as HTMLButtonElement;

let text: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const caesar = (input: string, key: number, encrypt: boolean): string => {
    return input
        .toLowerCase()
        .split("")
        .map((char) => {
            if (text.includes(char)) {
                const index = text.indexOf(char);
                let newIndex = encrypt ? index + key : index - key; //true: left side, false:right side of the code
                newIndex = ((newIndex % 26) + 26) % 26; // Ensure the index to wraps / +26 to avoide negative numbers and last % 26 to start from low numbers again
                return text[newIndex];
            }
            return char; // Return non-[text] characters unchanged
        })
        .join("");
};

// Event listener for encryption
encodeButton.addEventListener("click", () => {
    const input = inputText.value;
    const key = parseInt(keyInput.value, 10); // 10 for deci number
    outputText.value = caesar(input, key, true);
});

// Event listener for decryption
decodeButton.addEventListener("click", () => {
    const input = inputText.value;
    const key = parseInt(keyInput.value, 10); // 10 for deci number
    outputText.value = caesar(input, key, false);
});
