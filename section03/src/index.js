/* common.js 
const { add, sub } = require("./math");
*/

/* esmodule 확장자를 붙여줘야 함
default 설정 된 함수는 중괄호 없이 아무 이름으로 export 할 수 있다
*/
// import mul from "./math.js";
// import { add, sub } from "./math.js";
import randomColor from "randomcolor";
// import mul, { add, sub } from "./math.js";

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
