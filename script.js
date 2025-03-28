document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bgMusic");
    audio.volume = 0.3; // Set volume (0.0 to 1.0)

    // Ensure autoplay works, or wait for user interaction
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay blocked! Music will play on first user interaction.");
        });
    }

    // Play music when user clicks anywhere (if autoplay was blocked)
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });
});

function nextPage() {
    window.location.href = "yes.html"; // Redirects to the new page
}

function moveButton() {
    let button = document.getElementById("noButton");
    let container = document.querySelector(".container");

    // Ensure the button stays within the container
    let maxX = container.clientWidth - button.clientWidth;
    let maxY = container.clientHeight - button.clientHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
