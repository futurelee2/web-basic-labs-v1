/* 모든 단어의 첫 글자를 대문자로 바꾸기 */
// 오류코드
// function capitalizeWords(sentence) {
//   // TODO: split → map → join
//   let word = sentence.split(" ");
//   for (let w of word) {
//     w[0].toUpperCase();
//   }
// }
// console.log(capitalizeWords("hello javascript world")); // "Hello Javascript World"

//오류해결
function capitalizeWords(sentence) {
  // TODO: split → map → join
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello javascript world")); // "Hello Javascript World"
