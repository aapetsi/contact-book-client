import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { gql } from 'apollo-boost'
import { graphql} from 'react-apollo'
import Contact from './Contact'
import {getContactsQuery} from '../queries/queries'


const ContactList = (props) => {
  const dispatch = useDispatch()
  const contactState = useSelector((state) => state.contacts)
  
  const renderContacts = () => {
    let contacts = props.data.contacts
    if (contacts) {
      contacts.map(contact => (<Contact key={contact.id} id={contact.id} />))
    }
  }
  
  useEffect(() => {
    console.log('mounted')
  })
  return (
    <div>
      <h2>Contacts</h2>
      {props.data.loading && <p>Loading contacts ...</p>}
      {renderContacts()}
    </div>
  )
}

export default graphql(getContactsQuery)(ContactList)
