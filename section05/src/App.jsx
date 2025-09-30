import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  console.log(count); // 현재 값 (0)
  // setCount는 count를 변경하는 함수

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <p>현재 카운트: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </>
  );
}

export default App;
