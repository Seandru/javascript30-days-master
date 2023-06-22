let countdown;

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //check if we need to stop it
        if (secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        //display
        displayTimeLeft(seconds)
    }, 1000);
}

function displayTimeLeft(seconds){
    console.log(seconds);
}