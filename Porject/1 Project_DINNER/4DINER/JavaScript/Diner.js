/////////////// VALUE EXTRACTION FROM DOM  //////////////////////
var tac = document.getElementById("3Tacos");
var itemA = tac.value;
 
var whiteRice = document.getElementById("whiteRise");
var white = whiteRice.value;

var RegularRice = document.getElementById("Rice");
var valueRice = RegularRice.value; 

var bea = document.getElementById("Beans");
var itemC = bea.value;

var fish = document.getElementById("fishTaco2"); 
var itemOne = fish.value;

var colsla = document.getElementById("Colsla");
var side3 = colsla.value; 

/// TACOS ///
tac.addEventListener("change", 
  tacos = function(){ 
  let qtyTacos = taco(itemA);
  let qty = qtyTacos["qty"];
  let price = qtyTacos["price"];
  let total = qtyTacos["total"];
  
  // document.getElementById("item-1").innerHTML = itemA; // for menu output box
  document.getElementById("item-1").innerHTML = itemA;
  document.getElementById("taco-price").innerHTML = "Meat Tacos Price";
  document.getElementById("taco-total").innerHTML= total;
  document.getElementById("taco-item-qty").innerHTML= "Tacos";
  document.getElementById("taco-qty").innerHTML= qty;
  document.getElementById("taco-2").innerHTML = "Price for Tacos $" + price; 
 
}) // end of paranthesis //inside (anonymous function )


/// WHITE RICE ///
whiteRice.addEventListener("change", 
  aros = function(){ 
  let qtyWhiteRice = whiteRice(white);
  let qty = qtyWhiteRice["qty"];
  let price = qtyWhiteRice["price"];
  let total = qtyWhiteRice["total"];
 
  document.getElementById("item-2").innerHTML = white; 
  document.getElementById("whiteRice-total-qty").innerHTML = "White Rice"; 
  document.getElementById("white-total").innerHTML = total;
  document.getElementById("whiteRice-item-qty").innerHTML = "White Rice";
  document.getElementById("rice-qty").innerHTML = qty;
  document.getElementById("rice-2").innerHTML = "Price for White Rice $" + price; 
})

// RICE ///

RegularRice.addEventListener("change", 
  rice = function () {
  let aros = Rice(valueRice);
  let qty =   aros["qty"];
  let price = aros["price"];
  let total = aros["total"];
  document.getElementById("item-3").innerHTML = "Regular" + valueRice; 
  document.getElementById("Rice-total-qty").innerHTML = "Regular Rice";
  document.getElementById("rice-total").innerHTML = total;
  document.getElementById("Rice-item-qty").innerHTML = "Rice";
  document.getElementById("rice-3-qty").innerHTML = qty;
  document.getElementById("rice-3").innerHTML = "Price for Regular Rice $" + price; 

})

/// BEANS ///
bea.addEventListener("change",
  bea = function(){
  let bean = beans(itemC);
  let qty =   bean["qty"];
  let price = bean["price"];
  let total = bean["total"];
  
  document.getElementById("item-4").innerHTML = itemC;
  document.getElementById("beans-total-qty").innerHTML = "Beans";
  document.getElementById("beans-total").innerHTML = total;
  document.getElementById("beans-item-qty").innerHTML = "Beans";
  document.getElementById("beans-qty").innerHTML = qty;
  document.getElementById("beans-4").innerHTML = "Price for Beans $" + price ; 
})

/// Fish TACOS ///

fish.addEventListener("change", 
fish = function(){
let fish = fishy(itemOne);
let qty =   fish["qty"];
let price = fish["price"];
let total = fish["total"];
  
document.getElementById("item-5").innerHTML = itemOne;
document.getElementById("fish-total-qty").innerHTML = "Regular fish";
document.getElementById("fish-total").innerHTML = total;
document.getElementById("fish-item-qty").innerHTML = "Fish";
document.getElementById("fish-qty").innerHTML = qty;
document.getElementById("fish-4").innerHTML = " Price for Fish $" + price ; 

})

/// Coleslae /// 
colsla.addEventListener("change", 
col = function (){

let side = colsla(side3);
let qty =   side["qty"];
let price = side["price"];
let total = side["total"];
    
document.getElementById("item-6").innerHTML = side3;
document.getElementById("colsla-total-qty").innerHTML = "Regular Coleslaw";
document.getElementById("colsla-total").innerHTML = total;
document.getElementById("colsla-item-qty").innerHTML = "Coleslaw";
document.getElementById("colsla-qty").innerHTML = qty;
document.getElementById("colsla-6").innerHTML = "Price for Coleslaw $"+ price;

});

////////// Variables  ////////////////////////////

var count = 0;
var qty = 0; 

sides = {
    Colsla: 2.50,
    Rice: 7.00,
    beans: 5.00,
    Taco: 2.00,
    fishTacos: 5.00
}
  

// 
////////// functions  ////////////////////////////
var taco = function (Key_value){
    let value = priceTotalQty(Key_value);
    return value 
}

var whiteRice = function(Key_value){
    let value = priceTotalQty(Key_value);
    return value 
}

var Rice = function(Key_value){
    let value = priceTotalQty(Key_value);
    return value 
}

var beans = function(Key_value){
    let value = priceTotalQty(Key_value);
    return value 
}
var fishy = function(Key_value) {
    let value = priceTotalQty(Key_value);
    return value 
}

var colsla = function(Key_value){
    let value = priceTotalQty(Key_value);
    return value 
}

var priceTotalQty = function(Key_value) {
    qty++;
    let price = sides[Key_value];
    let total = price * qty;
    let value = {qty, price, total}; 
    return value
}

var clearTotalPriceQty = function(){
    let price = 0;
    let total = 0; 
    let qty = 0;
    let clear = {qty, price, total}
    console.log(clear);
    
    return clear
}
///  funciton ///

function ativate() {
    unchecklist();
    clearBox();
    menuBox();
    window.location.reload(true);
}

function unchecklist(){
    let x = document.getElementsByClassName("status")

    for (var i = 0; i < x.length; i++) { 
        x[i].innerHTML= " ";
        console.log(x, i);
    } 
    
}

// clears the check from the checkbox input 
function clearBox() {    
    var inputs = document.querySelectorAll('.check2'); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].checked = false; 
    } 
} 

// menuBox () function hides and displays the invoice class
function menuBox () {
    var invoice = document.getElementById('invoice');
    if (invoice.style.visibility === 'hidden') {
    invoice.style.visibility = 'visible';
    } else {
    invoice.style.visibility = 'hidden';
  }
} 

function apper () { 
    let Appear = document.getElementById('item');
    let App = document.getElementById('item1');
    Appear.style.visibility = 'visible';
    App.style.visibility = 'visible';
}

/// hover activates function menuBox
// var x = document.getElementById("3_Tacos");
var x = document.getElementById("3Tacos");
var y = document.getElementById("fishTaco2");
x.addEventListener("mouseover", menuBox, false);
y.addEventListener("mouseover", menuBox, false);

