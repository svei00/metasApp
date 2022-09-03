import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../memory/Auth";

export function Login() {

  const[auth, dispatchAuth] = useContext(ContextAuth);
  
  if(!auth.auth) {
    return <Navigate to='/login' />;
  }
  return <Outlet></Outlet>;
}