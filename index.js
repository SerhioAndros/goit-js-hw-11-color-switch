const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    startBtn: document.body.querySelector('[data-action="start"]'),
    stopBtn: document.body.querySelector('[data-action="stop"]'),
}

let intervalId = null;

const randomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const defineBodyColor = (arr) => arr[randomIntegerFromInterval(0,arr.length-1)];

const changeColor = (e) => {

    if (e.target === refs.startBtn && !intervalId) {
        intervalId = setInterval(() => {
            document.body.setAttribute("style", `background-color: ${defineBodyColor(colors)}`);
        }, 1000);

    } else if (e.target === refs.stopBtn) {
        clearInterval(intervalId);
        intervalId = null;
    };
};

document.body.addEventListener("click", changeColor);