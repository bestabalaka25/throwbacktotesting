const screenElement = document.querySelector('.screen');

function randomFlicker() {
    const flickerAmount = Math.random() * 0.15 + 0.85; // Opacity between 0.85 and 1.0
    screenElement.style.setProperty('--crt-flicker-opacity', flickerAmount);

    const randomInterval = Math.random() * 150 + 50; // Flicker every 50-200ms
    setTimeout(randomFlicker, randomInterval);
}

// Start the flicker
randomFlicker();