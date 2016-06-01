function calculateTax(income) {
    var tax;
    if (income < 16000) {
        tax = 0;
    } else if (income < 52500 ) {
        tax = (income - 16000) *0.1;
    } else if (income < 113000){
        tax = (income - 52500) *0.16 + 3650; 
    } else if (income < 184500){
        tax = (income - 113000) *0.24 +13330;
    } else {
        tax = (income - 184500) * 0.36 + 30490;
    }
       
    return tax;
}

function changeStuff() {
    var input = document.getElementById("box");
    var number = input.value;
    var output = document.getElementById("output");
    output.value = calculateTax(number);
}
