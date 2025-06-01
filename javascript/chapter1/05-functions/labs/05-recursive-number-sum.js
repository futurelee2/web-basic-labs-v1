// 문제 : 재귀 함수로 1부터 n까지의 합을 구하세요
// 예: sumTo(5) → 15
function sumTo(n) {
  // TODO
  if (n == 1) {
    return 1;
  } else {
    console.log("n", n);
    console.log();
    return n + sumTo(n - 1); // 5+4+3+2+1
  }
}

let num = sumTo(5);

// console.log("sum", num);

// 재귀함수 : 자기 자신을 호출하는 함수
// function recursiveFunction(parameter) {
//   if (종료 조건) {
//     return 결과;
//   } else {
//     return recursiveFunction(다음 인자);
//   }
// }
