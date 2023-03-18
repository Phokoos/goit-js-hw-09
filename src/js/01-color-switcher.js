
// 1 Receive elements
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const allBtn = document.querySelectorAll("[type=button]");
const elBtnList = document.querySelector(".btn-list");
const elBody = document.querySelector("body");

// 2 Center elements
// Styles for div
elBody.style.height = "100vh";
elBtnList.style.height = "100%";
elBtnList.style.display = "flex";
elBtnList.style.justifyContent = "center";
elBtnList.style.alignItems = "center";
elBtnList.style.gap = "10px";
// Styles for btn
allBtn.forEach((element) => {
	element.style.width = "100px";
	element.style.height = "50px";
	element.style.fontSize = "30px";
})

// 3 Add listenr to btns
startBtn.addEventListener("click", startIntervalColorChanging);
stopBtn.addEventListener("click", stopIntervalColorChanging);


// 4 Fun for start
function startIntervalColorChanging() {
	// 5 disabled start-btn
	startBtn.setAttribute("disabled", "");
	// 8 Set up interval
	changeColorInterval = setInterval(() => {
		const backgroundColorVar = getRandomHexColor();
		elBody.style.backgroundColor = backgroundColorVar;
	}, 800);
}

// 6 Fun for stop
function stopIntervalColorChanging() {
	// 7 Enabled start-btn
	startBtn.removeAttribute("disabled");
	// 9 Clear interval
	clearInterval(changeColorInterval);
}

// Generate color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}