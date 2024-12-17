import React from "react";
import BadComp from "./BadComp";
import GoodComp from "./GoodComp";
import SlowComp from "../../SlowComp";

const Child = () => {
  return (
    <>
      <p>Child</p>
      <SlowComp />
    </>
  );
};

// Component As Child
// Bai4 Comp ko render
export default function Bai4() {
  return (
    <div>
      <p>Bai4</p>
      <BadComp />
      <hr />
      <GoodComp>
        <Child />
      </GoodComp>
    </div>
  );
}
