const col=document.querySelector(".container")
for (let index = 0; index < 30; index++) {
    const color1 =document.createElement("div");
    color1.classList.add("color");
    col.appendChild(color1)

    
}

const colEls=document.querySelectorAll(".color")
console.log(colEls);



generateColor()
function generateColor() {
    colEls.forEach((colEl)=>{
        const newColor=randomColor();
        
        colEl.style.backgroundColor="#"+newColor;
        colEl.innerText="#"+newColor;

        colEl.addEventListener("click",()=>{
            document.body.style.backgroundColor="#"+newColor;
        })
    })
}

function randomColor() {
    const char="0123456789abcdef";
    const codelen=6
    let color=""
    for (let index = 0; index < codelen; index++) {
        const randomNum=Math.floor(Math.random()*char.length)
        color+=char.substring(randomNum,randomNum+1);
       
        
    }
    return color;
}