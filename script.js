document.addEventListener("DOMContentLoaded", function () {
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");

    const changeBackgroundColor = (color) => {
        document.body.style.backgroundColor = color;
    };

    const calculateThreshold = (section) => {
        const sectionHeight = section.offsetHeight;
        return sectionHeight * 1.5; // You can adjust the percentage as needed
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold1 = calculateThreshold(section1);
        const threshold2 = section1.offsetHeight + calculateThreshold(section2);

        if (scrollPosition < threshold1) {
            changeBackgroundColor("#52C1D0");
        } else if (scrollPosition >= threshold1 && scrollPosition < threshold2) {
            changeBackgroundColor("#ffffff");
        } else {
            // Handle the case when the scroll position is at or beyond the last section
            changeBackgroundColor("#082C4C");
        }
    };

    window.addEventListener("scroll", handleScroll);
});
