import React, { useState, memo, useCallback, useMemo } from "react";
import SlowComp from "../../SlowComp";

const Child = memo(({ handleUp }) => {
  console.log("Child");

  return (
    <>
      <p>Child</p>
      <button onClick={handleUp}>UP</button>
      <SlowComp />
    </>
  );
});

export default function GoodComp() {
  const [count, setCount] = useState(0);
  const handleUp = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);

  const user = useMemo(() => [], []);

  return (
    <div>
      <p>GoodComp {count}</p>
      <button onClick={handleUp}>UP</button>
      <Child handleUp={handleUp} user={user} />
    </div>
  );
}
