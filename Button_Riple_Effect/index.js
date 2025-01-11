const b1=document.querySelector(".btn");
b1.addEventListener("mouseover", (event)=>{
    const x=(event.pageX - b1.offsetLeft);
    const y = (event.pageY - b1.offsetTop);
    b1.style.setProperty("--xpos"+x+"px")
    b1.style.setProperty("ypos"+y+"px")
    
})