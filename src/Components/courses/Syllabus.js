import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import PaddingAdder from '../common/PaddingAdder.styles'

const Syllabus = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <PaddingAdder>
        <Typography component='h3' variant='h4'>Syllabus</Typography>
      </PaddingAdder>
      <PaddingAdder style={{ flex: 1 }}>
        <iframe
          src='https://www.w3docs.com//uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf'
          width='100%'
          height='600px'
        />
      </PaddingAdder>
    </div>
  )
}

Syllabus.propTypes = {

}

export default Syllabus
