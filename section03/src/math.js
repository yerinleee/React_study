// math 모듈

/*
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
*/

/*
common.js에서 export 하는 방식
module.exports = {
  add,
  sub,
};
*/

/* esmodule 에서 export 하는 방식 */
// export { add, sub };

// 따로 export 문 없이 함수 앞에 export 넣어도 됨
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// default 설정을 할 수 있음
export default function multiply(a, b) {
  return a * b;
}
