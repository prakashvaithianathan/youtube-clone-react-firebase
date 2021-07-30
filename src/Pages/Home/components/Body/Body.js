import React from "react";
import style from "./Body.module.css";
import data from "./data.json";
import Item from "./Item/Item";
import {Grid} from '@material-ui/core'

const Body = () => {
  
  return (
    <div className={style.container}>
      <div className={style.topList}>
        <p className={style.all}>All</p>
        <p>Live</p>
        <p>Computer programming</p>
        <p>Sales</p>
        <p>CSS</p>
        <p>Gaming</p>
        <p>PC building</p>
      </div>
      <Grid xs={12} container item justifyContent='center' className={style.grid}>
        {data.map((item, index) => {
          return (
            <Item
            key={index}
              name={item.name}
              channelName={item.channelName}
              duration={item.duration}
              image={item.image}
              avatar={item.avatar}
              views={item.views}
              time={item.time}
            ></Item>
          );
        })}
      </Grid>
    </div>
  );
};

export default Body;
