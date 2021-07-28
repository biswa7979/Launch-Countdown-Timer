const eveDate="1 Jan 2022";
const dayEl=document.getElementById('day');
const hourEl=document.getElementById('hour');

const minEl=document.getElementById('min');

const secEl=document.getElementById('sec');

function countdown(){
    const newyearDate=new Date(eveDate);
    const currentDate=new Date();
    const totalSec=(newyearDate-currentDate)/1000;

const days=Math.floor(totalSec/3600/24);
const hours=Math.floor(totalSec/3600)%24;
const mins=Math.floor(totalSec/60)%60;
const secs=Math.floor(totalSec)%60;

dayEl.innerHTML=days;
hourEl.innerHTML=hours;
minEl.innerHTML=mins;
secEl.innerHTML=secs;
    
}
countdown();
setInterval(countdown,1000)