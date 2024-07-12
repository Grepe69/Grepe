// scripts.js

// Function to create and animate juice drop
function createJuiceDrop(x, y) {
    const drop = document.createElement('div');
    drop.classList.add('squirt');
    drop.style.left = `${x}px`;
    drop.style.top = `${y}px`;
    document.body.appendChild(drop);

    drop.addEventListener('animationend', () => {
        drop.remove();
    });
}

// Function to play squish sound
function playSquishSound() {
    const audio = new Audio('squish.mp3');
    audio.play();
}

// Add click event listener to the body
document.body.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    createJuiceDrop(x, y);
    playSquishSound();
});
