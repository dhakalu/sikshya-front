import React from 'react'
import PropTypes from 'prop-types'
import MaterialTableCell from '@material-ui/core/TableCell'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { styled, withStyles } from '@material-ui/core/styles'
import FolderIcon from '@material-ui/icons/Folder'
import DescriptionIcon from '@material-ui/icons/Description'
import MarginAdder from '../MarginAdder.styles '
import Alert from '@material-ui/lab/Alert'

const CellAvatar = styled(Avatar)({
  width: 20,
  height: 20,
  marginRight: 10
})

const StyledAlert = withStyles({
  root: {
    width: '100%',
    justifyContent: 'center'
  },
  icon: {
    padding: 0
  },
  message: {
    padding: 0
  }
})(Alert)

const CELL_TYPES = {
  info: () => 'info',
  alert: ({ severity, data }) => (
    <Box display='flex'>
      <StyledAlert severity={severity}>{data}</StyledAlert>
    </Box>
  ),
  file: ({ name, type }) => (
    <Box display='flex'>
      {type === 'folder' && <FolderIcon />}
      {type === 'file' && <DescriptionIcon />}
      <MarginAdder l={10} t={2}>{name}</MarginAdder>
    </Box>
  ),
  user: ({ name }) => (
    <Box display='flex'>
      <CellAvatar />
      {name}
    </Box>
  ),
  default: (data) => data
}

const TableCell = props => {
  const {
    cellType = 'default',
    data
  } = props

  return (
    <MaterialTableCell>
      {
        CELL_TYPES[cellType || 'default'](data)
      }
    </MaterialTableCell>
  )
}

TableCell.propTypes = {
  cellType: PropTypes.string,
  data: PropTypes.any
}

export default TableCell
