import React from 'react'
import style from '../../sass/components/NavBar.module.scss'
import Icons from '../svgIcon'

export const NavBar = () => {
    return (
        <header className={style.header}>
            <Icons
                name="buttonAboutMe"
                color='#ffffff'
                size='60'
                className={style.svg}
            />
            <Icons
                name="buttonSideBar"
                color='#ffffff'
                size='60'
                className={style.svg}
            />
        </header>
    )
}
