function func() {
  if (window === this) {
    document.write("window === this");
  }
}
func();

// window === this

var o = {
  func: function () {
    if (o === this) {
      document.write("o === this");
    }
  },
};
o.func();

// o === this

var funcThis = null;

function Func() {
  funcThis = this;
}
var o1 = Func();
if (funcThis === window) {
  document.write("window");
}

var o2 = new Func();
if (funcThis === o2) {
  document.write("o2");
}

// window
// o2

function Func() {
  document.write(o);
}
var o = new Func();

// undefined

var o = {};
var p = {};
function func() {
  switch (this) {
    case o:
      document.write("o<br />");
      break;
    case p:
      document.write("p<br />");
      break;
    case window:
      document.write("window<br />");
      break;
  }
}
func();
func.apply(o);
func.apply(p);

// window
// o
// p
