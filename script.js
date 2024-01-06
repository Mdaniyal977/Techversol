document.addEventListener("DOMContentLoaded", function () {
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");

    const calculateThreshold = (section) => {
        return section.offsetTop - window.innerHeight * 0.5; // Adjust the percentage as needed
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold1 = calculateThreshold(section2);
        const threshold2 = calculateThreshold(section3);

        if (scrollPosition < threshold1) {
            const transparency = 1 - (scrollPosition / threshold1);
            document.body.style.backgroundColor = "#52C1D0";
        } else if (scrollPosition >= threshold1 && scrollPosition < threshold2) {
            document.body.style.backgroundColor = "#ffffff"; // Change to white for second section
        } else {
            // Handle the case when the scroll position is at or beyond the last section
            document.body.style.backgroundColor = "#082C4C"; // Change to #082C4C for third section
        }
    };

    window.addEventListener("scroll", handleScroll);
});