// 문제 : 숫자 n을 입력받아 1부터 n까지의 합을 반환하는 함수를 작성하세요.

function totalsum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
