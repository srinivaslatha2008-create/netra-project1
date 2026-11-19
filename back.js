function updateClock()
{
    const clock = docement.getElementById("clock");
    if (clock) 
        clock.textContent = new Date().toLocaleTimeString();
}

updateClock();

setInterval(updateClock, 1000);