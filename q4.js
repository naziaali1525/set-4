let banana =  15;
let apple = 10;
let mango = 8;

let noOfBanana;
let noOfApple;
let noOfMango;



function fruitCost() {
    noOfBanana = parseInt(document.getElementById("banana").value);
    noOfApple = parseInt(document.getElementById("apple").value);
    noOfMango = parseInt(document.getElementById("mango").value);
     totalCost = noOfBanana*banana + noOfApple*apple + noOfMango*mango;
    alert(totalCost);
}