const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.querySelector('.buttons');
const messageContainer = document.getElementById('message');
const questionTitle = document.querySelector('h1');

// Function to move the "No" button
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed'; // Use fixed so it positions relative to the viewport
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Event listeners for "No" button (Desktop & Mobile)
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent click if they somehow manage it
    moveNoButton();
});
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent touch if they somehow manage it
    moveNoButton();
});


const nextBtn = document.getElementById('next-btn');
const finalSurprise = document.getElementById('final-surprise');

// Event listener for "Yes" button
yesBtn.addEventListener('click', () => {
    // Hide buttons and question
    questionContainer.style.display = 'none';
    questionTitle.style.display = 'none';

    // Show message
    messageContainer.classList.remove('hidden');

    // Confetti celebration
    celebrate();
});

// Event listener for "Kmly Kmly" button
nextBtn.addEventListener('click', () => {
    messageContainer.classList.add('hidden'); // Hide the first message
    finalSurprise.classList.remove('hidden'); // Show the final surprise

    celebrate(); // More confetti!
});

function celebrate() {
    // Basic confetti explosion
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffc0cb', '#4ade80']
    });

    // Prolonged confetti rain
    const end = Date.now() + 2 * 1000;
    const colors = ['#ff4d6d', '#ffc0cb', '#4ade80'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
