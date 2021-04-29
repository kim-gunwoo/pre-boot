class Person {
  // 생성자
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  // 메소드
  sum() {
    return this.first + this.second;
  }
}

var kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "this : " + (this.first + this.second);
};

var lee = new Person("lee", 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }

  sum() {
    return super.sum() + this.third;
  }

  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

var kkk = new PersonPlus("kkk", 10, 20, 30);
console.log("kkk.sum()", kkk.sum());
console.log("kkk.avg()", kkk.avg());
