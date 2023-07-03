//your JS code here. If required.
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', ()=> {
  // Find the element with id "level"
  let levelElement = document.getElementById('level');

  // Count the number of parent elements
  let level = 0;
  let currentElement = levelElement;
  while (currentElement.parentElement) {
    level++;
    currentElement = currentElement.parentElement;
  }

  // Display the level using an alert
  alert('The level of the element is: ' + level);
});