/*
[문제] axios 또는 fetch를 이용해 아래 두 요청을 병렬로 처리하세요.

- https://jsonplaceholder.typicode.com/users/1
- https://jsonplaceholder.typicode.com/posts/1

Promise.all을 활용하여
두 결과를 동시에 받아 콘솔에 출력하세요.
*/

import axios from "axios";

const main = async () => {
  const api = [
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
  ];
  const res = await Promise.all(api);
  const data = await Promise.all(res.map((re) => re.json));
  console.log(data);
};

const main2 = async () => {
  const api = [
    axios.get("https://jsonplaceholder.typicode.com/users/1"),
    axios.get("https://jsonplaceholder.typicode.com/posts/1"),
  ];
  const res = await Promise.all(api);
  const data = res.map((re) => re.data);
  console.log(data);
};
