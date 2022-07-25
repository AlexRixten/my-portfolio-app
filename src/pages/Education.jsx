import React from 'react'
import { EducationItem } from '../components/education/EducationItem'

import { workHistory, education } from '../data'

export const Education = () => {
  return (
    <div className='text-white '>
      <div className='text-center mb-5'>
        <h4 className='text-3xl font-bold mt-10'>Education</h4>
        <p className='text-xs mt-4 max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem aliquid laudantium earum, sed cupiditate, hic, ad nemo pariatur necessitatibus aut? Earum maiores eligendi dolor inventore sequi repudiandae quas quod?</p>
      </div>
      <div className='p-5 bg-[#242526]'>
        {
          education.map(item => (
            <EducationItem key={item.id} {...item}/>
          ))
        }
      </div>
      <div className='text-center mb-5'>
        <h4 className='text-3xl font-bold mt-10'>Work history</h4>
        <p className='text-xs mt-4 max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem aliquid laudantium earum, sed cupiditate, hic, ad nemo pariatur necessitatibus aut? Earum maiores eligendi dolor inventore sequi repudiandae quas quod?</p>
      </div>
      <div className='p-5 bg-[#242526]'>
        {
          workHistory.map(item => (
            <EducationItem key={item.id} {...item}/>
          ))
        }
      </div>
    </div>
  )
}
