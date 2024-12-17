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

// Component As Prop
// Bai3 Comp ko render
export default function Bai3() {
  return (
    <div>
      <p>Bai3</p>
      <BadComp />
      <hr />
      <GoodComp ui={<Child />} />
    </div>
  );
}
