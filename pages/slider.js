$(document).ready(function () {
    const slidesContainer = $(".slides-container");
    const slideItems = $(".slide-item");
    const totalSlides = slideItems.length;
    const slideWidth = $(".slide-item").outerWidth();
    let currentIndex = 0;

    // Set initial position for three slides
    slidesContainer.css("width", `${totalSlides * slideWidth}px`);

    // Auto Play
    setInterval(function () {
        showNextSlide();
    }, 3000);

    // Next Button Click
    $(".next-arrow").on("click", function () {
        showNextSlide();
    });

    // Previous Button Click
    $(".prev-arrow").on("click", function () {
        showPrevSlide();
    });

    function showNextSlide() {
        if (currentIndex < totalSlides - 3) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    }

    function showPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 3;
        }
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const translateValue = -currentIndex * slideWidth;
        slidesContainer.css("transform", `translateX(${translateValue}px)`);
    }
});
