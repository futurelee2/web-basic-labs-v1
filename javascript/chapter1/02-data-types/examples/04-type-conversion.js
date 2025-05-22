// 명시적(강제)/암시적(자동) 타입 변환
console.log("=== 타입 변환 ===");

// 숫자로 변환
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN (Not a Number)

// 문자열로 변환
console.log(String(456)); // "456"
console.log(String(456)); // "456"

// 불리언으로 변환
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(5)); // true
console.log(Boolean("0")); // true
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true

if (" ") {
  console.log(
    " if문 () 괄호는 boolen 자리임으로 자동으로 T/F 로 형변환 시켜줌"
  );
}

if ({}) {
  console.log("객체도 가능");
}
