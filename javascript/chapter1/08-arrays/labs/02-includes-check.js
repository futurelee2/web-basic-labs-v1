/*
TODO: 금지어가 포함되어 있는지 검사하세요.
힌트: includes() 사용
*/

const bannedWords = ["바보", "멍청이", "나쁜말"];
const input = "당신은 정말 멍청이야!";

// TODO: 금지어가 하나라도 포함되어 있는지 확인하고, true/false 출력

for (word of bannedWords) {
  console.log(input.includes(word));
}

bannedWords.forEach((word) => {
  console.log(input.includes(word));
});

console.log(bannedWords.some((word) => input.includes(word)));
