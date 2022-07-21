import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../components/svgIcon';
import style from '../../sass/components/Sidebar.module.scss'
import { sideBarList } from '../../data/index'
import { SideBarItem } from './SideBarItem';



export const SideBar = () => {

    console.log(sideBarList)
    return (
        <aside className={style.aside} aria-label="Sidebar">
            <div className={style.container}>
                <ul className={style.list}>
                    {sideBarList.map(listItem => (
                        <SideBarItem key={listItem.id} listItem={listItem} />
                    ))}
                </ul>
            </div>
        </aside>
    )
}
