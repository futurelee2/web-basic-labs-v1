//클로저: 내부 함수에서 외부 함수의 변수를 기억하는 기능

/////
// function counter() {
//   let count = 0;
//   count++;
//   console.log(count);
// }

// counter(); //1
// counter(); //1
// counter(); //1

/// 전역변수로 빼서 기능 구현 OK
// let count = 0; // 누구나 다 건드림, 은닉 X
// function counter() {
//   count++;
//   console.log(count);
// }

//클로저 사용
function makeCounter() {
  let count = 0; //private 기능
  return function () {
    count++;
    console.log(count);
  }; // 함수 변수처럼 취급 가능함. 따라서 변수로 받아줘야함
}

const counter = makeCounter();

counter();
counter();
counter();
