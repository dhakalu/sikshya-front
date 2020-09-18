import React, { useState, useEffect, createContext, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import io from 'socket.io-client'
import Message from './Message'
import Form from './Form'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  header: {
    margin: 10
  }
})

let socket

const initialContext = {
  handle: '',
  channel: ''
}

export const UserDataContext = createContext(initialContext)

const ChatMinimizedWindow = props => {
  const {
    onClose
  } = props

  const ENDPOINT = 'http://localhost:4000'

  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket = io(ENDPOINT, { reconnection: false, forceNew: true })
    console.log(socket)
    /*
    * When page loads create the socket connection
    */
    socket.emit('join', (error, { messages }) => {
      if (error) {
        console.error(error)
      }
      setMessages(messages)
    })

    return () => {
      // socket.emit('remove-disconnet', {})
      // socket.disconnect()
      // socket.off()
    }
  }, [ENDPOINT])

  useEffect(() => {
    someRef.current.scrollIntoView({ behavior: 'smooth' })
    socket.on('server-message', (message) => {
      setMessages([...(messages || []), message])
    })
  }, [messages])

  const sendMessage = (message, callback) => {
    socket.emit('send-message', { message })
  }

  const handleSend = (message = '') => {
    sendMessage(message)
  }

  const classes = useStyles()

  const someRef = useRef(null)

  return (
    <ChatWindowWrapper>
      <div className='content'>
        <div className='header'>
          <div className='room-title'>
            <Avatar />
            <Typography className={classes.header}>Sikshya Bot</Typography>
          </div>
          <div className='close'>
            <IconButton onClick={() => onClose()}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className='chat-messages'>
          {
            messages.map((message, i) => (<Message key={i} {...message} />))
          }
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={someRef}
          />
        </div>
        <Form onSendMessage={handleSend} />
      </div>
    </ChatWindowWrapper>
  )
}

ChatMinimizedWindow.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default ChatMinimizedWindow

const ChatWindowWrapper = styled.div`
    background: #fff;
    min-width: 400px;
    max-width: 400px;
    min-height: 500px;
    max-height: 500px;
    overflow: auto;
    z-index: 10;
    border-radius: 17px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0px 0px 1px 1px #ccc;
    .content {
      position: relative;
    }

    .content .header {
        height: 50px;
        padding: 10px;
        display: flex;
        box-shadow: 0 1px 2px #ccc;
        flex-direction: row;
        justify-content: space-between;
    }

    .content .room-title {
        display: flex;
        padding: 0 10px;
    }

    .content .chat-messages {
        overflow: auto;
        max-height: 370px;
        margin-top: 65px;
        padding: 7px 10px;
    }

    .content .input-wrapper{
        position: absolute;
        bottom: -345px;        
        width: 380px;
    }

    input {
        padding: 5px 20px;
        border: none;
        outline: none;
        border-radius: 17px;
        border-top: 1px solid #ccc;
        height: 34px;
        width: calc(100% - 20px);
    }
`
