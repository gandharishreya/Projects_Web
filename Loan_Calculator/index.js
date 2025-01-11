

function calculateLoan() {
    loanamt=document.getElementById("amount").value;
    rate=document.getElementById("rate").value;
    mon=document.getElementById("month").value;

    interest=(loanamt*(rate*0.01))/mon;

    monthly=(loanamt/mon+interest).toFixed(2)

    document.getElementById("payment").innerHTML= `Monthly Payment: ${monthly}`
    
}