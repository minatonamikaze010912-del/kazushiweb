// JavaScript for the Valentine Proposal

// Initially, step1 is active
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('step1').classList.add('active');
});

function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').classList.add('show');
}

function moveButton(button) {
    // Move the "No" button to a random position within the buttons container
    const container = button.parentElement;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}