import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Contact from './Contact'

const ContactList = () => {
  const dispatch = useDispatch()
  const contactState = useSelector((state: any) => state.contacts)
  useEffect(() => {
    console.log('mounted')
  })
  return (
    <div>
      <h2>Contact list component</h2>
     
      <Contact id="1" />
      <Contact id="2" />
      <Contact id="3" />
    </div>
  )
}

export default ContactList
