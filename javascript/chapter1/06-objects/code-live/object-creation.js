//객체 생성 방법

//1) 객체 리터럴
let s1 = {
  name: "이학생",
  age: 15,
};

//2) 생성자 함수 (클래스 아님)
function Student(name, age) {
  this.name = name;
  this.age = age;
}

let s2 = new Student("이미래", 20);

console.log(s2);
console.log("age" in s2); // true
console.log("score" in s2); //false
console.log(s2.hasOwnProperty("age")); //true
console.log(s2.hasOwnProperty("score")); //false

// 생성자 함수 안에 함수를 생성하지 않는 건? 메모리 절약을 위해 (자바의 static 같은..?)
Student.prototype.study = function () {
  console.log("학생이 공부를 합니다.");
};

s2.study();

//클래스 방식 -> 자바스크립트를 백엔드를 설계할때 많이 사용 (고정된, 구조화시키기 위해)
class StudentClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  study() {
    console.log(`${this.name} 학생이 공부를 합니다.`);
  }
}

const st = new StudentClass("이미래", 20);
st.study();
