const clock = document.getElementById("clock");


const updateClock = () => {
    const time = new Date();
    const localTime = time.toLocaleTimeString('en-US')
    clock.innerHTML = localTime;
}

updateClock();

setInterval(updateClock, 1000);