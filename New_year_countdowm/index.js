const day1=document.getElementById("day")
const hrs=document.getElementById("hour")
const min=document.getElementById("minute")
const sec=document.getElementById("second")

const date1=new Date("Jan 1, 2026 00:00:00").getTime()

updateYear()

function updateYear() {
    const now=new Date().getTime();
    
    const gap=date1-now

    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const d=Math.floor(gap/day);
    const h=Math.floor((gap % day)/hour);
    const m=Math.floor((gap % hour)/minute);
    const s=Math.floor((gap % minute)/second);

    day1.innerText=d;
    hrs.innerText=h;
    min.innerText=m;
    sec.innerText=s;

    setTimeout(updateYear,1000)

}
