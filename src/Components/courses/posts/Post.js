import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Skeleton from '@material-ui/lab/Skeleton'
import CardActions from '@material-ui/core/CardActions'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import { Divider, Tooltip } from '@material-ui/core'
import Reply from './Reply'
import ReplyForm from './ReplyForm'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 700,
    margin: theme.spacing(2)
  },
  media: {
    height: 190
  }
}))

const Post = (props) => {
  const {
    internal = false,
    loading = false,
    avatar = {
      alt: 'Navaraj Khatiwoda',
      src: 'https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg'
    },
    content = `I think we lack enough mental capacity to ever understand the depth of this question. 
    Just as a computer knows how to do certain things but it could never understand them, 
    even though we feel like we know it one way or the other its not understandable. Long text enough for this
     `,
    title = 'Navaraj Khatiwoda',
    image
  } = props

  const classes = useStyles({
    cardActions: {
      padding: 10
    }
  })

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation='wave' variant='circle' width={40} height={40} />
          ) : (
            <Avatar
              alt={avatar.alt}
              src={avatar.src}
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton animation='wave' height={10} width='80%' style={{ marginBottom: 6 }} />
          ) : (
            <div>{title}</div>
          )
        }
        subheader={loading ? <Skeleton animation='wave' height={10} width='40%' /> : <div>
          <div>
            5 hours ago
          </div>
          {internal && <div style={{ fontSize: '0.7em' }}>Internal Only</div>}
                                                                                     </div>}
      />
      {
        image && (
          <>
            {loading ? (
              <Skeleton animation='wave' variant='rect' className={classes.media} />
            ) : (
              <CardMedia
                className={classes.media}
                image={image.src}
                title={image.title}
              />
            )}
          </>
        )
      }

      <CardContent>
        {loading ? (
          <>
            <Skeleton animation='wave' height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation='wave' height={10} width='80%' />
          </>
        ) : (
          <Typography variant='body2' color='textSecondary' component='p'>
            {
              content
            }
          </Typography>
        )}
      </CardContent>
      <Divider />
      {
        loading ? (
          null
        ) : (
          <CardActions className={classes.cardActions}>
            <div>
              <Tooltip title='Like'>
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
              </Tooltip>
              <span style={{ display: 'inline-block', margin: '0 10px' }}>20</span>
              <Tooltip title='Dislike'>
                <IconButton size='small'>
                  <ThumbDownIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div>
              <Tooltip title='Comments'>
                <IconButton>
                  <QuestionAnswerIcon />
                </IconButton>
              </Tooltip>
            </div>
          </CardActions>
        )
      }

      <CardContent>
        {loading ? (
          <>
            <Skeleton animation='wave' height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation='wave' height={10} width='80%' />
          </>
        ) : (
          <>
            <Reply content={content} postedBy='Upen' />
            <ReplyForm />
          </>
        )}
      </CardContent>

    </Card>
  )
}

Post.propTypes = {
  loading: PropTypes.bool
}

export default Post
