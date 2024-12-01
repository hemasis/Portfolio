$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


    // DARK MODE SETUP AND SETTINGS starts from here

    // Select the toggle button
const toggleButton = document.getElementById('darkModeToggle');

// Check and apply saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️'; // Set icon to Sun for light mode toggle
} else {
    toggleButton.textContent = '🌙'; // Set icon to Moon for dark mode toggle
}

// Add event listener to toggle button
toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');

    // Update button icon based on mode
    if (isDarkMode) {
        toggleButton.textContent = '☀️'; // Sun for light mode toggle
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        toggleButton.textContent = '🌙'; // Moon for dark mode toggle
        localStorage.setItem('theme', 'light'); // Save preference
    }
});
//DARK MODE SETTINGS ENDS HERE

// GOOGLE SHEET SCRIPT
const scriptURL = 'https://script.google.com/macros/s/AKfycbxAGfJzKkxQWEPIl3sxehrZd1U8sebrxpOcckUtN2m2N8vHyMmZmvZn31lN0ye1HWHXCg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

});