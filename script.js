
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loading-screen').style.display = 'none';
});
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-70,
            y:dets.y - elem.getBoundingClientRect().y-170
        })
    })
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), // Required
    path: 'data.json', // Required
    renderer: 'svg/canvas/html', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  })

window.addEventListener('scroll', () => {
    const videos = document.querySelectorAll('.video-container');
    videos.forEach(video => {
        const position = window.scrollY * 0.1; // Adjust this value to control movement
        video.style.transform = `translateY(${position}px)`;
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.contact-form__error').forEach(el => el.textContent = '');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form
    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
        
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Form submitted successfully!');
        this.reset();
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
