ex1 = () => {
  console.log(`ex1`);
  function outter() {
    function inner() {
      var title = "coding everybody";
      console.log(title);
    }
    inner();
  }
  outter();

  function outter() {
    var title = "coding everybody";
    function inner() {
      console.log(title);
    }
    inner();
  }
  outter();
};

ex2 = () => {
  console.log(`ex2`);
  function outter() {
    var title = "coding everybody";
    return function () {
      console.log(title);
    };
  }
  inner = outter();
  inner();
};

ex3 = () => {
  console.log(`ex3`);
  function factory_movie(title) {
    return {
      get_title: function () {
        return title;
      },
      set_title: function (_title) {
        title = _title;
      },
    };
  }
  ghost = factory_movie("Ghost in the shell");
  matrix = factory_movie("Matrix");

  console.log(ghost.get_title());
  console.log(matrix.get_title());

  ghost.set_title("공각기동대");

  console.log(ghost.get_title());
  console.log(matrix.get_title());
};

ex4 = () => {
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return i;
    };
  }
  for (var index in arr) {
    console.log(arr[index]());
  }

  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr[i] = (function (id) {
      return function () {
        return id;
      };
    })(i);
  }
  for (var index in arr) {
    console.log(arr[index]());
  }
};
