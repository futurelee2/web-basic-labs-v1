// 문제: 배열 내 최소값, 최대값을 찾아보세요.

const numbers = [15, 3, 42, 20, 8];

let max = numbers[0];
let min = numbers[0];

for (i = 0; i <= numbers.length; i++) {
  if (max <= numbers[i]) {
    max = numbers[i];
  } else {
    continue;
  }
}
console.log("max", max);

for (i = 0; i <= numbers.length; i++) {
  if (min >= numbers[i]) {
    min = numbers[i];
  } else {
    continue;
  }
}
console.log("min", min);
