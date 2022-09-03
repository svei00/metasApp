import React from "react";
import { signup } from "../../../services/Queries";
import Credentials from "../../share/Credentials";

function Signup() {
  const dispatch = async (form) => {

  };

  return <Credentials
    dispatch = {dispatch}
    title = "Register with us. Its Free!!"
    button = "Sign-up"
  ></Credentials>

}

export default Signup;