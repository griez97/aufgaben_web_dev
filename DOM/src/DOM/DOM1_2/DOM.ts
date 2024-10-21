// Dom-Elements-TS-Level-1_2

// 1 - Find the elements

const example = document.getElementsByClassName("example") as HTMLCollectionOf<HTMLElement>;
const button = document.getElementById("button");

// 2 - write a function to change style as in css

const changeStyle = () => {
    for (let i = 0; i < example.length; i++) {
        example[i].style.color = "limegreen";
        example[i].style.backgroundColor = "yellow";
    }
};

// 3 - add event to the button

button?.addEventListener("click", changeStyle);
