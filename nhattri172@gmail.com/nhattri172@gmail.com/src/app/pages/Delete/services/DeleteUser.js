
import { Delete } from "../../../modules/lib/httpHandle";



export const DeleteUser = (id, nav) =>{

      Delete(
       id, 
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