const h=document.querySelector(".hour")
const m=document.querySelector(".minute")
const s=document.querySelector(".second")

function updateClock() {
    const curDate=new Date();

    const h1=curDate.getHours();
    const m1=curDate.getMinutes();
    const s1=curDate.getSeconds();
    const hdeg=(h1%12)*30 + (m1 / 60) * 30;
    h.style.transform=`rotate(${hdeg}deg)`;
    const mdeg=(m1/60)*360;
    m.style.transform=`rotate(${mdeg}deg)`;
    const sdeg=(s1/60)*360;
    s.style.transform=`rotate(${sdeg}deg)`;

}

setInterval(updateClock,1000);
updateClock()