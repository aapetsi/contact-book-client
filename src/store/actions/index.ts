import * as Actions from '../action-types'
import {Dispatch} from 'redux'

interface ContactPayload {
  firstName: string,
  lastName: string,
  twitter?: string,
  phone: number,
  phone2?: number,
  phone3?: number,
  email: string,
  email2?: string,
  email3?: string
}

export const addContact = (contact: ContactPayload) => (dispatch: Dispatch) => {
  dispatch({
    type: Actions.ADD_CONTACT,
    payload: contact
  })
}