import React from 'react'
import style from './Item.module.css'
import main from '../../../../../images/youtube.png'
import {Avatar} from '@material-ui/core'
import {FiberManualRecord} from '@material-ui/icons'

const Item = ({image,avatar,name,channelName,duration,views,time}) => {
    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
            <img src={image} className={style.main} />
            <p className={style.time}>{time}</p>
            </div>
            
            <div className={style.firstLine}>
                <Avatar src={avatar}></Avatar>
                <p>{name}</p>
            </div>
            <div className={style.date}>
                  <p>{channelName}</p>
                  <div className={style.lastLine}>
                     <p>{views}</p>
                     <FiberManualRecord className={style.dot}></FiberManualRecord>
                     <p>{duration}</p>
                  </div>
            </div>
        </div>
    )
}

export default Item
