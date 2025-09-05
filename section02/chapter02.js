function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); // False 함수
// && 연산자는 두 값이 모두 true여야 true를 반환한다.
// 첫 번째 피연산자가 false라면, 이미 결과가 false로 확정되므로 두 번째 연산은 실행하지 않는다.
// 단락 평가(short-circuit evaluation)가 적용되어 뒤에 있는 함수는 호출되지 않는다.

function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(returnTrue() || returnFalse()); // True 함수
// || 연산자는 하나라도 true이면 true를 반환한다.
// 따라서 첫 번째 피연산자가 true라면, 이미 결과가 확정되므로 두 번째 연산은 실행하지 않는다.
// 단락 평가 때문에 뒤에 있는 함수는 호출조차 되지 않는다.

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "이예린" }); // 이예린
// &&: 앞 값이 falsy면 뒤를 실행하지 않고 바로 앞 값을 반환.
// &&: 앞 값 truthy고 뒤 값이 truthy인 경우 뒤 값을 반환
// ||: 앞 값이 truthy면 뒤를 실행하지 않고 바로 앞 값을 반환.
