import React from 'react'
import { Link } from 'react-router-dom'
import me from '../../assets/anime.jpeg'
import { useSelector } from 'react-redux'
import style from '../../sass/components/AboutMe.module.scss'
import Icons from '../svgIcon'
import { language, socialList, skills, author, extraSkills } from '../../data'
import { AboutMeProgressBarItem } from './AboutMeProgressBarItem'


export const AboutMe = () => {

  const { activeAboutMe } = useSelector(state => state.navbar)

  return (
    <aside className={`${style.aside} ${activeAboutMe ? '-lg:flex fixed z-50 w-[300px]' : '-lg:hidden relative w-[100%]'}`} aria-label="Sidebar">
      <div className={style.container}>
        <div className='static top-10'>
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
        </div>
        <div className={style.divider}></div>
        <div className={style.content}>
          <ul className={style.authorWrapper}>
            {
              author.map(item => (
                <li key={item.id} className={style.authorItem}>
                  <p className={style.authorTxt}>{item.title}:</p>
                  <span>{item.desc}</span>
                </li>
              ))
            }
          </ul>
          <div className={style.divider}></div>
          <div className={style.block}>
            <h5 className={style.title}>Language</h5>
            {
              language.map(item => (
                <AboutMeProgressBarItem key={item.id} {...item} />
              ))
            }
          </div>
          <div className={style.divider}></div>
          <div className={style.block}>
            <h5 className={style.title}>Skills</h5>
            {
              skills.map(item => (
                <AboutMeProgressBarItem key={item.id} {...item} />
              ))
            }
          </div>
          <div className={style.divider}></div>
          <div className={style.block}>
            <h5 className={style.title}>Extra Skills</h5>
            {
              extraSkills.map(item => (
                <div key={item.id} className={style.extraItem}>
                  <Icons
                    name="extraskill"
                    size='16'
                    className="mr-2"
                  />
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          <div className={style.divider}></div>
        </div>
        <div className={style.CV}>
          <button type="button">
            DOWNLOAD CV
            <Icons
              name="download"
              color="#ffffff"
              size='16'
              className="mr-2"
            />
          </button>
        </div>
      </div>
    </aside>
  )
}
