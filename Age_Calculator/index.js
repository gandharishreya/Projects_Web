const d=document.getElementById("date")
const b=document.getElementById("btn")
const r=document.getElementById("result")

function calculateAge() {
    const bd=d.value;
    console.log(bd);
    if(bd===""){
        alert("Please enter your birthday");
    }
    else{
        const age=getAge(bd);
        r.innerHTML=`Your age is ${age} ${age>1 ? "years":"year"} old`
    }
}

function getAge(bd) {
    const curdate=new Date();
    const newdate=new Date(bd);
    let age=curdate.getFullYear()-newdate.getFullYear();
    const mon=curdate.getMonth()-newdate.getMonth();

    if(mon<0 || (mon==0 && curdate.getDate() < newdate.getDate()) ){
        age--;
    }
    return age;
}

b.addEventListener("click", calculateAge)