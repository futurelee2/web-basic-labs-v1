/*
상품을 가격순으로 오름차순 정렬한 뒤 출력하세요.
*/

const products = [
  { name: "Laptop", price: 1500000 },
  { name: "Tablet", price: 600000 },
  { name: "Phone", price: 1000000 },
];

// TODO: sort 사용 (price 기준 오름차순)

products.sort((p1, p2) => p1.price - p2.price); // sort 정렬할때는 음수,0, 양수 기준으로 만들어줘야함
console.log(products);
