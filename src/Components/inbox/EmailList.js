import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  item: {
    '&:hover': {
      background: '#ccc',
      cursor: 'pointer'
    }
  }
}))

const EmailList = ({ emails = [], isDetailOpen, onSelectEmail }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {
        emails.map((email, i) => (
          <div onClick={() => onSelectEmail(email)}>
            <ListItem
              className={classes.item}
              alignItems='flex-start'
              key={i}
            >
              <ListItemAvatar>
                <Avatar alt={email.from} src='/static/images/avatar/1.jpg' />
              </ListItemAvatar>
              <ListItemText
                primary={`${email.from} - ${email.subject}` || 'Some Subject'}
                secondary={
                  <>
                    <Typography
                      component='div'
                      variant='body2'
                      color='textSecondary'
                    >
                      {email.receivedAt}
                    </Typography>
                    <Typography
                      component='div'
                      variant='body2'
                      color='textPrimary'
                    >
                      {email.body}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider light />

          </div>
        ))
      }
    </List>
  )
}

export default EmailList
