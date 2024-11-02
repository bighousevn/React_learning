import React, { useEffect, useState } from "react";

// 1. Lay thong tin user thi giao dien moi hinh thanh
// 2. Remove user đầu tiên
// Tham khao : https://nglearns.dev
export default function App() {
  const [ls, setLs] = useState([]);
  useEffect(() => {
    // ComponentDidMount
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLs(data.results);
      });
  }, []);

  const remove = () => {
    setLs(ls.slice(1, ls.length));
  };

  if (ls.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div>
        <button onClick={remove}>Remove</button>
      </div>
      {ls.map(({ name }, i) => {
        return (
          <p key={i}>
            {name.title}. {name.first} {name.last}
          </p>
        );
      })}
    </div>
  );
}
