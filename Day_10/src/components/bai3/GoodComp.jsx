import React, { useState } from "react";

export default function GoodComp({ ui }) {
  const [count, setCount] = useState(0);
  const handleUp = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>GoodComp {count}</p>
      <button onClick={handleUp}>UP</button>
      {ui}
    </div>
  );
}
