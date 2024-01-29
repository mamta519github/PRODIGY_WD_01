let timer;
let isRunning = false;
let lapCounter = 1;

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startPause").innerText = "Resume";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startPause").innerText = "Pause";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startPause").innerText = "Start";
    isRunning = false;
    lapCounter = 1;
    document.getElementById("lapList").innerHTML = "";
}

function lap() {
    if (isRunning) {
        const lapTime = document.getElementById("display").innerText;
        const lapItem = document.createElement("li");
        lapItem.innerText = `Lap ${lapCounter++}: ${lapTime}`;
        document.getElementById("lapList").appendChild(lapItem);
    }
}

function updateTime() {
    const display = document.getElementById("display");
    const time = display.innerText.split(":");
    let seconds = parseInt(time[2]);
    let minutes = parseInt(time[1]);
    let hours = parseInt(time[0]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;

            if (hours === 24) {
                hours = 0;
            }
        }
    }

    display.innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}