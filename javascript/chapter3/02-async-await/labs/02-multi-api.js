/*
[문제] 두 개의 외부 API를 fetch로 병렬 처리한 뒤, 둘의 결과를 모두 출력하세요.

1) https://jsonplaceholder.typicode.com/posts/2
2) https://jsonplaceholder.typicode.com/users/1

- async/await와 Promise.all을 활용
- 두 API 모두의 데이터를 받아서 각각 출력
*/

async function func() {
  try {
    const [res1, res2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/2"),
      fetch("https://jsonplaceholder.typicode.com/users/1"),
    ]);
    const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
    console.log(data1);
    console.log(data2);
  } catch (err) {
    console.log(err);
  }
}

//방법2
// async function main() {
//     const promises = [
//       fetch('https://jsonplaceholder.typicode.com/posts/2'),
//       fetch('https://jsonplaceholder.typicode.com/users/1'),
//     ];
//     const responses = await Promise.all(promises);
//     const datas = await Promise.all(responses.map((response) => response.json()));

//     datas.forEach((data) => console.log(data));
//   }
