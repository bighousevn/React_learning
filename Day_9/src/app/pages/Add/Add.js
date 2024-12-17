import React, { useRef, useState } from 'react'
import { AddUser } from './services/AddUser';
import { useNavigate } from 'react-router-dom';


export default function Add() {

  const [ls,setLs] = useState([]);
  const refInput = useRef({});
  const nav = useNavigate();

  const handleChange =({target}) =>{
    refInput.current[target.name] = target.value;
  }

  const handleSubmit =() => {
      AddUser(refInput.current,nav)
      .then((data) => {
        setLs(data);
    });
  }

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
       <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}
