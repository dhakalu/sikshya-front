import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Message = props => {
  const {
    text,
    handle
  } = props

  return (
    <MessageWrapper user={handle === 'user'}>
      <div className='message-container'>
        {text}
      </div>
    </MessageWrapper>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired
}

export default Message

// TODO Update Colors
const MessageWrapper = styled.div`
   display: flex;
   flex-direction: ${props => !props.user ? 'row' : 'row-reverse'};
  .message-container {
    padding: 7px;
    background: ${props => !props.user ? '#ccc' : 'blue'};
    color: ${props => !props.user ? '#404040' : 'white'};
    border-radius: 8px;
    max-width: 80%;
    margin: 2px;
    padding: 7px;
  }
`
