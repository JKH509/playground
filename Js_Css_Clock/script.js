const secondHand = document.querySelector('.sec-hand');

function setDate() {
    
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 ) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    minsDegrees = ((mins / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${minsDegrees}deg`;

    const hour = now.getMinutes();
    const hourDegrees = ((mins / 12) * 360) +90;
    hourHand.style.transform = `rotate(${minsDegrees}deg`;
//     console.log(seconds);
}
setInterval(setDate, 1000);