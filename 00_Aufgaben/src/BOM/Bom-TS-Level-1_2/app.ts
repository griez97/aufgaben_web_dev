const buttonStart = document.getElementById("buttonStart") as HTMLButtonElement;
const buttonStop = document.getElementById("buttonStop") as HTMLButtonElement;
const procent = document.getElementById("procent") as HTMLDivElement;

buttonStart.addEventListener("click", () => {
    let counter = 100;
    const originalCounter = counter;

    const interval = setInterval(() => {
        counter--;
        const counterStr = counter.toString();
        procent.innerHTML = `${counterStr} %`;

        if (counter === 0) {
            clearInterval(interval);
        }
    }, 150);

    buttonStop.addEventListener("click", () => {
        clearInterval(interval);
        counter = originalCounter;
        const counterStr = counter.toString();
        procent.innerHTML = `${counterStr} %`;
    });
});

// Template literals (Template strings)
