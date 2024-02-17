document.addEventListener("DOMContentLoaded", function() {
    var lazyLoadSections = document.querySelectorAll(".lazy-load");

    function setBackgroundImage(section) {
        var bgImageURL = section.getAttribute("data-bg-image");
        section.style.backgroundImage = "url('" + bgImageURL + "')";
    }

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function lazyLoadBackgroundImage() {
        lazyLoadSections.forEach(function(section) {
            if (isInViewport(section)) {
                setBackgroundImage(section);
                // Remove the event listener once the image is loaded
                window.removeEventListener("scroll", lazyLoadBackgroundImage);
                window.removeEventListener("resize", lazyLoadBackgroundImage);
            }
        });
    }

    // Initial check
    lazyLoadBackgroundImage();

    // Add event listeners for scroll and resize events
    window.addEventListener("scroll", lazyLoadBackgroundImage);
    window.addEventListener("resize", lazyLoadBackgroundImage);
});
