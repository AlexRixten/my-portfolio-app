import React from 'react'

export const EducationItem = (props) => {
  return (
    <div className='flex -lg:flex-col p-5 bg-[#242526]'>
        <div className='mb-2'>
            <h4 className=''>{props.title}</h4>
            <p className=''>
                {props.position}: 
                <span className='ml-2 bg-orangeColor p-1 text-xs'>{props.period}</span>
            </p>
        </div>
        <div className=''>
            <h4 className=''>{props.name}</h4>
            <p className=''>
                {props.description}
            </p>
        </div>
    </div>
  )
}
