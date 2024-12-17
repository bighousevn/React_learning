import React from "react";
import BadComp from "./BadComp";
import GoodComp from "./GoodComp";

// Expression As Function
// State cần dời đi
// Nhưng UI không dời được
// Giao diện bên ngoài cần hiển thị thông tin của Comp con
// Case 2: Component con truyền biến ra ngoài
export default function Bai6() {
  return (
    <div>
      <p>Bai6</p>
      <BadComp />
      <hr />
      <GoodComp />
    </div>
  );
}
