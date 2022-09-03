import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../memory/Auth";
import { signin } from "../../../services/Queries";
import Credentials from "../../share/Credentials";

function Signin() {

  const navigate = useNavigate();

  const[auth, dispatchAuth] = useContext(ContextAuth);
  const dispatch = async (form) => {
    dispatchAuth({ type: 'set', token: 'token' });
    navigate('/list');
  }

  return <Credentials
    dispatch = {dispatch}
    title = "Sign-in"
    button = "Login"
  ></Credentials>

}

export default Signin;