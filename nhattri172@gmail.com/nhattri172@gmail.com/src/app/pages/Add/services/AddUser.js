import { post2 } from "../../../modules/lib/httpHandle";



export const AddUser = (payload, nav) =>{

      post2(
       payload, 
        ()=>
            {
                nav("/");
            }, 
        () =>
            {
                alert("Khong them duoc user!");
           
            }
        )
}