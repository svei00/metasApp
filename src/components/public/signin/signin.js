import React from "react";
import { signin } from "../../../services/Queries";
import Credentials from "../../share/Credentials";

function Signin() {
  const dispatch = async (form) => {

  };

  return <Credentials
    dispatch = {dispatch}
    title = "Sign-in"
    button = "Login"
  ></Credentials>

}

export default Signin;