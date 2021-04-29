var superObj = { superVal: "super" };
var subObj = { subVal: "sub" };

subObj.__proto__ = superObj;

console.log("subObj.subVal =>", subObj.subVal); // sub
console.log("subObj.superVal =>", subObj.superVal); // super

subObj.superVal = "sub";

console.log("subObj.superVal =>", subObj.superVal); // sub
console.log("superObj.superVal =>", superObj.superVal); // super

var subObj2 = Object.create(superObj);
subObj2.subVal = "sub2";

debugger;
console.log("subObj2.subVal =>", subObj2.subVal); // sub2
console.log("subObj2.superVal =>", subObj2.superVal); // super

subObj2.superVal = "sub2";

console.log("subObj2.superVal =>", subObj2.superVal); // sub2
console.log("superObj.superVal =>", superObj.superVal); // super

var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

// var lee = {
//     name:'lee',
//     first:10, second:10,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;

var lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 10;
lee.avg = function () {
  return (this.first + this.second) / 2;
};
console.log("lee.sum() : ", lee.sum());
console.log("lee.avg() : ", lee.avg());
