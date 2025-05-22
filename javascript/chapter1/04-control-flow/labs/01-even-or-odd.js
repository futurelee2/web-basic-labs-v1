// 문제: prompt() 메서드를 활용해 사용자에게 숫자를 입력받아 홀수/짝수를 출력하세요.
<<<<<<< HEAD

//콘솔에서는 안됨 -> alert - 기본내장함수

// alert("새싹"); //자바스크립트 문법이라보기 힘들고, 브라우저 것 (노드- 서버용 <> 브라우저용)
// let input = prompt("이름");
// alert(input);

let input = prompt("숫자를 입력하세요.");
if (input % 2 == 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}
=======
// alert("새싹 안녕");
// let input = prompt("이름이 뭡니까?");
// alert(input);
let input = prompt("숫자를 입력하세요");

console.log(input % 2 == 1 ? "홀수" : "짝수");
>>>>>>> 86cc0390c5219ccbe973758fd5b25f1163feeb97
