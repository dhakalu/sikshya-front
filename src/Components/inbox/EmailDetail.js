import React from 'react'
import { Box, Typography, IconButton, ListItemAvatar } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import Avatar from '@material-ui/core/Avatar'
import renderHTML from 'react-render-html'

const EmailDetail = ({ selectedEmail, onClose }) => {
  const { from, to, subject, body, receivedAt } = selectedEmail
  return (
    <div style={{ position: 'relative', width: '60%' }}>
      <Box
        display='flex'
        flex={1}
        justifyContent='space-between'
        style={{ padding: 10 }}
      >
        <Typography component='h3' variant='h4'>{subject}</Typography>
        <IconButton
          onClick={onClose}
          style={{ padding: 0 }}
        >
          <Close />
        </IconButton>
      </Box>
      <EmailMetaData
        from={from}
        receivedAt={receivedAt}
        to={to}
      />
      <div style={{ marginTop: 40, padding: '0 10px' }}>
        {renderHTML(body || '')}
      </div>

    </div>
  )
}

const EmailMetaData = ({ to, from, receivedAt }) => {
  return (
    <div>
      <Box
        padding='0 10px'
        display='flex'
      >
        <ListItemAvatar>
          <Avatar alt={from} />
        </ListItemAvatar>
        <div>
          {from}
          <Typography color='textSecondary'>
            {receivedAt}
          </Typography>
          {to && (
            <Typography color='textSecondary'>
            to: {to}
            </Typography>
          )}
        </div>
      </Box>
    </div>
  )
}

export default EmailDetail
