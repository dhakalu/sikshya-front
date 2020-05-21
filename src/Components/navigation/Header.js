import React from 'react'
import PropTypes from 'prop-types'

Header.propTypes = {

}

function Header (props) {
  const header = 'Sikshya'

  return (
    <div className='header'>
      {header}
    </div>
  )
}

Header.propTypes = {
    header: PropTypes.string
}

export default Header
