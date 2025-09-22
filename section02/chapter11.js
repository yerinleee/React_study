// [1] 1을 콘솔에 출력
// → 이 코드는 동기(synchronous) 코드이므로 즉시 실행됨
console.log(1);

// [2] setTimeout 함수 실행
// → 이건 비동기(asynchronous) 함수임
// → 자바스크립트 엔진은 이 콜백 함수를 "바로 실행하지 않고"
//    Web APIs 영역에 넘겨서 타이머(3초)를 설정함
//
// ※ Web APIs (브라우저 제공 기능): setTimeout, DOM 이벤트, Ajax 등 처리
//
// 3초가 지나면 콜백 함수는 '태스크 큐(callback queue)'로 이동하게 되고,
// 현재 실행 중인 동기 코드가 모두 끝난 후, 이벤트 루프(Event Loop)에 의해 실행됨
setTimeout(() => {
  // 이 코드는 3초 뒤에 실행됨
  console.log(2);
}, 3000);

// [3] 3을 콘솔에 출력
// → 이 코드도 동기 코드이므로 setTimeout과는 무관하게 즉시 실행됨
console.log(3);
