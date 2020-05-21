import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = props => {
  const {
    onSendMessage = () => false
  } = props

  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    setMessage(value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSendMessage(message)
      setMessage('')
    }
  }
  return (
    <div className='input-wrapper'>
      <input
        value={message}
        onChange={handleChange}
        placeholder='Type your message here'
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}

Form.propTypes = {
  onSendMessage: PropTypes.func.isRequired
}

export default Form
