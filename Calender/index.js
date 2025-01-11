const mon=document.getElementById("month")
const day=document.getElementById("day")
const day_num = document.getElementById("day-num")
const year = document.getElementById("year")

const date=new Date()
console.log(date.getDate());

const month=date.getMonth()
mon.innerHTML=date.toLocaleString('en',{
    month:'long'
})

day.innerText=date.toLocaleString('en', {
    weekday:'long'
})

day_num.innerText=date.getDate()
year.innerText=date.getFullYear()
