import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'

import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const EventCard = styled(Card)({
  margin: 10,
  width: 285,
  position: 'relative'
})

const EventCover = styled(CardMedia)({
  height: 150
})

const EventActions = styled(CardActions)({
  position: 'absolute',
  borderTop: '1px solid #ccc',
  width: 'calc(100% - 16px)',
  bottom: 0
})

const Event = props => {
  const {
    id = '',
    image = {
      src: 'https://miro.medium.com/max/10000/1*ccFmJGYNsKq6eNgXfiz-EQ.jpeg'
    },
    title = 'Some Random Default Event',
    eventDate = 'TODAY 10PM',
    location = '2530 Sharondale Dr, Nashville, 37215 TN'
  } = props

  const history = useHistory()
  const handleEnevntViewDetails = () => {
    history.push(`/dashboard/4/${id}`)
  }

  return (
    <EventCard elevation={0}>
      <EventCover
        image={image.src}
        title={image.title}
      />
      <CardContent style={{ minHeight: 170 }}>
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
      <EventActions>
        <Box
          display='flex'
          flex='1'
          flexWrap='wrap'
          justifyContent='space-between'
        >
          <Button
            disableElevation
            color='primary' variant='contained'
          >RSVP
          </Button>
          <Button
            onClick={handleEnevntViewDetails}
            disableElevation
            variant='outlined'
          >View Details
          </Button>
          <IconButton
            variant='outlined'
            size='small'
          >
            <ShareIcon />
          </IconButton>
        </Box>
      </EventActions>
    </EventCard>
  )
}

Event.propTypes = {

}

export default Event
