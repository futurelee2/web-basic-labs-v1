//객체복사 : 얕은복사 vs 깊은 복사
// 개념 숙지하기 !!!!!!!!!!!!!!!! => "ai 해줘" 부탁하면 됨

const student = {
  name: "ㅇㅁㄹ",
  scores: {
    math: 100,
    english: 10000,
    sciences: { 물: 50, 화: 30, 생: 20, 지: 50 },
  },
};

//얕은복사
// const shallowStudent = { ...student };
// shallowStudent.name = "이미래"; // 값이라서 안바뀜
// student.scores.english = 100; // 참조니까 바뀜
// console.log(student.name);
// console.log(student.scores.math);

const deepStudent = JSON.parse(JSON.stringify(student));
deepStudent.name = "이미래";
deepStudent.scores.english = 100;

console.log(student.name);
console.log(student.scores.math);
console.log(deepStudent.name);
console.log(deepStudent.scores.math);

function showThis() {
  this.name = "전역";
  console.log(this.name);
}

showThis(); // 브라우저에선 window 출력
