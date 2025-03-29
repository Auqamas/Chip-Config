const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Loading Screen
const texts = ["Tomorrows", "Technology"];
let index = 0;
let progress = 0;
const loadingText = document.getElementById("loading-text");
const loadingScreen = document.getElementById("loading-screen");
const content = document.getElementById("content");
const progressText = document.getElementById("progress-text");

function changeText() {
    if (index < texts.length) {
        loadingText.style.opacity = "0";
        setTimeout(() => {
            loadingText.textContent = texts[index];
            loadingText.style.opacity = "1";
            index++;
            setTimeout(changeText, 1000);
        }, 500);
    } else {
        setTimeout(() => {
            loadingScreen.classList.add("fade-out");
            setTimeout(() => {
                loadingScreen.style.display = "none";
                content.style.display = "block";
            }, 1000);
        }, 500);
    }
}
function updateProgress() {
    if (progress < 100) {
        progress += 1;
        progressText.textContent = progress + "%";
        setTimeout(updateProgress, 37);
    }
}
setTimeout(() => {
    document.getElementById('loading-screen').classList.add('loading-hide');
}, 4000);
setTimeout(changeText, 1000);
updateProgress();

// Loading Screen Ends

