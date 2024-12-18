let btnNo = document.getElementById('btn-no');
let btnYes = document.getElementById('btn-yes');
let gifImage = document.querySelector('.banner .wrapper img');  // Get the image element
let audioPlayer = document.getElementById('audio-player');  // Get the audio element
let heading = document.querySelector('.banner .wrapper h1');  // Get the <h1> element
let cryingImage = document.getElementById('crying-image');  // Crying image container
let noSound = new Audio('music/pou-no-sound-effect.mp3');  // Audio for 'No' button
let modal = document.getElementById('begging-modal');  // Modal element
let closeModal = document.getElementById('close-modal');  // Close button for the modal
let modalText = document.getElementById('modal-text');  // Text inside modal
let cryingSound = new Audio('music/crying-sound.mp3');  // Sound for crying

let noClickCount = 0;  // Counter for "No" button clicks

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

    // Show the begging modal
    modal.style.display = 'flex';

    // Increment the "No" click count
    noClickCount++;

    // Change the modal behavior based on the click count
    if (noClickCount > 1) {
        cryingSound.play();  // Play crying sound on multiple "No" clicks
        cryingImage.innerHTML = `<img src="images/crying-emoji.gif" alt="Crying Face"/>`;  // Display crying emoji
        modalText.textContent = "Please! Mamatay nako ani! Say YES!";  // More desperate message
    }

    if (noClickCount > 3) {
        cryingSound.play();  // More crying sound
        modalText.textContent = "PLEASE! niluhod nako oh sige nagud, say yes! I'm so sad! 😭😭😭";  // Extreme begging message
        cryingImage.innerHTML = `<img src="images/crying-emoji.gif" alt="Crying Face"/>`;
    }
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

    // Change the text of the <h1> element when "Yes" is clicked
    heading.textContent = "Yay! It's my Christmas gift!";  // Update the heading text

    // Stop the "No" button sound if it's playing
    if (!noSound.paused) {
        noSound.pause();  // Pause the "No" sound
        noSound.currentTime = 0;  // Reset the sound to the start
    }

    // Stop the crying sound if it's playing
    if (!cryingSound.paused) {
        cryingSound.pause();  // Pause the crying sound
        cryingSound.currentTime = 0;  // Reset the crying sound to the start
    }
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';  // Hide the modal
});
