import React from 'react'
import Fab from '@material-ui/core/Fab'
import MessageIcon from '@material-ui/icons/Message'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}))

const StartChatActionButton = (props) => {
  const classes = useStyles()

  const {
    onStartConversation = () => false
  } = props

  return (
    <div className={classes.root} onClick={onStartConversation}>
      <Fab variant='extended'>
        <MessageIcon className={classes.extendedIcon} />
        Ask Me Anything
      </Fab>
    </div>
  )
}

export default StartChatActionButton
