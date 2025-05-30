// 콜백을 프로미스로 전환
// 객체라서 new 키워드 사용함 -> 함수로 묶어서 사용하는 것이 일반적

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 성공 결과를 반환하는 함수
      resolve({ id: 1, name: "이미래" });
    }, 1000);
  });
}

getUserData().then((user) => console.log(user)); //.catch();
console.log("실행"); // 비동기 확인 시, 실행 후 -> 위 getUserData 실행됨 확인
