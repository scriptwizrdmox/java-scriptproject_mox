const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const result = document.getElementById('result');

yesButton.addEventListener('click', function() {
    result.innerText = "Yes you loved our website!";
});

noButton.addEventListener('mouseover', function() {
    // Move the No button to a random position
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    // Get random position within the container
    const randomX = Math.random() * (containerRect.width - noButton.offsetWidth);
    const randomY = Math.random() * (containerRect.height - noButton.offsetHeight - 100); // Leave space for the buttons

    // Set the new position
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    

});