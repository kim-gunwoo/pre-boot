// 상속

function Person(name) {
  this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function () {
  return "My name is " + this.name;
};

function Programmer(name) {
  this.name = name;
}
Programmer.prototype = new Person();

var p1 = new Programmer("proto");
console.log(p1.introduce());

function Person(name) {
  this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function () {
  return "My name is " + this.name;
};

function Programmer(name) {
  this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function () {
  return "hello world";
};

var p1 = new Programmer("proto");
console.log(p1.introduce());
console.log(p1.coding());

// prototype
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

// prototype chain
var o = new Sub();
console.log(o.ultraProp);
