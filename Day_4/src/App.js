import React, { useEffect, useRef, useState } from "react";
import { addUser, deleteUser, getUser, updateUser } from "./service";
// CTRL+D => lay ky tu giong nhau

export default function App() {
  const [ls, setLs] = useState([]);
  const refInput = useRef({});
  const refDebound = useRef(0);

  useEffect(() => {
    getUser().then((data) => {
      setLs(data);
    });
  }, []);

  const handleChange = ({ target }) => {
    refInput.current[target.name] = target.value;
  };

  const handleAdd = () => {
    addUser(refInput.current).then((data) => {
      setLs(data);
    });
  };

  const handleUpdate = () => {
    updateUser(refInput.current).then((data) => {
      setLs(data);
    });
  };

  const handleDelete = (id) => () => {
    deleteUser(id).then((data) => {
      setLs(data);
    });
  };

  const filterName = ({ target }) => {
    clearTimeout(refDebound.current);

    refDebound.current = setTimeout(() => {
      getUser(target.value).then((data) => {
        setLs(data);
      });
    }, 500);
  };

  return (
    <div>
      <h1>User Management</h1>
      <label>id</label>
      <input name="id" onChange={handleChange} />
      <br />
      <label>email</label>
      <input name="email" onChange={handleChange} />
      <br />
      <label>gender</label>
      <input name="gender" onChange={handleChange} />
      <br />
      <label>name</label>
      <input name="name" onChange={handleChange} />
      <br />
      <label>address</label>
      <input name="address" onChange={handleChange} />
      <br />
      <label>dob</label>
      <input name="dob" onChange={handleChange} />
      <br />
      <label>phone</label>
      <input name="phone" onChange={handleChange} />
      <br />
      <label>avatar</label>
      <input name="avatar" onChange={handleChange} />
      <br />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Edit</button>
      <br />
      <label>Filter</label>
      <input onChange={filterName} />
      <table
        border={1}
        style={{
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>-</th>
            <th>id</th>
            <th>email</th>
            <th>gender</th>
            <th>name</th>
            <th>address</th>
            <th>dob</th>
            <th>phone</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {ls.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>
                  <button onClick={handleDelete(v.id)}>x</button>
                </td>
                <td>{v.id}</td>
                <td>{v.email}</td>
                <td>{v.gender}</td>
                <td>{v.name}</td>
                <td>{v.address}</td>
                <td>{v.dob}</td>
                <td>{v.phone}</td>
                <td>
                  <img src={v.avatar} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// SHIFT + ALT + CLICK => Chọn nhiều dòng
// CTRL + SHIFT + Arrow => chọn 1 vùng dữ liệu
