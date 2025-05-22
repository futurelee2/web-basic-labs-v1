// let: 블록 스코프, 재선언 불가
console.log("=== let 예제 ===");

let title = "기초 JS";
console.log("제목:", title);

title = "심화 JS"; // 재할당 가능, 재선언 불가능
console.log("수정된 제목:", title);

function letTest() {
  if (true) {
    let x = 20; // 블록스코프 -> 블록이 닫히면 x 사라짐
    console.log("x (블록 내부):", x);
    var y = 10;
  }
  // console.log("x (외부):", x); // ReferenceError
  console.log("블록 외부 y", y); // var 는 출력가능
}
letTest();
