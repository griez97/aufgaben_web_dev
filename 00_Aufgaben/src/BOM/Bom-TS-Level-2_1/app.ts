const countdownOutput = document.getElementById("count");
const element = document.getElementById("message") as HTMLDivElement;

if (countdownOutput) {
    let counter = 10;

    const interval = setInterval(() => {
        counter--;
        countdownOutput.innerText = counter.toString();

        if (counter === 0) {
            countdownOutput.innerText = "";
            clearInterval(interval);
            element.style.display = "none";
        }
    }, 1000);
}
