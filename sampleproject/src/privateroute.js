
import { Navigate } from "react-router-dom";

export default function PrivateRoute( {children} )
{

    let flag;
let tok=sessionStorage.getItem("mytoken");

if (tok!=null)
flag=true;
else
flag=false;
 
return flag ? children : <Navigate to="/login" /> ; 

}