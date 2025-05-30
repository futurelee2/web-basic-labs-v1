const words = ["Hello", "World", "!"];
console.log(words.join(""));
console.log(words.includes("hello"));
console.log(words.includes("Hello"));
console.log(words[0].slice(1, 3));
console.log(words.slice(1, 3));
console.log(words.concat(["good"]));
let words2 = words.concat(["good"]);
console.log(words);
console.log(words2);

let nums = [5, 4, 1, 2, 3];
nums.map((n) => n * 3);
console.log(nums.map((n) => n * 3));
console.log(nums.filter((n) => n % 2 === 0));
console.log(nums.reduce((acc, cur) => acc + cur, 0));
console.log(nums.sort()); // 기본적인 오름차순 아니면, 콜백으로 정렬 기준 넣어줘야함
console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => a + b));

console.log([10, 2, 1].sort());
// 결과: [1, 10, 2]

console.log(nums.sort((a, b) => a - b)); //오름차순
console.log(nums.sort((a, b) => b - a)); //내림차순
