import React from 'react'
import PropTypes from 'prop-types'
import HeaderWrapper from './HeaderWrapper.styles'

Header.propTypes = {

}

function Header (props) {
  const header = 'Sikshya'

  return (
    <HeaderWrapper>
      {header}
    </HeaderWrapper>
  )
}

Header.propTypes = {
    header: PropTypes.string
}

export default Header
