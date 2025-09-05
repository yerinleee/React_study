// 1. Falsy한 값
let f1 = undefined; // 정의되지 않음
let f2 = null; // 빈 값
let f3 = 0; // 숫자 0
let f4 = -0; // 음수 0
let f5 = NaN; // Not a Number
let f6 = ""; // 빈 문자열
let f7 = 0n; // BigInt 0

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello"; // 문자열 (빈 문자열이 아닌)
let t2 = 123; // 0이 아닌 숫자
let t3 = []; // 빈 배열도 truthy!
let t4 = {}; // 빈 객체도 truthy!
let t5 = () => {}; // 함수

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이예린" };
printName(person);
