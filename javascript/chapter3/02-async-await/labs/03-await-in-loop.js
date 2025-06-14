/*
[문제] 아래 배열의 userId로 하나씩 fetch 요청을 보내 user 정보를 순서대로 출력하세요.

const userIds = [1, 2, 3];

- https://jsonplaceholder.typicode.com/users/{userId}
- async/await와 for...of 문 사용
- (순서대로 출력되어야 함)
*/

const userIds = [1, 2, 3];

async function func(userIds) {
  for (const id of userIds) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    console.log(data);
  }
}
