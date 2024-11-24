import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { post2 } from '../../modules/lib/httpHandle';
import { AddUser } from './services/AddUser';


export default function Add() {


  const refInput = useRef({});
  const nav = useNavigate();

  const handleChange =({target}) =>{
    refInput.current[target.name] = target.value;
  }

  const handleSubmit =() => {
    console.log(refInput.current)
      AddUser(refInput.current,nav)
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
