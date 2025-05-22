// 기본 함수 선언식

sayHello(); // 호이스팅이 됨 -> 순서가 바뀌어서 호출이 됨

function sayHello() {
  console.log("하이");
  return "Hello";
}

let word = sayHello();
console.log(word);

//함수 표현식
// greet(); // 얘는 호이스팅 안됨

const greet = function () {
  console.log("ㅎㅇㅎㅇ");
};
greet();

console.log(greet);

//화살표함수

// sayHi(); // 호이스팅 안됨

const sayHi = () => {
  console.log("하잉ㅎㅋ");
};

sayHi();
