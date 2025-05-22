// var: 함수 스코프, 재선언 가능
console.log("=== var 예제 ==="); // 브라우저, 노드 둘다 실행 시킬수 있음

var name = "지수";
console.log("이름:", name);

var name = "지훈"; // 재선언 가능
console.log("바뀐 이름:", name);

function varTest() {
  if (true) {
    var x = 10;
  } // 자바에서 if 닫히면 (블록이 사라지면) x 가 사라지는게 아님 , but 자바는 블록안에서만 x 사용됨
  console.log("x 값:", x); // 함수 스코프
}
console.log(x); // 함수 나온뒤에 x 사라짐

varTest();
