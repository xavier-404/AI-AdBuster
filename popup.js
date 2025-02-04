// popup.js - Mode Handling
document.getElementById("vampire").addEventListener("click", () => {
    chrome.scripting.executeScript({
        target: { allFrames: true },
        function: vampireMode
    });
});

document.getElementById("exorcism").addEventListener("click", () => {
    chrome.scripting.executeScript({
        target: { allFrames: true },
        function: exorcismMode
    });
});

function vampireMode() {
    document.querySelectorAll("iframe, div[class*=\"ad\"], img[src*=\"ads\"]").forEach((ad) => {
        ad.style.filter = "grayscale(100%)";
    });
}

function exorcismMode() {
    document.querySelectorAll("iframe, div[class*=\"ad\"], img[src*=\"ads\"]").forEach((ad) => {
        ad.remove();
    });
}
