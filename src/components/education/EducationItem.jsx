import React from 'react'

export const EducationItem = (props) => {
  return (
    <div className='flex -lg:flex-col mb-5 border-b-2 border-solid border-white last-of-type:border-none last-of-type:mb-0'>
        <div className='flex-[3]'>
            <h4 className='text-xl font-bold mb-4'>{props.title}</h4>
            <p className='flex -2xl:flex-col items-center -2xl:items-start mb-5'>
                {props.position}: 
                <span className='ml-2 -2xl:ml-0 bg-orangeColor p-2 text-xs w-fit'>{props.period}</span>
            </p>
        </div>
        <div className='flex-[6]'>
            <h4 className='text-xl font-bold mb-4'>{props.name}</h4>
            <p className=''>
                {props.description}
            </p>
        </div>
    </div>
  )
}
