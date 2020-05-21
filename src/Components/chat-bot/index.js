import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import StartChatActionButton from './StartChatActionButton'
import ChatMinimizedWindow from './ChatMinimizedWindow'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      position: 'fixed',
      bottom: 20,
      right: 20,
      margin: theme.spacing(1)
    }
  }
}))

const SikshyaBot = () => {
  const classes = useStyles()

  const [isChatting, setChatting] = useState(false)

  const handleClick = () => {
    setChatting(true)
  }

  return (
    <div className={classes.root}>
      <StartChatActionButton onStartConversation={handleClick} />
      {isChatting && <ChatMinimizedWindow onClose={() => setChatting(false)} />}
    </div>
  )
}

export default SikshyaBot
