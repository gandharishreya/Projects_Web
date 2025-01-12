const b=document.querySelector(".btn");
const bmires = document.getElementById("bmi-result");
const condition = document.getElementById("condi");

function convert() {
    const h=document.getElementById("height").value/100;
    const w=document.getElementById("weight").value;
    const bmi=(w / (h*h)).toFixed(2);

    if (h <= 0 || w <= 0 || isNaN(h) || isNaN(w)) {
        // Check for invalid input
        bmires.value = "Invalid input";
        condition.innerText = "Please enter valid numbers.";
        return;
      }

    bmires.value=bmi;
    if(bmi<18.5){
        condition.innerText="Under weight";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        condition.innerText="Normal weight";
    }
    else if(bmi>=25 && bmi<=29.9){
        condition.innerText="Over weight";
    }
    else if(bmi>=30){
        condition.innerText="Obesity";
    }

}

b.addEventListener("click", convert);