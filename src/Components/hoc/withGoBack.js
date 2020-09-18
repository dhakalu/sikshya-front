import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const withGoBack = (WrappedComponent) => {
  return (props) => {
    const { onGoBack } = props
    return (
      <>
        <BackIcon onClick={onGoBack} />
        <WrappedComponent />
      </>
    )
  }
}

const BackIcon = (props) => {
  return (
    <IconButton size='small'>
      <ArrowBackIcon />
    </IconButton>
  )
}

export default withGoBack
