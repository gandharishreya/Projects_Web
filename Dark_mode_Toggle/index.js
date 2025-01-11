const inp=document.querySelector(".input")
const body1=document.querySelector("body")
inp.checked=JSON.parse(localStorage.getItem("mode"));
updateBody()

function updateBody() {
    if(inp.checked){
        body1.style.background='black';
    }
    else{
        body1.style.background='white';
    }
}

inp.addEventListener("input", ()=>{
    updateBody();
    addLocalStorage();
})

function addLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inp.checked))
}