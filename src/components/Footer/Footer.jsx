import React from 'react'
import Icons from '../svgIcon'
import style from '../../sass/components/Footer.module.scss'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <Icons
                name="copr"
                color="#ffffff"
                size='15'
                className="mr-2"
            />
             2022 All Rights Reserved.AlexRixten
        </div>
    )
}
