import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'
import { useHistory } from 'react-router-dom'

const EventList = props => {
  const {
    events = DEFAULT_EVENTS
  } = props

  const history = useHistory()

  return (
    <div style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <div>
        <Grid container justify="center">
          {
            events.map((event, index) => {
              return <Event key={index} {...event} />
            })
          }
        </Grid>
      </div>
      <Tooltip title='Add new event' aria-label='add new event'>
        <Fab
          onClick={() => history.push('/dashboard/4/create')}
          color='primary' 
          aria-label='add' 
          style={{ position: 'fixed', bottom: 30, right: 30 }}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}

EventList.propTypes = {

}

export default EventList

export const DEFAULT_EVENTS = [
  {
    id: '1',
    eventDate: 'Every Saturday 2 PM',
    title: 'Wai Wai Intra College Quiz',
    location: 'Sagarmatha Television, Tinkune, Kathmandu',
    image: {
      src: 'https://kids.nationalgeographic.com/content/dam/kidsea/kids-core-objects/backgrounds/1900x1068_herolead_quiz.adapt.1900.1.jpg',
      title: 'SOme'
    }
  },
  {
    id: '2',
    eventDate: 'Jan 22-26',
    title: 'Inter School Football Cup',
    location: 'Dasarath Rangasala',
    image: {
      src: 'https://mysportsmovement.com/wp-content/uploads/2019/06/17.jpg'
    }
  },
  {
    id: '3',
    eventDate: 'Jan 22- Mar 26, Every Friday',
    title: 'Trinity Poem Contest',
    location: 'Trinity College',
    image: {
      src: 'https://cdn.filestackcontent.com/resize=width:2000/ZaLWDNuySuq52lAxSFVg'
    }
  },
  {
    id: '4',
    eventDate: 'Mar 30',
    title: 'Youth For Nation - Discussion',
    location: 'Pragya Bhawan',
    image: {
      src: 'https://www.collegeessay.org/images/debate-topics.jpg'
    }
  },
  {
    id: '5',
    eventDate: 'Apr 10 - May 30',
    title: 'Budanilkhanta Cup',
    location: 'Budanilkhanta School',
    image: {
      src: 'https://www.trophies2go.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/3/6315.jpg'
    }
  },
  {
    id: '6',
    event: 'Apr 18 - Apr 28',
    title: 'Moragan Basketball Cup',
    location: 'Moragn College, Samakhusi',
    image: {
      src: 'https://cdn.vox-cdn.com/thumbor/ZyOdoMqanJqLSxvoWQjBb59Djgk=/0x0:2401x3600/1200x800/filters:focal(1150x765:1534x1149)/cdn.vox-cdn.com/uploads/chorus_image/image/66468471/usa_today_14161017.0.jpg'
    }
  }
]
