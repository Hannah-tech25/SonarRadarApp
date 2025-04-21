document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");

    // Random movement logic for the dots
    setInterval(() => {
        dots.forEach(dot => {
            const randomTop = Math.random() * 90 + 5; // Random position between 5% and 95%
            const randomLeft = Math.random() * 90 + 5; // Random position between 5% and 95%
            dot.style.top = `${randomTop}%`;
            dot.style.left = `${randomLeft}%`;
        });
    }, 1500); // Move dots every 1.5 seconds
});