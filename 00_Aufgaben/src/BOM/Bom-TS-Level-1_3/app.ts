const infoBtnBrowser = document.getElementById("infoBtnBrowser") as HTMLButtonElement;
const browserInfoOutput = document.getElementById("browserInfoOutput") as HTMLDivElement;

infoBtnBrowser.addEventListener("click", () => {
    browserInfoOutput.innerHTML = `
    <p>Browsername: ${navigator.appName}</p>
    <p>Betriebssystem-Architektur: ${navigator.platform}</p>
    <p>Browser-Version: ${navigator.appVersion}</p>
    <p>Window Auflösung: ${window.screen.width}x${window.screen.height}</p>
    <p>Innenhöhe des Dokuments: ${window.innerHeight}px</p>
    <p>Innenbreite des Dokuments: ${window.innerWidth}px</p>
    <p>Color Depth: ${screen.colorDepth}</p>
    <p>Pixel Depth: ${screen.pixelDepth}</p>
    `;
});
