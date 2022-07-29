import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleAboutMe, toggleSideBar } from '../../redux/slices/NavBar'
import style from '../../sass/components/NavBar.module.scss'
import Icons from '../svgIcon'

export const NavBar = () => {

    const {activeAboutMe, activeSideBar} = useSelector(state => state.navbar)
    const dispatch = useDispatch()


    console.log(activeAboutMe, activeSideBar)
    return (
        <header className={style.header}>
            <Icons
                name={!activeAboutMe ? 'buttonAboutMe' : 'close'}
                color='#ffffff'
                size='60'
                className={style.svg}
                onClick={() => dispatch(toggleAboutMe())}
            />
            <Icons
                name={!activeSideBar ? 'buttonSideBar' : 'close'}
                color='#ffffff'
                size='60'
                className={style.svg}
                onClick={() => dispatch(toggleSideBar())}
            />
        </header>
    )
}
