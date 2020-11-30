
//setting default id to disabled of minus button
document.getElementById("minus").setAttribute("disabled", "disabled");
//value to increment decrement input value
let valueadd;
let valuetwo;

//price value in variable

//First price calution function
let price = document.getElementById("price").innerText;
function priceTotal() {
    let total = valueadd * price;
    document.getElementById("price").innerText = total;
}
//Second price calution function
let secondprice = document.getElementById("twoprice").innerText;
function priceTotaltwo() {
    let total = valuetwo * secondprice;
    document.getElementById("twoprice").innerText = total;
}


//First plus button
document.getElementById("plus").addEventListener("click", function () {
    //value input user
    valueadd = document.getElementById("quantity").value;
    //value increment
    valueadd++;
    //setting incremnt input value
    document.getElementById("quantity").value = valueadd;

    if (valueadd > 1) {
        document.getElementById("minus").removeAttribute("disabled");
        document.getElementById("minus").classList.remove("disabled");
    }
    priceTotal();
})
// First minus button
document.getElementById("minus").addEventListener("click", function () {
    //value input user
    valueadd = document.getElementById("quantity").value;
    //value decrement
    valueadd--;
    //setting decrement input value
    document.getElementById("quantity").value = valueadd;

    if (valueadd === 1) {
        document.getElementById("minus").setAttribute("disabled", "disabled");
    }
    priceTotal();
})




// second plus
document.getElementById("secondplus").addEventListener("click", function () {
    //value input user
    valuetwo = document.getElementById("secondquantity").value;
    //value increment
    valuetwo++;
    //setting incremnt input value
    document.getElementById("secondquantity").value = valuetwo;

    if (valuetwo > 1) {
        document.getElementById("secondminus").removeAttribute("disabled");
        document.getElementById("secondminus").classList.remove("disabled");
    }
    priceTotaltwo();
})
//second minus
document.getElementById("secondminus").addEventListener("click", function () {
    //value input user
    valuetwo = document.getElementById("secondquantity").value;
    //value decrement
    valuetwo--;
    //setting decrement input value
    document.getElementById("secondquantity").value = valuetwo;

    if (valuetwo === 1) {
        document.getElementById("secondminus").setAttribute("disabled", "disabled");
    }
    priceTotaltwo();
})



//CheckOut function
function CheckOut() {
    let first = parseInt(document.getElementById("price").innerHTML);
    let second = parseInt(document.getElementById("twoprice").innerHTML);
    let sum = first + second;
    document.getElementById("sum").innerHTML = sum;
}


