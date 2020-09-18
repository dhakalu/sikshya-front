import React, { useEffect, useState } from 'react'
import { Box, Card, CardMedia, CardContent, Typography, Divider } from '@material-ui/core'
import { useRouteMatch } from 'react-router-dom'
import { DEFAULT_EVENTS } from './EventList'
import Post from '../../courses/posts/Post'

const EventDetail = () => {
  const { params } = useRouteMatch('/dashboard/4/:eventId')

  const [event, setEvent] = useState({})

  const { title, image = {}, eventDate, location } = event

  useEffect(() => {
    if (params.eventId) {
      const selectedEvent = DEFAULT_EVENTS.filter(x => `${x.id}` === params.eventId)[0]
      console.log('selectedEvent', selectedEvent)
      setEvent(selectedEvent)
    }
  }, [params.eventId])

  return (
    <Card elevation={0} style={{ borderRadius: 0 }}>
      <CardMedia
        style={{ height: 290 }}
        image={image.src}
        title={title}
      />
      <CardContent>
         <Typography variant='body' color='textSecondary' component='p'>
          {eventDate}
        </Typography>
         <Typography variant='h6' color='textSecondary' component='p'>
          {title}
        </Typography>
         <Typography variant='body' color='textSecondary' component='p'>
          {location}
        </Typography>
       </CardContent>
      <Divider light />
      <CardContent>
        <Box display='flex'>
          <div style={{minWidth: 350}}>
            Photos    
          </div>
          <div>
            <Typography variant='body' color='textPrimary' component='p'>
                Posts
            </Typography>
            <Post />
          </div>
        </Box>
      </CardContent>
    </Card>
  )
}

export default EventDetail
