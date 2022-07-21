import React from 'react'
import { NavLink } from 'react-router-dom'
import Icons from '../../components/svgIcon';
import style from '../../sass/components/Sidebar.module.scss'


export const SideBarItem = (props) => {

    return (
        <li className="relative flex flex-col group w-[100%]" >
            <NavLink
                to={props.listItem.link}
                className={({ isActive }) => isActive ? style.Activelink : style.link}
            >
                <Icons
                    name={props.listItem.svg}
                    color='#3A3B3C'
                    size='20'
                    className='group-hover:fill-white p-[2px]'
                />
            </NavLink>
            <div className="absolute bottom-[45px] w-[100%] left-[50%] translate-x-[-50%] flex-col items-center hidden group-hover:flex">
                <span className="relative z-10 p-2 text-md leading-none text-mainDarkColor whitespace-no-wrap bg-white shadow-lg">{props.listItem.tooltip}</span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-white"></div>
            </div>
        </li>
    )
}
