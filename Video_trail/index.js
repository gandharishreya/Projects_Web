const t=document.querySelector(".trail");
const btn=document.querySelector(".btn")
const close=document.querySelector(".close-icon")
const v1=document.querySelector("video");

btn.addEventListener("click",()=>{
    t.classList.remove("active");
})

close.addEventListener("click",()=>{
    t.classList.add("active");
    v1.pause();
    v1.currentTime=0;
})