/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
*/

let uppercheck = false;
let numcheck = false;
let tem = false;

let input = prompt("비밀번호를 입력하세요"); //prompt 는 string으로 받음
if (input.length < 8) {
  console.log("비번 8자 이상 요망");
}

// 정규식 사용 가능
// if (!/[A-Z]/.test(input))
// if (!/[0-9]/.test(input))
// if (!/[!@#$%^&*]/.test(input))

for (i = 0; i < input.length; i++) {
  let upper = String(input[i]);
  console.log("upper", typeof upper);
  if (upper != upper.toUpperCase()) {
    uppercheck = false;
  } else {
    uppercheck = true;
    break;
  }
}
if (!uppercheck) {
  console.log("대문자 1개 이상");
}

for (i = 0; i < input.length; i++) {
  let num = Number(input[i]);
  if (isNaN(num)) {
    numcheck = false;
  } else {
    numcheck = true;
    break;
  }
}

if (!numcheck) {
  console.log("숫자 1개 이상");
}

// 위에서 isStrong = True 로 준 뒤, 조건 한개라도 안맞으면 false로 바꿈
// if (isStrong) {
//   console.log("강한비밀번호 입니다.");
// }
