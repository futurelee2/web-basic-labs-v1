// 호이스팅: var vs let/const
console.log("=== 호이스팅 예제 ===");

console.log("hoistedVar:", hoistedVar); // undefined -> 값이 초기화되지 않은 상태를 뜻함(원래는 접근 불가능하나, var 는 가능)
var hoistedVar = "var 변수";

// console.log("hoistedLet:", hoistedLet); // Error
let hoistedLet = "let 변수";

console.log("hoistedLet:", hoistedLet);
