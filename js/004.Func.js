// 객체안의 함수 메소드(method)
// 인자 및 리턴으로 함수 값을 사용할 수 있음
function cal(func, num) {
  return func(num);
}
function increase(num) {
  return num + 1;
}
function decrease(num) {
  return num - 1;
}

console.log(cal(increase, 1));
console.log(cal(decrease, 1));

// 함수 리턴값
function cal(mode) {
  var funcs = {
    plus: function (left, right) {
      return left + right;
    },
    minus: function (left, right) {
      return left - right;
    },
  };
  return funcs[mode];
}
console.log(cal("plus")(2, 1));
console.log(cal("minus")(2, 1));

// 배열의 리턴값
var process = [
  function (input) {
    return input + 10;
  },
  function (input) {
    return input * input;
  },
  function (input) {
    return input / 2;
  },
];
var input = 1;
for (var i = 0; i < process.length; i++) {
  input = process[i](input);
}
console.log(input);

// 콜백
function sortNumber(a, b) {
  return a - b;
}

var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbers.sort(sortNumber)); // array, [20,10,9,8,7,6,5,4,3,2,1]
