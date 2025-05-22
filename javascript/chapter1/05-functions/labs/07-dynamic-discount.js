// 할인율을 입력받아 할인 가격을 계산하는 함수를 반환하세요.

//오류코드
// function createDiscount(rate) {
//   // 매개변수(rate)도 지역변수임!
//   // TODO: 클로저로 rate를 기억하고, 가격을 받아 할인된 가격 반환
//   let rate;
//   return function (price) {
//     rate * price;
//   };
// }

function createDiscount(rate) {
  // 매개변수(rate)도 지역변수임!
  // TODO: 클로저로 rate를 기억하고, 가격을 받아 할인된 가격 반환
  return function () {
    return price - rate * price; // price*(1-rate)
  };
}

function createDiscount(rate) {
  // 매개변수(rate)도 지역변수임!
  // TODO: 클로저로 rate를 기억하고, 가격을 받아 할인된 가격 반환
  return function (price) {
    return price - rate * price;
  };
}

const blackFriday = createDiscount(0.3);
console.log(blackFriday(100000)); // → 70000

const halfsale = createDiscount(0.5);
console.log(halfsale(100000)); //  0.5 기억해줌
