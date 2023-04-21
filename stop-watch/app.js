const timer = document.querySelector('.timer');
const startStop = document.querySelector('.start-stop');
const reset = document.querySelector('.reset');

let second = 0;
let minute = 0;
let hour = 0;

let leadingSecond;
let leadingMinute;
let leadingHour;

let timeToggle;
let timeStart = false;

function stopwatchTimer() {
    second++;
    if (second === 60) {
        minute++;
        second = 0;
    }
    if (minute === 60) {
        hour++;
        minute = 0

    }
    if (second < 10) {
        leadingSecond = `0${second}`
    }
    else {
        leadingSecond = second;
    }

    if (minute < 10) {
        leadingMinute = `0${minute}`
    }
    else {
        leadingMinute = minute;
    }

    if (hour < 10) {
        leadingHour = `0${hour}`
    }
    else {
        leadingHour = hour;
    }

    timer.innerHTML = leadingHour + ':' + leadingMinute + ':' + leadingSecond;
}

startStop.addEventListener('click', () => {
    if (timeStart == false) {
        timeToggle = setInterval(stopwatchTimer, 1000);
        startStop.innerHTML = `<span class="material-symbols-outlined">
        pause</span>`
        timeStart = true;


    }
    else {
        clearInterval(timeToggle);
        startStop.innerHTML = `<span class="material-symbols-outlined">
        play_arrow</span>`
        timeStart = false;
    }
});

reset.addEventListener('click', () => {
    clearInterval(timeToggle);
    second = 0;
    minute = 0;
    hour = 0;
    timer.innerHTML = "00:00:00"
    timeStart = false;
});