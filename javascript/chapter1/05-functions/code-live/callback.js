function greet(name, callback) {
  console.log("유저가 입장했습니다");
  callback(name);
}

function greetKorean(name) {
  console.log(`안녕하세요 ${name} 님!`);
}

// greet("이미래", greetKorean()); // 이렇게 주면 실행임
greet("이미래", greetKorean);

greet("mirae lee", (name) => {
  console.log(`hello, ${name} !`);
});

//비동기처리에서의 콜백

//loginUser 가 고차함수
function loginUser(name, callback) {
  console.log(`${name}님 로그인중...`);
  setTimeout(() => {
    console.log("로긘 완료");
    callback(name);
  }, 2000); // 2초 후?
}

loginUser("이미래", (name) => {
  console.log(`${name}님 반갑`);
});
