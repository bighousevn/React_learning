import React, { useState } from "react";

const Child = ({ name }) => {
  return (
    <>
      <p>{name}</p>
      <input />
    </>
  );
};

// Việc thay đổi component xảy ra chung 1 vị trí hiển thị
export default function Bai8() {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <div>
      <button onClick={() => setIsAdmin(!isAdmin)}>Change Role</button>
      {isAdmin ? (
        <Child key={1} name={"Admin"} />
      ) : (
        <Child key={2} name={"User"} />
      )}
    </div>
  );
}
