// 함수
let area1 = getArea(10, 20); // 인수
console.log(area1); // 200

let area2 = getArea(30, 20); // 인수
console.log(area2); // 600

getArea(120, 200); // 24000

// 호이스팅
// -> 끌어올리다 라는 뜻
// 자바스크립트에서 변수(var), 함수 선언문, 클래스 선언 등이
// 코드 실행 전에 "맨 위로 끌어올려진 것처럼 동작하는 현상을 말합니다.

function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
