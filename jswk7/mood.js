const moodDisplay = document.querySelector('#moodDisplay');

const moods = {

    happy: { bg: '#dd3e16', text: '#2c91e4', message: 'Warm smiles and the sun\'s kisses!' },

    calm: { bg: '#88cfe8', text: '#0a3c4f', message: 'Deep breaths and peaceful waves.' },

    excited: { bg: '#ffe066', text: '#b30000', message: 'Energy soaring through the sky!' },

    chill: { bg: '#b2f7ef', text: '#136f63', message: 'Relax and unwind — everything is cool.' },

    mysterious: { bg: '#2e294e', text: '#d0d6b5', message: 'Shadows whisper secrets...' }
};
document.addEventListener('click', handleMoodClick);


// Step 4: Define the function that handles mood button clicks
function handleMoodClick(MoodChoice) {
if (MoodChoice.target.classList.contains('mood-btn')) {
const mood = MoodChoice.target.getAttribute('data-mood');
const moodSettings = moods[mood];


// Step 5: Update page styles and text
document.body.style.backgroundColor = moodSettings.bg;
document.body.style.color = moodSettings.text;
moodDisplay.textContent = moodSettings.message;
}
}