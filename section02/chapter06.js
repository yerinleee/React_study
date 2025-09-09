// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스 순회 (기본 for문)
// i = 0 → arr[0] = 1
// i = 1 → arr[1] = 2
// i = 2 → arr[2] = 3
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]); // 1, 2, 3
}

let arr2 = [4, 5, 6, 7, 8];
// i = 0 → arr2[0] = 4
// i = 1 → arr2[1] = 5
// ...
// i = 4 → arr2[4] = 8
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]); // 4, 5, 6, 7, 8
}

// 1.2 for...of 반복문
// -> 배열의 요소들을 직접 꺼내 순회
for (let item of arr) {
  // console.log(item); // 1, 2, 3
}

// 2. 객체 순회
let person = {
  name: "이예린",
  age: 31,
  hobby: "피아노",
};

// 2.1 Object.keys 사용
// -> 객체에서 "key" 값들만 뽑아서 새로운 배열로 반환
// keys = ["name", "age", "hobby"]
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  // console.log(key, value);
  // 출력:
  // name 이예린
  // age 31
  // hobby 피아노
}

// 2.2 Object.values
// -> 객체에서 "value" 값들만 뽑아서 새로운 배열로 반환
// values = ["이예린", 31, "피아노"]
let values = Object.values(person);

for (let value of values) {
  // console.log(value);
  // 출력:
  // 이예린
  // 31
  // 피아노
}

// 2.3 for...in 반복문
// -> 객체의 "key" 들을 직접 순회
for (let key in person) {
  const value = person[key];
  console.log(key, value);
  // 출력:
  // name 이예린
  // age 31
  // hobby 피아노
}
