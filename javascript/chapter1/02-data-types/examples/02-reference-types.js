// 참조형 데이터
console.log("=== 참조형 자료형 ===");

let arr = [1, 2, 3];
let user = { name: "지수", age: 25 }; //객체표현리터럴 {중괄호}
let mr = {}; // 이것도 객체
let greet = function () {
  console.log("Hello!");
}; // 자바에서 function 함수도 객체임(일급객체?)

console.log(typeof arr); // object
console.log(typeof user); // object
console.log(typeof greet); // function
