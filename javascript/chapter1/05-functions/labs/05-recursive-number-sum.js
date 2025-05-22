// 문제 : 재귀 함수로 1부터 n까지의 합을 구하세요
// 예: sumTo(5) → 15
function sumTo(n) {
  // TODO
  let sum = 0;
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

let num = sumTo(5);
console.log("num", num);

// console.log("sum", num);

// function recursiveFunction(parameter) {
//   if (종료 조건) {
//     return 결과;
//   } else {
//     return recursiveFunction(다음 인자);
//   }
// }
