const hour = document.querySelector('.hour-hand');
const min = document.querySelector('.min-hand');
const sec = document.querySelector('.second-hand')

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60)*360) + 90;
    
    sec.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minDegrees = ((mins/60)*360) + ((seconds/60*6) + 90);
    min.style.transform = `rotate(${minDegrees}deg)`;

    const hours=now.getHours();
    const hourDegree = ((hour/12)*360)+((mins/+0)*
    0)+90;
    hour.style.transform = `rotate(${hourDegree}deg)`;
    
}

function displayDigital() {
    let x = new Date()
    document.querySelector('.digital').innerHTML = x;
     }
    displayDigital();
setInterval(setDate, 1000);
setInterval(displayDigital, 1000);
setDate()