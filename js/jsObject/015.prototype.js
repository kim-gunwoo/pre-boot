function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return "prototype : " + (this.first + this.second);
};

var kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "this : " + (this.first + this.second);
};
var lee = new Person("lee", 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

/*
1. 프로토타입 의미
객체들이 공통으로 사용하는 속성값

2. 프로토타입 없을 때의 비효율적인 점
객체를 생성할 때 마다 같은 동작을 하는 메소드가 메모리에 계속 생긴다. => 성능 저하, 메모리 낭비

3. 프로토타입을 사용하면 좋은 점
객체들이 공통으로 사용하는 속성값을 정의해서 객체 생성마다 같은 속성값을 만드는 과정을 생략해, 
성능 향상과 메모리를 효율적으로 이용할 수 있게 해준다.
*/
