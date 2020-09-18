import React from 'react'
import { getKeys } from '../../utils/ObjectUtils'
import DataTable from '../../common/table/DataTable'
import { Box, Typography } from '@material-ui/core'
import {
  useHistory
} from 'react-router-dom'

const createData = (name, postedOn, fullMarks, status = 'Open') => {
  return { name, postedOn, fullMarks, status }
}

const rows = [
  createData('What is after our death?', 'Yesturday 10:00PM', 100, { data: 'Past due', severity: 'error' }),
  createData('Can reason and faith co exist?', '05/23/2020', 25, { data: 'Complete', severity: 'success' }),
  createData('How can we develop our communication systems?', '05/11/2020 11:00 PM', 20, { data: 'Complete', severity: 'success' }),
  createData('What did you like most about this course and why?', '09/11/2020 11:00 PM', 20, { data: 'Due Today', severity: 'warning' }),
]

const columns = getKeys(createData('Frozen yoghurt', 159, 6.0, 24, 4.0)).map(x => (
  {
    label: x.toUpperCase(),
    id: x,
    cellType: x === 'status' ? 'alert' : 'default'
  }
))

const DiscussionsList = ({ actions }) => {
  const history = useHistory()

  const onSelectDiscussion = (course) => {
    history.push('/courses/<some-course-id>/discussions/<discussion-id>')
  }
  return (
    <>
      <Box display={actions ? 'flex' : 'block'} padding='10px' width='calc(100% - 20px)' justifyContent='space-between'>
        <Typography component='h3' variant='h4'>Discussions</Typography>
        {actions && actions}
      </Box>
      <DataTable square columns={columns} records={rows} onClickRow={onSelectDiscussion} />
    </>
  )
}

DiscussionsList.propTypes = {

}

export default DiscussionsList
