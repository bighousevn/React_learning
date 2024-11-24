import React from 'react'
import { DeleteUser } from './services/DeleteUser'
import { useNavigate, useParams } from 'react-router-dom'


export default function Delete() {
  const nav = useNavigate();
  const {id}=useParams();
  const handleDelete=() =>{
      DeleteUser(id,nav)
      console.log(id);
  }
  return (
    <div>
      <h1>Bạn có chắc muốn xoá không ?</h1>
      <button onClick={handleDelete}> Có </button>
    </div>
  )
}
