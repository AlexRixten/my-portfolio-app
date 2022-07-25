import React from 'react'
import { EducationItem } from '../components/education/EducationItem'

import { workHistory, education } from '../data'

export const Education = () => {
  return (
    <div className='text-white '>
      <div className='text-center mb-5'>
        <h4 className='text-xl'>Education</h4>
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem aliquid laudantium earum, sed cupiditate, hic, ad nemo pariatur necessitatibus aut? Earum maiores eligendi dolor inventore sequi repudiandae quas quod?</p>
      </div>
      <div className=''>
        {
          education.map(item => (
            <EducationItem key={item.id} {...item}/>
          ))
        }
      </div>
    </div>
  )
}
