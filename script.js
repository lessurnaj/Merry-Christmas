let btnNo = document.getElementById('btn-no');
let btnYes = document.getElementById('btn-yes');
let gifImage = document.querySelector('.banner .wrapper img');  // Get the image element
let audioPlayer = document.getElementById('audio-player');  // Get the audio element

// Create a new audio element for the "No" button sound
let noSound = new Audio('music/pou-no-sound-effect.mp3');

// Function to generate random positions for the "No" button
function getRandomPosition() {
    const banner = document.querySelector('.banner');
    const maxX = banner.clientWidth - btnNo.offsetWidth; // Maximum X position within the banner
    const maxY = banner.clientHeight - btnNo.offsetHeight; // Maximum Y position within the banner
    
    const randomX = Math.floor(Math.random() * maxX); 
    const randomY = Math.floor(Math.random() * maxY);
    
    return { x: randomX, y: randomY };
}

// Event listener for the 'No' button click
btnNo.addEventListener('click', function() {
    const { x, y } = getRandomPosition();
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    
    // Play the "No" sound when the "No" button is clicked
    noSound.play();
});

// Event listener for the 'Yes' button click
btnYes.addEventListener('click', function() {
    // Change the GIF to the new one when 'Yes' is clicked
    gifImage.src = "images/mocha-mucha.gif";  // Update the GIF source
    
    // Play the audio (video as audio) when 'Yes' is clicked
    audioPlayer.play();
    
    // Disable the 'No' button after 'Yes' is clicked
    btnNo.disabled = true;  // Disable the "No" button
    btnNo.style.cursor = 'not-allowed';  // Optionally, change cursor to indicate it is disabled
});
