console.log(typeof []); // 객체

let nums = [1, 2, 3];
console.log(nums[1]);

nums.push(4);

console.log(nums);

nums.unshift(0);
console.log(nums);

nums.shift();
console.log(nums);

nums.shift();
console.log(nums);

nums.pop();
console.log(nums);

for (let n of nums) {
  console.log(n);
}

nums.forEach((n) => {
  console.log(n);
}); // 콜백함수안에는 화살표함수 많이 사용
