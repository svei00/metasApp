import React, { ChangeEvent, useState } from "react";
import styles from "./css/Credentials.module.css";

interface CredentialsProps {
  dispatch: Function;
  title: string;
  button: string;
}

function Credentials({ dispatch, title, button }: CredentialsProps ) {
  const [form, setForm] = useState({
    username: '',
    pwd: '',
  });
  
  const { username, pwd } = form; 

  const onChange = (event: ChangeEvent, prop: string) => {
    const value = (event.target as HTMLInputElement).value;
    setForm((state) => ({ ...state, [prop]: value}));
  };

  const Login = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch(form);
  };

  return (
    <div className={'card ' + styles.auth}>
      <h1 className={styles.head}>{title}</h1>
      <form className="p-4">
        <label className="label">
          Username
          <input
            className="input"
            placeholder="Write your email here."
            value={username}
            onChange={(e) => onChange(e, 'username')}
            />
        </label>
        <label className="label">
          Password
          <input
            className="input"
            placeholder="Type your Password here."
            type="password"
            value={pwd}
            onChange={(e) => onChange(e, 'pwd')}
          />
        </label>
      </form>
      <div className="buttons">
        <button className="button button--blue" onClick={(e) => Login(e)}>
          {button}
        </button>
      </div>
    </div>
  );

}

export default Credentials;