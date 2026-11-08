/**
 * Interactive Yes / No Handler
 * Connects to hello.html and updates the status message based on user choice.
 */

const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const resultMessage = document.getElementById('resultMessage');

/**
 * Updates the UI status box with either a success or failed state.
 * @param {boolean} isSuccess - True when "Yes" is clicked, false when "No" is clicked.
 */
function handleUserChoice(isSuccess) {
  if (isSuccess) {
    resultMessage.textContent = 'Success! Your action was approved.';
    resultMessage.className = 'status-box success';
    console.log('Result: SUCCESS');
  } else {
    resultMessage.textContent = 'Failed! The operation was cancelled.';
    resultMessage.className = 'status-box failed';
    console.log('Result: FAILED');
  }
}

// Attach click event listeners
yesButton.addEventListener('click', () => handleUserChoice(true));
noButton.addEventListener('click', () => handleUserChoice(false));
