// [문제] 콜백 지옥 → Promise 체이닝으로 리팩토링

// 아래는 콜백으로 3단계 비동기 작업을 처리하는 코드입니다.
// Promise 체이닝 방식으로 바꿔보세요.

// function getUserId(callback) {
//   setTimeout(() => callback(null, 7), 500);
// }

// function getUserProfile(userId, callback) {
//   setTimeout(() => callback(null, { userId, nickname: "닉네임" }), 500);
// }
// function getUserOrders(profile, callback) {
//   setTimeout(
//     () =>
//       callback(null, [
//         `${profile.nickname}의 주문1`,
//         `${profile.nickname}의 주문2`,
//       ]),
//     500
//   );
// }

// // 콜백 지옥 형태
// getUserId((err, userId) => {
//   if (err) return console.error(err);
//   getUserProfile(userId, (err, profile) => {
//     if (err) return console.error(err);
//     getUserOrders(profile, (err, orders) => {
//       if (err) return console.error(err);
//       console.log("최종 주문 목록:", orders);
//     });
//   });
// });

function getUserId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject("no id");
      } else {
        resolve(id);
      }
    }, 500);
  });
}

function getUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({ userId, nickname: "닉네임" });
      } else reject("no userId");
    });
  });
}

function getUserOrders(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (profile) {
        resolve([`${profile.nickname}의 주문1`, `${profile.nickname}의 주문2`]);
      } else reject("no profile");
    });
  });
}

getUserId(7)
  .then((userId) => getUserProfile(userId))
  .then((profile) => getUserOrders(profile))
  .then((orders) => {
    console.log("최종 주문 목록 :", orders);
  })
  .catch((err) => console.log(err));
