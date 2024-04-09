

function toggleTopDropDown() {
    var topDropDown = document.querySelector(".top-drop-down");
    topDropDown.classList.toggle("d-none")
}

// number count up
let valueDisplays = document.querySelectorAll(".num");
let interval = 3500;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval/endValue);
  let counter = setInterval(() => {
    startValue++;
    valueDisplay.textContent = startValue;
    if (startValue === endValue ) {
      clearInterval(counter)
    }
  }, duration);
});