const img=document.querySelector(".container");
const prev=document.getElementById("prev")
const next=document.getElementById("next")
let x=0
let time;
prev.addEventListener(("click"),()=>{
    x=x+45
    clearTimeout(time);
    updateGallery();

})

next.addEventListener(("click"),()=>{
    x=x-45
    clearTimeout(time);
    updateGallery();

})

function updateGallery() {
    img.style.transform=`perspective(1000px) rotateY(${x}deg)`;
   time= setTimeout(()=>{
        x=x-45
        updateGallery()
    },3000)
}

updateGallery()
