import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../components/svgIcon';
import style from './SideBar.module.css'
import { sideBarList } from '../../data/index'



export const SideBar = () => {
    console.log(sideBarList)
    return (
        <aside className={style.aside} aria-label="Sidebar">
            <div className={style.container}>
                <ul className={style.list}>
                    {sideBarList.map(listItem => (
                        <li key={listItem.id}>
                            <Link to="#" className={style.link}>
                                <Icons
                                    name={listItem.svg}
                                    color='#fff'
                                    size='32'
                                    className={style.svg}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                <button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip hover</button>
                <div id="tooltip-hover" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <button data-tooltip-target="tooltip-click" data-tooltip-trigger="click" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip click</button>
                <div id="tooltip-click" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </aside>
    )
}
