import React from 'react'
import style from '../../sass/components/AboutMe.module.scss'


export const AboutMeProgressBarItem = (props) => {
    return (
        <div className={style.langItem}>
            <div className={style.langInfo}>
                <p className={style.langTxt}>{props.title}</p>
                <span>{props.percent}%</span>
            </div>
            <div className={style.progressBar}>
                <div className={style.progress} style={{ width: `${props.percent}%` }}></div>
            </div>
        </div>
    )
}
