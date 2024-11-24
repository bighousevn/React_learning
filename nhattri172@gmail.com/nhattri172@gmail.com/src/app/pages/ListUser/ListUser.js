import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../modules/lib/httpHandle";


export default function ListUser() {
  const [ls,setLs] = useState([]);


  useEffect(()=>{
    // get(
    //     (data) => {
    //       setLs(data);
    //       console.log(data);
    //     },
    //     () => {
    //       alert("ERROR");
    //     }
    //   )
    getUser().then((data) => {
      setLs(data);
    })
  },[])
  const nav = useNavigate();

  const handleEdit =(id) => () =>{
    nav(`/edit/${id}`)
  }
  const handleDelete =(id) => () =>{
    nav(`/delete/${id}`)
  }
  const handleAdd = () =>{
    nav('/add')
  }
  return (
    <div>
        <button onClick={handleAdd}> ADD </button>

        <table
        border={1}
        style={{
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
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
                  <button onClick={handleEdit(v.id)}>...</button>
                </td>
                <td>{v.email}</td>
                <td>{v.gender}</td>
                <td>{v.name}</td>
                <td>{v.address}</td>
                <td>{v.dob}</td>
                <td>{v.phone}</td>
                <td>{v.avatar}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
  