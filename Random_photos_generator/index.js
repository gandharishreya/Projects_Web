const img1=document.querySelector(".img-container");
const btn1=document.querySelector(".btn");

btn1.addEventListener('click', ()=>{
    imgnum=10
    addimages()

});

function addimages() {
    for (let index = 0; index < imgnum; index++) {
        
    const newimg=document.createElement("img");
    newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    img1.appendChild(newimg);

    }
}