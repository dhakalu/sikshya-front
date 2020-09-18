import React from 'react'
import PropTypes from 'prop-types'
import QuickFilters from './QuickFilters'

const SchoolBrowseForm = props => {

  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start' }}>
      {/* Todo  */}
      <QuickFilters />
    </div>
  )
}

SchoolBrowseForm.propTypes = {
  onBrowse: PropTypes.func.isRequired
}

export default SchoolBrowseForm
