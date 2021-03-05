const secondHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // The code below prevents the hand from spinning back and forth when it gets to 0secs
    const hands = document.querySelectorAll('.hand');
        if (seconds === 0) {
            hands.forEach(hand => hand.style.transitionDuration = '0s');
        } else {
        hands.forEach(hand => hand.style.transitionDuration = '0.05s');
    }
}

setInterval(setDate, 1000)

