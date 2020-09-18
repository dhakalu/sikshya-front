import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const StyledCard = styled.div`
    margin: 10px;
`

const VideoContainer = styled.iframe`
    border-radius: 3px;
    border: none;
    box-shadow: 0 1px 2px #ccc;
`

const VideoDescriptionWrapper = styled.div`
    padding: 10px 0;
`

const VideoCard = ({ id, title, description }) => {
  return (
    <StyledCard>
      <VideoContainer
        width='356'
        height='200'
        src={`https://www.youtube.com/embed/${id}`}
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      />
      <VideoDescriptionWrapper>
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography variant='body2' component='p'>
          {description || 'Short description of the video will go here'}
        </Typography>
      </VideoDescriptionWrapper>

    </StyledCard>
  )
}

export default VideoCard
