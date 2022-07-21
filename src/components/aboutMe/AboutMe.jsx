import React from 'react'
import { Link } from 'react-router-dom'

import me from '../../assets/anime.jpeg'

import style from '../../sass/components/AboutMe.module.scss'
import Icons from '../svgIcon'
import { socialList } from '../../data'


export const AboutMe = () => {
  return (
    <aside className={style.aside} aria-label="Sidebar">
      <div className={style.container}>
        <div className='absolute top-10'>
          <div className={style.Me}>
            <div>
              <img className={style.Img} src={me} alt="avatar" />
            </div>
            <h4 className={style.authorName}>Alex Rixten</h4>
            <h5 className={style.authorJob}>Front End Developer</h5>
          </div>
          <div className={style.socialWrapper}>
            <ul className="group flex gap-2 mt-5">
              {
                socialList.map(social =>
                  <li key={social.id}>
                    <Link to="/" className={`${style.link} group`}>
                      <Icons
                        name={social.svg}
                        color='#ffffff'
                        size='12'
                        className={style.svg}
                      />
                    </Link>
                  </li>
                )
              }

            </ul>
          </div>
          <div className={style.divider}></div>
        </div>
      </div>
    </aside>
  )
}
