import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from './Header'
import Paper from '@material-ui/core/Paper'
import TableRow from './TableRow'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  '&:hover': {
    cursor: 'pointer'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
})

const DataTable = (props) => {
  const classes = useStyles()

  const {
    columns = [],
    records = [],
    isClickable = true,
    primaryKey = '',
    supportSelection,
    selectedIds = [],
    onClickRow = null
  } = props

  return (
    <Paper elevation={0} square>
      <TableContainer>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead columns={columns} classes={classes} supportSelection={supportSelection} />
          <TableBody>
            {records.map((row, index) => (
              <TableRow
                style={{
                  '&:hover': {
                    cursor: onClickRow ? 'pointer' : 'hand'
                  }
                }}
                columns={columns}
                isClickable={isClickable}
                row={row}
                key={row[primaryKey] || index}
                supportSelection={supportSelection}
                onRowClick={onClickRow}
                isSelected={selectedIds.includes(row[primaryKey])}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

DataTable.propTypes = {
  primaryKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default DataTable
