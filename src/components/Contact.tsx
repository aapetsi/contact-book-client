import React, {FunctionComponent} from 'react'

interface ContactProps {
  id: string
}

const Contact: FunctionComponent<ContactProps> = (props) => {
  return (
    <div>
      <h2>Contact component</h2>
    </div>
  )
}

export default Contact
