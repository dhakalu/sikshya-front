import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import MaterialTableRow from '@material-ui/core/TableRow'
import TableCell from './TableCell'

const TableRow = props => {
  const {
    row,
    isClickable,
    onRowClick = () => false,
    supportSelection = false,
    isSelected = false,
    onRowSelect = () => false,
    columns = []
  } = props

  const handleRowClick = (record) => {
    onRowClick && onRowClick(record)
  }

  return (
    <MaterialTableRow
      hover={isClickable}
      onClick={() => handleRowClick(row)}
    >
      {
        supportSelection && (
          <TableCell padding='checkbox'>
            <Checkbox
              checked={isSelected}
              onChange={() => onRowSelect(row)}
              inputProps={{ 'aria-label': 'select' }}
            />
          </TableCell>
        )
      }
      {
        columns.map(column => {
          const { id: columnKey, cellType } = column
          return (
            <TableCell key={columnKey} data={row[columnKey]} cellType={cellType} />
          )
        })
      }
    </MaterialTableRow>
  )
}

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  isClickable: PropTypes.bool,
  onRowClick: PropTypes.func,
  supportSelection: PropTypes.bool,
  isSelected: PropTypes.bool,
  onRowSelect: PropTypes.func
}

export default TableRow
