// Imports
// Add flatpickr
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// Add all Notiflix
import Notiflix from 'notiflix';

// Recieve all elements for work
const elInputField = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");

const elTimer = document.querySelector(".timer");
const allElField = document.querySelectorAll(".field");
const allElValue = document.querySelectorAll(".value");
const allElLabel = document.querySelectorAll(".label");

// Elements
const elValueDays = document.querySelector("[data-days]");
const elValueHours = document.querySelector("[data-hours]");
const elValueMinutes = document.querySelector("[data-minutes]");
const elValueSeconds = document.querySelector("[data-seconds]");

// Varibles for work
var selectedDatesGlobal = 0;
var currentDateGlobal = 0;

// 1. Add interface viev

elInputField.style.height = "50px";
elInputField.style.width = "240px";
elInputField.style.fontSize = "22px";

startBtn.style.height = "50px";
startBtn.style.width = "80px";
startBtn.style.fontSize = "18px";

elTimer.style.display = "flex";
elTimer.style.gap = "15px"

allElField.forEach(el => {
	el.style.display = "flex";
	el.style.flexDirection = "column";
	el.style.alignItems = "center";
});

allElValue.forEach(element => {
	element.style.fontSize = "52px";
})

allElLabel.forEach(element => {
	element.style.fontSize = "24px";
	element.style.textTransform = "uppercase";
})

startBtn.setAttribute("disabled", "");

// 2. Use library flatpickr

// Flatpickr settings
const optionsForFlat = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
	minuteIncrement: 1,
  // 5. Readout time
  onClose(selectedDates) {
	  const currentDate = new Date();
		// 4. Choose date
	  if (currentDate.getTime() >= selectedDates[0].getTime()) {
		  startBtn.setAttribute("disabled", "");
		  // 8. Alert library
		  return Notiflix.Notify.failure("Please choose a date in the future");
		//   return alert("Please choose a date in the future");
	  };
	  // 8. Alert library
	  Notiflix.Notify.success("Great date");
	  startBtn.removeAttribute("disabled");
	  selectedDatesGlobal = selectedDates[0].getTime();
  },
};

// 3. Use Flatpickr
flatpickr(elInputField, optionsForFlat);

// Add click to btn
startBtn.addEventListener("click", () => {
	// Set cuurrent date at click moment
	const currentDate = new Date();
	currentDateGlobal = currentDate.getTime();
	// disable btn
	startBtn.setAttribute("disabled", " ");
	elInputField.setAttribute("disabled", " ");
	// Set up interval
	const intervalForValueDate = setInterval(() => {
		// Remove interval
		if (currentDateGlobal >= selectedDatesGlobal) {
			elInputField.removeAttribute("disabled");
			return clearInterval(intervalForValueDate);
		}

		const differenceOfDate = selectedDatesGlobal - currentDateGlobal;
		// Make rigth time to date
		let dateAfterMs = convertMs(differenceOfDate); 

		// Change date in GTML
		elValueDays.textContent = addLeadingZero(dateAfterMs.days);	
		elValueHours.textContent = addLeadingZero(dateAfterMs.hours);	
		elValueMinutes.textContent = addLeadingZero(dateAfterMs.minutes);	
		elValueSeconds.textContent = addLeadingZero(dateAfterMs.seconds);

		selectedDatesGlobal -= 1000;
		
	}, 1000);
})

// 7. Format time
function addLeadingZero(value) {
	return value.toString().padStart(2, "0");
}

// 6. Convert MS
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

