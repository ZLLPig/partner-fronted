import myAxios from "../plugins/axios.ts";
import {setCurrentUserStatus} from "../status/user.ts";

export const getCurrentUser = async () => {
   const res= await myAxios.get("/user/current");
   if(res.data){
      setCurrentUserStatus(res.data);
      return res.data;
   }
   return null;
}
