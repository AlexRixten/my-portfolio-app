import React from 'react'
import style from '../sass/components/Portfolios.module.scss'
import { Tabs } from '../components/Tabs/Tabs';

import { projects } from '../data';

const items = [
  { title: 'All Categories', content: 'London is the capital city of England.' },
  { title: 'Web Template', content: 'Paris is the capital of France.' },
  { title: 'Logo', content: 'Tokyo is the capital of Japan.' },
  { title: 'Ui Design', content: 'Tokyo is the capital of Japan.' },
  { title: 'Branding', content: 'Tokyo is the capital of Japan.' },
];

export const Portfolios = () => {

  return (
    <div className={style.container}>
      <h2 className={style.title}>Portfolios</h2>
      <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsam harum minus atque quod illo dolorem aperiam exercitationem vero impedit corporis explicabo nostrum dolor culpa aut ab architecto, dicta qui!</p>

      < Tabs items={projects}/>
    </div>
  )
}
