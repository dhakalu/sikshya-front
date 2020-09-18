import React from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import {
  useHistory
} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: 'pointer'
  },
  root: {
    padding: 10,
    top: 65,
    zIndex: 10,
    marginLeft: 2,
    background: '#f0f0f0',
    position: 'sticky'
  }
}))

const SimpleBreadcrumbs = ({ links, currentLocation }) => {
  const history = useHistory()
  const classes = useStyles()

  const handleLinkClick = (e, path) => {
    e.preventDefault()
    history.push(path)
  }

  return (
    <Breadcrumbs aria-label='breadcrumb' className={classes.root}>
      {
        links.map(({ name, path, id }, i) => {
          return path ? (
            <Link
              className={classes.link}
              key={i}
              color='inherit'
              onClick={(event) => handleLinkClick(event, path)}
            >
              {name}
            </Link>
          ) : (
            <Typography color='textPrimary'>{name}</Typography>
          )
        })
      }
    </Breadcrumbs>
  )
}

export default SimpleBreadcrumbs
