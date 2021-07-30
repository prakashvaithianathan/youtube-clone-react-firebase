import React from 'react'
import style from './List.module.css'
import cs from 'classnames'

const List = ({image,name}) => {
    
    
    return (

  
        <div className={cs(style.container, style.className)} >
            
            <div className={style.item}>
                  <span className={style.image}>{image}</span>
                <p className={style.name}>{name}</p>
            </div>
        </div>
       
       
    )
}

export default List
