
// This is the main JavaScript file. Add your scripts here.

// Example of a JavaScript function
function displayWelcomeMessage() {
    alert('Welcome to Buildia! Your platform for turning ideas into reality.');
}

// Add an event listener to the 'Welcome' button
document.addEventListener('DOMContentLoaded', function() {
    var welcomeButton = document.getElementById('welcome-button');
    if (welcomeButton) {
        welcomeButton.addEventListener('click', displayWelcomeMessage);
    }
});
