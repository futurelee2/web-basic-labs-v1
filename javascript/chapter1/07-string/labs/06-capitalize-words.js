/* 모든 단어의 첫 글자를 대문자로 바꾸기 */
function capitalizeWords(sentence) {
  // TODO: split → map → join
  let word = sentence.split(" ");
  for (const w of word) {
    let w = console.log(w[0].toUpperCase());
  }
}
console.log(capitalizeWords("hello javascript world")); // "Hello Javascript World"
