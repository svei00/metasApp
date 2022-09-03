import { Navigate, Outlet } from "react-router-dom";

export function Login() {
  
  if(false) {
    return <Navigate to='/login' />;
  }
  return <Outlet></Outlet>;
}