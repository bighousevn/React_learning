
import { Delete } from "../../../modules/lib/httpHandle";
import { sLogin } from "../loginStore";


export const DeleteUser = (payload, nav) =>{

      Delete(
       payload.id, 
        (data)=>
            {
                nav("/");
            }, 
        () =>
            {
                alert("Khong tim thay user!");
                sLogin.set(false);
            }
        )
}