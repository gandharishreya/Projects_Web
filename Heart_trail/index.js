const element=document.querySelector("body")
element.addEventListener("mousemove", (event) => {
    const xpos=event.offsetX;
    const ypos= event.offsetY;
    const span1=document.createElement('span');
    span1.style.left = xpos + "px";
    span1.style.right = ypos + "px";
    const size = Math.random()*100;
    span1.style.width = size + "px";
    span1.style.height = size + "px";
    element.appendChild(span1);
    setTimeout(()=>{
        span1.remove();
    },3000);

})