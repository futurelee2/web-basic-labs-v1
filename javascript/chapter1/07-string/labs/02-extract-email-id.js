/* 이메일 주소에서 아이디만 추출하세요 */
function extractEmailId(email) {
  // TODO: "@" 앞부분만 추출
  let id = email.split("@");
  return id[0];
}
console.log(extractEmailId("coder123@gmail.com")); // "coder123"
