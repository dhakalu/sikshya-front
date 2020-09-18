import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SidebarOptionWrapper from './SidebarOptionWrapper'
import IconButton from '@material-ui/core/IconButton'

const SidebarOption = props => {
  const {
    name = '',
    path = '',
    id = '',
    isSelected = false,
    icon = undefined,
    onClick = () => false
  } = props

  const handleClick = () => {
    onClick(id)
  }

  return (
    <Link to={path}>
      <SidebarOptionWrapper
        role='button'
        isSelected={isSelected}
        onClick={handleClick}
      >
        {icon && (
          <IconButton disabled>
            {icon}
          </IconButton>
        )}
        <span>
          {name}
        </span>
      </SidebarOptionWrapper>
    </Link>
  )
}

export default SidebarOption

SidebarOption.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}
