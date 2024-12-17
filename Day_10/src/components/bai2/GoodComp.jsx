import React, { useState } from "react";
import SlowComp from "../../SlowComp";

const Child = () => {
  return (
    <>
      <p>Child</p>
      <SlowComp />
    </>
  );
};

const Solution = () => {
  const [count, setCount] = useState(0);
  const handleUp = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>GoodComp {count}</p>
      <button onClick={handleUp}>UP</button>
    </>
  );
};

export default function GoodComp() {
  return (
    <div>
      <Solution />
      <Child />
    </div>
  );
}
