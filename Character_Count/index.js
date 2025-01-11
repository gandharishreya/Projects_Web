const tarea=document.querySelector(".text")
const tcount=document.getElementById("total-count")
const rcount=document.querySelector(".remain-count")
tarea.addEventListener("keyup", ()=>{
    updateCount()
    
})

function updateCount() {
   tcount.innerText = tarea.value.length
    rcount.innerText=tarea.getAttribute("maxlength") - tarea.value.length
}