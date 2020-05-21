import React from 'react'
import PropTypes from 'prop-types'
// import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'


const SchoolHeader = props => {
  const {
    // name
  } = props
  return (
    <SchoolHeaderWrapper>
      <div>
      <img src='https://via.placeholder.com/900' width='100%' height='300px' />
      {/* <Typography variant='h3' component='h1'>{name}</Typography> */}
      </div>
    </SchoolHeaderWrapper>
  )
}

SchoolHeader.propTypes = {
  name: PropTypes.string.isRequired
}

export default SchoolHeader

const SchoolHeaderWrapper = styled.div`
    
`
