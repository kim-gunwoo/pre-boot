function sum() {
  var i,
    _sum = 0;
  for (i = 0; i < arguments.length; i++) {
    console.log(i + " : " + arguments[i]);
    _sum += arguments[i];
  }
  return _sum;
}
console.log("result : " + sum(1, 2, 3, 4));

function zero() {
  console.log("zero.length", zero.length, "arguments", arguments.length);
}
function one(arg1) {
  console.log("one.length", one.length, "arguments", arguments.length);
}
function two(arg1, arg2) {
  console.log("two.length", two.length, "arguments", arguments.length);
}
zero(); // zero.length 0 arguments 0
one("val1", "val2"); // one.length 1 arguments 2
two("val1"); // two.length 2 arguments 1

// function & arguments
function sum(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
  return arg1 + arg2;
}
console.log(sum.apply(null, [1, 2]));

var o1 = { val1: 1, val2: 2, val3: 3 };
var o2 = { v1: 10, v2: 50, v3: 100, v4: 25 };
function sum() {
  var _sum = 0;
  for (idx in this) {
    _sum += this[idx];
  }
  return _sum;
}
console.log(sum.apply(o1)); // 6
console.log(sum.apply(o2)); // 185

o1.sum = sum;
console.log(o1.sum());
delete o1.sum();
