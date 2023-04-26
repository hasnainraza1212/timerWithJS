// Get the HTML elements
const hoursInput = document.getElementById('hours-input');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');
const timerDisplay = document.getElementById('timer');

let totalSeconds = 0;
let interval;

// Function to start the timer
function startTimer() {
  // Calculate the total number of seconds
  totalSeconds = parseInt(hoursInput.value || 0) * 3600 + parseInt(minutesInput.value || 0) * 60 + parseInt(secondsInput.value || 0);

  // Update the timer display
  updateTimerDisplay();

  // Start the interval
  interval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(interval);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(interval);
  totalSeconds = 0;
  updateTimerDisplay();
  hoursInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
}

// Function to update the timer display
function updateTimerDisplay() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  const seconds = totalSeconds % 60;
  timerDisplay.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
