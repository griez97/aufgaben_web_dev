/* console.log("%c ==== BOM ====", "color: orange");
//console.log(window);

console.log("Width: ", window.screen.width);
console.log("Heigth: ", window.screen.height);

console.log("in px", window.screen.availWidth);
console.log("in px", window.screen.availHeight);

console.log("Farbtiefe ", window.screen.colorDepth);

console.log("pixeltiefe ", window.screen.pixelDepth);

console.log("Browserfenster", window.innerHeight);
console.log("Browserfenster", window.innerWidth);

window.addEventListener("resize", () => {
    console.log(`Fenstergrosse: ${window.innerWidth}`);
});

console.log("Gesamte URL:", window.location.href);
console.log("Port:", window.location.port);

console.log("Lange der History ", window.history.length);

document.getElementById("back-button")?.addEventListener("click", () => {
    window.history.back();
    //window.history.forward()
});

document.getElementById("reload")?.addEventListener("click", () => {
    window.location.reload;
});

if (window.navigator.cookieEnabled) {
    console.log("cookie");
} else {
    console.log("no cookie");
}

document.cookie = "username=fdssfdfsd";

console.log("%c ============ Storage ============", "color: orange");
 */

window.setTimeout(() => {
    console.log("2 sec are someting");
}, 2000);

/* function every2Seconds() {
    for (let i = 0; i < 10; i++) {
        window.setInterval(() => {
            console.log("im just saying hello");
        }, 2000);
    }
} */

let count = 0;

function every2Seconds() {
    const interval = setInterval(() => {
        console.log("im just saying hello");
        count++;
        if (count >= 10) {
            clearInterval(interval);
        }
    }, 2000);
}

every2Seconds();

const countdown = document.getElementById("countdown");

if (countdown) {
    countdown.style.fontSize = "4rem";
    count = 11;

    const interval = setInterval(() => {
        count--;
        countdown.innerText = count.toString();

        if (count === 0) {
            countdown.innerText = "🧃";
            clearInterval(interval);
        }
    }, 1000);
}
