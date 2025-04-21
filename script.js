document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");

    // Random movement logic for the dots
    setInterval(() => {
        dots.forEach(dot => {
            const randomTop = Math.random() * 80 + 10; // Random position between 10% and 90%
            const randomLeft = Math.random() * 80 + 10; // Random position between 10% and 90%
            dot.style.top = `${randomTop}%`;
            dot.style.left = `${randomLeft}%`;
        });
    }, 2000); // Move dots every 2 seconds
});