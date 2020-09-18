import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { Avatar, TextField } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import PaddingAdder from '../../common/PaddingAdder.styles'

const ProfilePic = styled(Avatar)({
  marginRight: 10
})


const ReplyForm = props => {
  const {
    content = ''
  } = props

  return (
    <PaddingAdder>
      <Box display='flex'>
        <ProfilePic alt='Upen' src='' />
        <TextField
          multiline
          rowsMax={10}
          variant='outlined'
          fullWidth placeholder='Write a comment..' 
        />
      </Box>
    </PaddingAdder>
  )
}

ReplyForm.propTypes = {
  content: PropTypes.string.isRequired
}

export default ReplyForm
