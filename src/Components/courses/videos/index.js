import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import VideoCard from './VideoCard'
import { withStyles } from '@material-ui/core'

const StyldedGrid = withStyles({
  root: {
    padding: 10
  }
})(Grid)

const VideoGrid = ({ videods }) => {
  const [currentlyPlayingVideo, setCurrentlyPlayingVideo] = useState('')

  return (
    <StyldedGrid container>
      {
        videods.map((vid, i) => (
          <VideoCard
            onPlay={setCurrentlyPlayingVideo}
            isPlaying={currentlyPlayingVideo === vid.id}
            key={i} {...vid}
          />
        ))
      }
    </StyldedGrid>
  )
}

export default VideoGrid
