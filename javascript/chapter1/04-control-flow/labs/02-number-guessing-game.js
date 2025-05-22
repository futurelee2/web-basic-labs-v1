// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복

// let guess = Math.random(10);
let guess = Math.floor(Math.random() * 10) + 1;
console.log("guess", guess);

while (true) {
  let input = prompt("숫자를 입력하세요.");
  if (input != guess) {
    console.log("땡!");
  } else {
    console.log("정답을 맞추셨습니다.");
    break;
  }
}
