import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import chatbotImage from '../../images/chatbot.jpg'
import { useHistory } from 'react-router-dom';

const ChatBotPreview = memo((props) => {
  const chatBotCommands = [{
    name: 'login',
    path: 'login'
  },
  { name: 'Show me schools around me', path: '/browse' },
  { name: 'show my courses', path: '/dashboard/courses' },
  { name: 'show my assignments' },
  { name: 'show my grades' },
  { name: 'schedule an event' },
  { name: 'pay bills' }
  ]

  const history = useHistory()

  const handleCommandClick = (path) => {
    if (!path) return
    history.push(path)
  }

  return (
    <div class='chat-bot-about-container'>
      <div className='chat-bot-about'>
        <Typography component='h5' variant='h4'>
                  Introducting instant bot
        </Typography>
        <Typography component='h5' variant='h5' className='margin-vertical-30'>
                  Give commands and get results in one window
        </Typography>
        <div>
          <div>Try commands like: </div>
          {
            chatBotCommands.map((command, i) => (
              <button className='sample-commands' key={i} onClick={() => handleCommandClick(command.path)}>{command.name}</button>
            ))
          }
        </div>
      </div>
      <div>
        <img src={chatbotImage} />
      </div>
    </div>
  )
})

ChatBotPreview.propTypes = {

}

export default ChatBotPreview
