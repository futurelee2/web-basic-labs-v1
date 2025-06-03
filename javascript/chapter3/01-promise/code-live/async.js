// 비동기 처리 방식
// 콜백, promise, async/ await

const { concatSeries } = require("async");

//setTimeout은 비동기 코드임
function getUserData(callback) {
  //setTimeout(함수, 지연시간 밀리초)
  setTimeout(() => {
    callback({ id: 1, name: "이유저" }); // 콜백함수의 매개값은 객체 하나임
  }, 1000); // 1초(1000)후에 콜백함수를 실행한다는 의미
}

getUserData((user) => {
  console.log(user);
});

// console.log("실행"); // 얘가 먼저 실행됨 -> 비동기 코드는 나중에 실행

//코드 변환
function getUserData2(data, callback) {
  setTimeout(() => callback(data), 1000);
}

getUserData({ id: 1, name: "이유저" }, (data) => console.log(data));
