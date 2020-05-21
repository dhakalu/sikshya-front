import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import SchoolCard from './SchoolCard'

const SchoolsGrid = props => {
  const {
    schools = []
  } = props
  return (
    <Grid container>
      {
        schools.map((school, index) => (
          <SchoolCard key={school.id || index} {...school} />
        ))
      }
    </Grid>
  )
}

SchoolsGrid.propTypes = {
  /** List of schools to display */
  schools: PropTypes.array.isRequired
}

export default SchoolsGrid
