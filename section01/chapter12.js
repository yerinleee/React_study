// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수가 그대로 출력된다
varA();

let varB = function () {
  // 익명 함수
  //   console.log("funcB");
};

varB(); // 함수 표현식으로 만들어진 함수는 호이스팅이 되지 않음

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
