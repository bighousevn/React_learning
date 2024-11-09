import React, { useEffect } from "react";
import{sUser} from"./store";
import User from "./componetns/User";

export default function App() {
  console.log("App")

  //const age= sUser.use( n => n.age);
  sUser.watch( n=>  {
    if (n.age>19)
    {
      console.log("old")
    }
  })

  useEffect(() => {
    //sUser.stop();
  },[])
  return (
    <div>
      {/*<p>{age}</p>*/}
      <sUser.Wrap>
        {(user) => (
          <>
          <p>Name:{user.name}</p>
          <p>Age:{user.age}</p>
          </>
        )}
      </sUser.Wrap>
      <User/>
      <sUser.DevTool name="User" />
    </div>
  )
}