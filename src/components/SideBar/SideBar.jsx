import React from 'react'
import { useSelector } from 'react-redux'
import style from '../../sass/components/Sidebar.module.scss'
import { sideBarList } from '../../data/index'
import { SideBarItem } from './SideBarItem';



export const SideBar = () => {

  const { activeSideBar } = useSelector(state => state.navbar)


    return (
        <aside className={`${style.aside} ${activeSideBar ? '-lg:flex fixed z-50 w-[160px] right-0' : '-lg:hidden relative w-[100%]'}`} aria-label="Sidebar">
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
