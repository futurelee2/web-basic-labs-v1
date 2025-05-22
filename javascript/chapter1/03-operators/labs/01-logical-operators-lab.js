// 아래 코드에서 각각의 연산 결과가 true인지 false인지 적어보세요.

console.log(5 == "5"); // t
console.log(5 === "5"); //f
console.log(7 > 2 && 2 > 7); //f
console.log(0 == false); // t (자동형변환)
console.log("0" == false); // t (자동으로 Number로 형변환 했나봄..)

let x = false;
let y = true;
let z = false;

console.log(x || (y && z));
console.log((x || y) && z);

let a = 2;
let b = 3;
let c = 4;

let result = a++ + --b * c--;
console.log(result);
