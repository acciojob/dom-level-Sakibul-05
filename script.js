//your JS code here. If required.
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Find the element with id "level"
  var levelElement = document.getElementById('level');

  // Count the number of parent elements
  var level = 0;
  var currentElement = levelElement;
  while (currentElement.parentElement) {
    level++;
    currentElement = currentElement.parentElement;
  }

  // Display the level using an alert
  alert('The level of the element is: ' + level);
});