// code for the alverno news Dropdown
function toggleTopDropDown() {
    var topDropDown = document.querySelector(".top-drop-down");
    topDropDown.classList.toggle("d-none")
}

// algorithm for the counting numbers on the landing page

// gets all elements in the alverno strong section with the num class
let valueDisplays = document.querySelectorAll(".num");
let interval = 3500;

valueDisplays.forEach((valueDisplay) => {
  // start value for the number count up
  let startValue = 0;
  // end value for each counter, the end value is the same as the value in the data-val
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  // sets the time duration for the number count up
  let duration = Math.floor(interval/endValue);
  let counter = setInterval(() => {
    startValue++;
    valueDisplay.textContent = startValue;
    // stops the counter when the startValue reaches the data-val attribute
    if (startValue === endValue ) {
      clearInterval(counter)
    }
  }, duration);
});