/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

🎉 게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/

// 0 가위 1 바위 2 보

let count = 1;

while (count < 4) {
  let input = prompt("가위 바위 보 중  하나를 입력하세요");
  let number = Math.floor(Math.random() * 3); // 0이상 3미만

  console.log("[", count, "라운드]");
  if (input == "가위") {
    console.log("당신의 선택 : 가위");
    if (number == 0) {
      console.log("컴퓨터의 선택 : 가위");
      console.log("비겼습니다.");
    } else if (number == 1) {
      console.log("컴퓨터의 선택 : 바위");
      console.log("컴퓨터가 이겼습니다.");
    } else {
      console.log("컴퓨터의 선택 : 보");
      console.log("당신이 이겼습니다.");
    }
  }

  if (input == "바위") {
    console.log("당신의 선택 : 바위");
    if (number == 0) {
      console.log("컴퓨터의 선택 : 가위");
      console.log("당신이 이겼습니다.");
    } else if (number == 1) {
      console.log("컴퓨터의 선택 : 바위");
      console.log("비겼습니다.");
    } else {
      console.log("컴퓨터의 선택 : 보");
      console.log("컴퓨터가 이겼습니다.");
    }
  }

  if (input == "보") {
    console.log("당신의 선택 : 보");
    if (number == 0) {
      console.log("컴퓨터의 선택 : 가위");
      console.log("컴퓨터가 이겼습니다.");
    } else if (number == 1) {
      console.log("컴퓨터의 선택 : 바위");
      console.log("당신이 이겼습니다.");
    } else {
      console.log("컴퓨터의 선택 : 보");
      console.log("비겼습니다.");
    }
  }
  count++;
}
