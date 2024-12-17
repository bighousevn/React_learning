import React from 'react'

export default function Delete() {
  const handleDelete=() =>{
      Delete()
  }
  return (
    <div>
      <h1>Bạn có chắc muốn xoá không ?</h1>
      <button onClick={handleDelete}> Có </button>
    </div>
  )
}
