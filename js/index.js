var fruit = [];
var price = [];
var total = 0.00;
function addUp() {
  for (var i = 0; i < price.length; i++) {
    total += price[i];
  }
  console.log("Total: $" + total.toFixed(2));
  total = 0;
}

function display() {
  for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i] + ": $" + price[i].toFixed(2));
  }
}

function remove() {
  fruit.length = 0;
  price.length = 0;
  total = 0;
}

var x = " ";
var y = 0;

function add2(x, y) {
  fruit.push(x);
  price.push(y);

}