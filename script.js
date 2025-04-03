const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Loading Screen
// const texts = ["Tomorrows", "Technology"];
// let index = 0;
// let progress = 0;
// const loadingText = document.getElementById("loading-text");
// const loadingScreen = document.getElementById("loading-screen");
// const content = document.getElementById("content");
// const progressText = document.getElementById("progress-text");

// function changeText() {
//     if (index < texts.length) {
//         loadingText.style.opacity = "0";
//         setTimeout(() => {
//             loadingText.textContent = texts[index];
//             loadingText.style.opacity = "1";
//             index++;
//             setTimeout(changeText, 1000);
//         }, 500);
//     } else {
//         setTimeout(() => {
//             loadingScreen.classList.add("fade-out");
//             setTimeout(() => {
//                 loadingScreen.style.display = "none";
//                 content.style.display = "block";
//             }, 1000);
//         }, 500);
//     }
// }
// function updateProgress() {
//     if (progress < 100) {
//         progress += 1;
//         progressText.textContent = progress + "%";
//         setTimeout(updateProgress, 37);
//     }
// }
// setTimeout(() => {
//     document.getElementById('loading-screen').classList.add('loading-hide');
// }, 4000);

// setTimeout(changeText, 1000);
// updateProgress();
// Loading Screen Ends

// Animated Para
document.addEventListener("DOMContentLoaded", function () {
    const lines = [
        document.querySelector('.line1'),
        document.querySelector('.line2'),
        document.querySelector('.line3'),
        document.querySelector('.line4'),
        document.querySelector('.line5')
    ];
    function revealOnScroll() {
        let windowHeight = window.innerHeight;

        lines.forEach((line, index) => {
            if (!line) return;

            let lineTop = line.getBoundingClientRect().top;
            let triggerPoint = windowHeight * 0.75;

            if (lineTop < triggerPoint) {
                setTimeout(() => {
                    line.style.opacity = "1";
                    line.style.transition = "opacity 0.5s ease-in-out";
                }, index * 300);
            } else {
                setTimeout(() => {
                    line.style.opacity = "0.35";
                    line.style.transition = "opacity 0.5s ease-in-out";
                }, index * 300);
            }
        });
    }
    lines.forEach(line => {
        if (line) line.style.opacity = "0.35";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

// Animated Para end

// Smooth Scroll