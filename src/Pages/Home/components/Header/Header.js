import React from "react";
import style from "./Header.module.css";
import {
  Menu,
  Search,
  Mic,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import logo from "../../../../images/youtube.png";
import {useSelector} from 'react-redux'

const Header = () => {
    const {user }= useSelector(state => state.user)
  return (
    <div className={style.container}>
        <div className={style.left}>
        <Menu></Menu>
      <img src={logo} alt="logo" className={style.logo} />
        </div>
      <div className={style.center}> 
      <div className={style.search}>
        <input type="text" />
        <Search className={style.lens}></Search>
      </div>
      <Mic></Mic>
      </div>
      <div className={style.right}>
          <VideoCall ></VideoCall>
      <Apps></Apps>
      <Notifications></Notifications>
      <Avatar src={user.photoURL} className={style.avatar}></Avatar>
      </div>
     
    </div>
  );
};

export default Header;
