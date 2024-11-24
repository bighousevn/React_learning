import { post2 } from "../../../modules/lib/httpHandle";



export const EditUser = (payload, nav) =>{

      post2(
       payload, 
        (data)=>
            {
                nav("/");
            }, 
        () =>
            {
                alert("Khong tim thay user!");
                
            }
        )
}