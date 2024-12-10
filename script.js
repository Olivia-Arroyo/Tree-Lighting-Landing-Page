const eventDate = moment('2025-12-06T18:00:00');
const countdownElement = document.getElementById('countdown');

function updateCountdown(){
    //Get the current time
    const now = moment();
    const duration = moment.duration(eventDate.diff(now));

    //Calculate the remaining time
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    //Display the countdown
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    //Update every second
    setTimeout(updateCountdown, 1000);
}

//Start the countdown
updateCountdown();