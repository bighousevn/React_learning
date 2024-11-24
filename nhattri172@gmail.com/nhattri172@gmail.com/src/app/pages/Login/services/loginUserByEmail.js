import { LOCAL_EMAIL } from "../../../../settings/localVar";
import { post1 } from "../../../modules/lib/httpHandle";
import { sLogin } from "../loginStore";


export const loginEmail = (email, nav) =>{
    let reqData = {
        email,
      };

      post1(
        "login/"
        ,reqData, 
        ()=>
            {
                localStorage.setItem(LOCAL_EMAIL, email);
                nav("/");
            }, 
        () =>
            {
                alert("Khong tim thay user!");
                sLogin.set(false);
            }
        )
}