import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { gql } from 'apollo-boost'
import { graphql} from 'react-apollo'
import Contact from './Contact'

const getContactsQuery = gql`
  {
    contacts {
      firstName
    },
    books {
      name,
      genre
    }
  }
`

const ContactList = (props) => {
  console.log(props)
  const dispatch = useDispatch()
  const contactState = useSelector((state) => state.contacts)
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

export default graphql(getContactsQuery)(ContactList)
