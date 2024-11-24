import { post2 } from "../../../modules/lib/httpHandle";
import { sLogin } from "../loginStore";


export const AddUser = (payload, nav) =>{

      post2(
       payload, 
        (data)=>
            {
                nav("/");
            }, 
        () =>
            {
                alert("Khong them duoc user!");
                sLogin.set(false);
            }
        )
}