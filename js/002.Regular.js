// 정규표현식(regular expression)
var pattern = /a/;
var pattern = new RegExp("a");

// RegExp.exec()
console.log("RegExp.exec()");
console.log(pattern.exec("abcdef")); // ["a"]
console.log(pattern.exec("bcdefg")); // null

// RegExp.test()
console.log("RegExp.test()");
console.log(pattern.test("abcdef")); // true
console.log(pattern.test("bcdefg")); // false

// String.match()
console.log("String.match()");
console.log("abcdef".match(pattern)); // ["a"]
console.log("bcdefg".match(pattern)); // null

// String.replace()
console.log("String.replace()");
console.log("abcdef".replace(pattern, "A")); // Abcdef

/*
i
i를 붙이면 대소문자를 구분하지 않느다.
 */
console.log(`>> i`);
var xi = /a/;
console.log("Abcde".match(xi)); // null
var oi = /a/i;
console.log("Abcde".match(oi)); // ["A"];

/*
g
g를 붙이면 검색된 모든 결과를 리턴한다.
*/
console.log(`>> g`);
var xg = /a/;
console.log("abcdea".match(xg));
var og = /a/g;
console.log("abcdea".match(og));

console.log(">> 3");
var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
console.log(result);

// 치환
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content =
  "카카오 : http://kakao.com 입니다. 네이버 : http://naver.com 입니다. ";
var result = content.replace(urlPattern, function (url) {
  return '<a href="' + url + '">' + url + "</a>";
});
console.log(result);
