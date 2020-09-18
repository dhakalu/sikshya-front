import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Avatar } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import PaddingAdder from '../../common/PaddingAdder.styles'
import WhiteSpace from '../../common/WhiteSpace.styles'

const ReplyOption = styled(Typography)({
  fontSize: '0.8em',
  padding: '10px 10px 0 0',
  '&:hover': {
    cursor: 'pointer'
  }
})

const ProfilePic = styled(Avatar)({
  marginRight: 10
})

const Reply = props => {
  const {
    content = '',
    postedBy
  } = props

  return (
    <PaddingAdder>
      <Box display='flex'>
        <ProfilePic alt='Upen' />
        <div>
          <div>
            {
              postedBy
            }
          </div>
          <WhiteSpace height={10} />
          <Typography variant='body2' color='textSecondary' component='p'>
            {
              content
            }
          </Typography>
          <Box fontWeight="fontWeightBold" display='flex'>
            <ReplyOption color='primary'>
              Like &nbsp; &nbsp;
            </ReplyOption>
            <ReplyOption color='primary'>
              Dislike &nbsp;
            </ReplyOption>
            <ReplyOption color='primary'>
              Reply
            </ReplyOption>
          </Box>
        </div>
      </Box>
    </PaddingAdder>
  )
}

Reply.propTypes = {
  content: PropTypes.string.isRequired
}

export default Reply
