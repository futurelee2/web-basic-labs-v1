// [문제] Promise객체를 이용해 ms초 후에 문자열 msg를 출력하는 비동기 함수를 작성해보세요.
function func(ms, msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, ms);
  });
}

func(1000, "성공").then((msg) => console.log(msg));
