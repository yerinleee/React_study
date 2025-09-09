// 5가지 배열 요소 순회 및 탐색 메서드

// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// 매개변수: (item, idx, arr)
// item = 현재 요소 값
// idx = 현재 인덱스
// arr = forEach를 호출한 원본 배열
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);  // 0 2, 1 4, 2 6
});

// 예: 배열의 각 요소를 2배로 만들어 새로운 배열에 저장
let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
// doubledArr = [2, 4, 6]

// 2. includes
// 배열에 특정 값이 포함되어 있는지 확인 (true/false 반환)
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10); // false

// 3. indexOf
// 배열에서 특정 요소의 인덱스를 반환 (없으면 -1)
// 주의: 객체 비교는 참조(주소) 비교라 값이 같아도 다른 객체면 -1
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20); // 결과: -1

// let objectArr = [
//   { name: "이예린" },
//   { name: "홍길동" },
// ];

// console.log(objectArr.indexOf({ name: "이예린" }));
// → -1 (동일한 객체 참조가 아니라 단순 값 비교라서 못 찾음)

// console.log(
//   objectArr.findIndex(
//     (item) => item.name === "이예린"
//   )
// );
// → 0 (콜백 함수 조건을 만족하는 요소의 인덱스 반환)

// 4. findIndex
// 배열의 모든 요소를 순회하면서 콜백 조건을 만족하는
// "첫 번째 요소의 인덱스"를 반환. 없으면 -1
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999);
console.log(findedIndex); // -1 (조건을 만족하는 값이 없음)

// 5. find
// 배열의 모든 요소를 순회하면서 콜백 조건을 만족하는
// "첫 번째 요소 자체"를 반환. 없으면 undefined
let arr5 = [{ name: "이예린" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이예린");

console.log(finded); // { name: "이예린" }
