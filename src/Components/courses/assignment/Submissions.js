import React from 'react'
import DataTable from '../../common/table/DataTable'
import { Typography, Box } from '@material-ui/core'
import {submissions, columns} from '../../teacher-dashboard/submissions'

const Submissions = ({ columns = columns, records = submissions/, onClickRow, actions }) => {
  return (
    <>
      <Box display={actions ? 'flex' : 'block'} padding='10px' width='calc(100% - 20px)' justifyContent='space-between'>
        <Typography component='h3' variant='h4'>Assignments</Typography>
        {actions && actions}
      </Box>
      <DataTable
        square
        columns={columns}
        records={records}
        onClickRow={onClickRow}
      />
    </>
  )
}

export default Submissions
