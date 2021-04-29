// Scope

function ex1() {
  var a = 10;
  var b = 20;
  var c = 30;
  function outer_func() {
    var b = 200;
    var c = 300;

    inner_func();
  }
  function inner_func() {
    var c = 3000;
    console.log(a + "<<<<<=");
    console.log(b + "<<<<<="); //b 값이 20이 출력됨
    console.log(c + "<<<<<=");
  }
  outer_func();
}

function ex2() {
  var a = 10;
  var b = 20;
  var c = 30;
  function outer_func() {
    var b = 200;
    var c = 300;
    function inner_func() {
      var c = 3000;
      console.log(a + "<<<<<=");
      console.log(b + "<<<<<="); //b값이 200 이 출력됨
      console.log(c + "<<<<<=");
    }
    inner_func();
  }
  outer_func();
}
