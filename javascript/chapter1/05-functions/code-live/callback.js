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
