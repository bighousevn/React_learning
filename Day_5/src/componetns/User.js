import React from 'react'
import { sUser } from '../store'

const ssAge = sUser.slice(n => n.age)

export default function User(props) {
  const handleUP=() =>{
    /*if(sUser.value){
      if(sUser.value.age === 19){
        sUser.resume();
      }
    }*/
    sUser.set( n => n.value.age+=1 ) 
  }
  return (
    <div>
      <button onClick={handleUP}> Up age</button>   
      {ssAge.html}
      <br/>
      <ssAge.Wrap>{n=>n}</ssAge.Wrap>
    </div>
  )
}

