// 객체 Object
var person = {};
person.name = "object";
person.introduce = function () {
  return "My name is " + this.name;
};
console.log(person.introduce());

var person = {
  name: "object",
  introduce: function () {
    return "My name is " + this.name;
  },
};
console.log(person.introduce());

// 생성자
function Person() {}
var p = new Person();
p.name = "egoing";
p.introduce = function () {
  return "My name is " + this.name;
};
console.log(p.introduce());

function Person() {}
var p1 = new Person();
p1.name = "egoing";
p1.introduce = function () {
  return "My name is " + this.name;
};
console.log(p1.introduce());

var p2 = new Person();
p2.name = "leezche";
p2.introduce = function () {
  return "My name is " + this.name;
};
console.log(p2.introduce());

function Person(name) {
  this.name = name;
  this.introduce = function () {
    return "My name is " + this.name;
  };
}
var p1 = new Person("egoing");
console.log(p1.introduce());

var p2 = new Person("leezche");
console.log(p2.introduce());

// 전역객체(Global object)
function func() {
  console.log("Hello?");
}
func();
window.func();

var o = {
  func: function () {
    console.log("Hello?");
  },
};
o.func();
window.o.func();
