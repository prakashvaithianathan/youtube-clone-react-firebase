import React from "react";
import style from "./Home.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";
import Login from "../Login/Login";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {!user ? (
        <Login></Login>
      ) : (
        <div className={style.main}>
          <Header></Header>
          <div className={style.sideBar}>
            <Sidebar></Sidebar>
          </div>
           <div  className={style.body}>
           <Body></Body>
           </div>
          
        </div>
      )}
    </div>
  );
};

export default Home;
