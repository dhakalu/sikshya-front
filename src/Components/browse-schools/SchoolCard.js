import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ShareIcon from '@material-ui/icons/Share'
import LanguageIcon from '@material-ui/icons/Language'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import DirectionsIcon from '@material-ui/icons/Directions'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 140
  }
})

const SchoolCard = (props) => {
  const classes = useStyles()
  const {
    coverImage = 'https://via.placeholder.com/150',
    name = 'Some school',
    pitch = 'This is a sample pitch of the school. School can edit this pitch as they want to. We limit the no of words to 300.',
    location = ''
  } = props

  const history = useHistory()

  const handleClick = () => {
    history.push('/browse/name')
  }

  return (
    <Card className={classes.root}>
      {/* <CardHeader
        title={name}
        subheader={location}
      /> */}
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={coverImage}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
            <Typography gutterBottom variant='caption' color='textSecondary' component='p' style={{ size: '0.7em' }}>
              {location}
            </Typography>
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {pitch}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size='small'>
          <BookmarkIcon />
        </IconButton>
        <IconButton size='small'>
          <ShareIcon />
        </IconButton>
        <IconButton size='small'>
          <LanguageIcon />
        </IconButton>
        <IconButton size='small'>
          <DirectionsIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default SchoolCard

SchoolCard.propTypes = {
  /** Indicates weather the details of the schools have been currently being fetched from server */
  loading: PropTypes.bool,
  /** Short description of the school. Note this should not be longer than 500 chars */
  pitch: PropTypes.string.isRequired,
  /** Link of the cover image of the school */
  coverImage: PropTypes.string.isRequired,
  /** Name of the school */
  name: PropTypes.string.isRequired
}
