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
