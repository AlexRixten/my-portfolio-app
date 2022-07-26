import React from 'react'

import style from '../../sass/components/Education.module.scss'

export const EducationItem = (props) => {
  return (
    <div className={style.educationItem}>
        <div className={style.leftSide}>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.description}>
                {props.position}: 
                <span className={style.period}>{props.period}</span>
            </p>
        </div>
        <div className={style.rightSide}>
            <h4 className={style.title}>{props.name}</h4>
            <p className={style.mainDescription}>
                {props.description}
            </p>
        </div>
    </div>
  )
}
