import {  Update } from "../../../modules/lib/httpHandle";

export const EditUser = (id, payload, nav) =>{

      Update(
       id,
       payload, 
        ()=>
            {
                nav("/");
            }, 
        () =>
            {
                alert("Khong tim thay user!");
            }
        )
}