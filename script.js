document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const numberElement = document.querySelector('.number');
    const movingText = document.querySelector('.moving-text');

    let interval;
    let isGenerating = false;

    startButton.addEventListener('click', function () {
        if (!isGenerating) {
            interval = setInterval(generateRandomNumber, 1000);
            isGenerating = true;
        }
    });

    stopButton.addEventListener('click', function () {
        clearInterval(interval);
        isGenerating = false;
    });

    function generateRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 30) + 1;
        numberElement.textContent = `Número: ${randomNumber}`;
    }
});





