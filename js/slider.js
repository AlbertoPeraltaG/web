document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    const slideInterval = 5000; // Change slide every 5 seconds
    let slideTimer;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides and remove active class from dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show the selected slide and update dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Function to go to the next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Start the automatic slideshow
    function startSlideshow() {
        slideTimer = setInterval(nextSlide, slideInterval);
    }

    // Pause the slideshow when hovering over the slider
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideTimer);
    });

    // Resume the slideshow when mouse leaves the slider
    sliderContainer.addEventListener('mouseleave', startSlideshow);

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideTimer);
            showSlide(index);
            // Restart the timer after manual navigation
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });

    // Start the slideshow
    startSlideshow();
});
