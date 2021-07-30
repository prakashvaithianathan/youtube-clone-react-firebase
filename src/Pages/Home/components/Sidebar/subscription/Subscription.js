import React from 'react'
import style from './Subscription.module.css'
import {Avatar} from '@material-ui/core'
import cs from 'classnames'

export const Subscription = ({image,name,dot}) => {
    return (
        <div className={cs(style.container)}>
            <Avatar src={image} className={style.avatar}></Avatar>  
            <p>{name}</p>
            <p className={style.dot}>{dot}</p>
        </div>
    )
}

// export default Subscription
