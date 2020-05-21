import React from 'react'
import PropTypes from 'prop-types'
import QuickFilters from './QuickFilters'

const SchoolBrowseForm = props => {
  const {
    onBrowse = false
  } = props
  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', padding: 30, flexDirection: 'column', alignItems: 'center' }}>
      {/* Todo  */}
      <QuickFilters />
    </div>
  )
}

SchoolBrowseForm.propTypes = {
  onBrowse: PropTypes.func.isRequired
}

export default SchoolBrowseForm
