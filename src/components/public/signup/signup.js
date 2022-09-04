import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../memory/Auth";
import { signup } from "../../../services/Auth";
import Credentials from "../../share/Credentials";

function Signup() {

  const navigate = useNavigate();

  const [auth, dispatchAuth] = useContext(ContextAuth);
  const dispatch = async (form) => {
    const token = await signup(form);
    dispatchAuth({ type: 'set', token });
    navigate('/create');
  };

  return <Credentials
    dispatch = {dispatch}
    title = "Register with us. Its Free!!"
    button = "Sign-up"
  ></Credentials>

}

export default Signup;