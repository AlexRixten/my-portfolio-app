import React from 'react'
import { ContactItem } from '../components/contact/ContactItem'

import style from '../sass/components/Contact.module.scss'

export const Contact = () => {
  return (
    <div className={style.contact}>
      Contact Information
      <ContactItem />
    </div>
  )
}
