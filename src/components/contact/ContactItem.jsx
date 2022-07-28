import React from 'react'

import style from '../../sass/components/Contact.module.scss'
import Icons from '../svgIcon'



export const ContactItem = (props) => {
    return (
        <div className={style.contactItem}>
            <div className={style.topSide}>
                <Icons
                    name={props.svg}
                    color='#fff'
                    size='20'
                    className='p-[2px]'
                />
            </div>
            <ul className={style.list}>
                {
                    props.contact.map(item => (
                        <li key={item.id} className={style.listItem}>
                            <p className='text-[14px]'>{item.title}: </p>
                            <span className='text-[12px]'>{item.number}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
