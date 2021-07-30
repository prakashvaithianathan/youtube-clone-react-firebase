import React from "react";
import style from "./Login.module.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/firebase";
import { addUser } from "../../Store/Action/User";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => dispatch(addUser(result)))
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.container}>
      <img
        className={style.logo}
        src="https://whitbymuseum.files.wordpress.com/2021/03/youtube-logo.jpg"
        alt="logo"
      />
      <Button className={style.btn} onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
