import React from 'react'
import { ContactItem } from '../components/contact/ContactItem'

import style from '../sass/components/Contact.module.scss'
import { contact } from '../data'

export const Contact = () => {
  return (
    <div className={style.contact}>
      <div className='flex mt-4'>
        <div className='flex-[1]'>
          <h3 className='text-[32px]'>Contact Information</h3>
          {
            contact.map(item => (
              <ContactItem key={item.id} {...item} />
            ))
          }
        </div>
        <div className='flex-[1]'>
        </div>
      </div>
    </div>
  )
}
