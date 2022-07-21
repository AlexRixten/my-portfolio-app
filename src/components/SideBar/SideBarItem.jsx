import React from 'react'
import { NavLink } from 'react-router-dom'
import Icons from '../../components/svgIcon';
import style from '../../sass/components/Sidebar.module.scss'


export const SideBarItem = (props) => {
    let activeStyle = {
        background: "red",
      };
    return (
        <li 
            className="group"
        >
            <NavLink 
                to={props.listItem.link}
                className={({ isActive }) =>isActive ? style.Activelink : style.link }
            >
                <Icons
                    name={props.listItem.svg}
                    color='#3A3B3C'
                    size='20'
                    className='group-hover:fill-white p-[2px]'
                />
            </NavLink>
        </li>
    )
}
