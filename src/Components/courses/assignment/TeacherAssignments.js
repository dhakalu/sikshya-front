import React from 'react'
import { getKeys } from '../../utils/ObjectUtils'
import {
  useHistory
} from 'react-router-dom'
import AssignmentsList from './AssignmentsList'
import { Button } from '@material-ui/core'
import withBreadcrum from '../../hoc/withBreadCrum'

const createData = (name, assignmentsDue, fullMarks, status = 'Open', submittedCount) => {
  return {
    name,
    assignmentsDue,
    status,
    fullMarks,
    submittedCount
  }
}

const rows = [
  createData('Chapter I - MCQ', 'Yesturday 10:00PM', 100, { data: 'Graded', severity: 'success' }, '20/50'),
  createData('Chapter I - Reading', '05/23/2020', 25, { data: 'Graded', severity: 'success' }, '32/50'),
  createData('Chapter I - Writing', '05/11/2020 11:00 PM', 20, { data: 'Graded', severity: 'success' }, '50/50'),
  createData('Chapter II - Discussion', '09/11/2020 11:00 PM', 100, { data: 'Graded', severity: 'success' }),
  createData('Chapter II - MCQ', '09/11/2020 11:00 PM', 20, { data: 'In Progess (40/50)', severity: 'warning' }, '50/50'),
  createData('Chapter II - Writing', '09/11/2020 11:00 PM', 100, { data: 'In Progess (10/50)', severity: 'warning' }, '40/50'),
  createData('Chapter II - Reading', '09/19/2020 11:00 PM', 20, { data: 'No Submissions', severity: 'info' })
]

const cellTypes = {
  teacher: 'user',
  status: 'alert'
}

const columns = getKeys(createData('Frozen yoghurt', 159, 6.0, 24, 4.0)).map(x => (
  {
    label: x.toUpperCase(),
    id: x,
    cellType: cellTypes[x] || 'default'
  }
))

const TeacherAssignments = props => {
  const history = useHistory()

  const onSelectAssignment = (course) => {
    history.push('/teacher/course/courseId/assignments/assignmentId')
  }

  return (
    <AssignmentsList
      actions={(
        <Button
          onClick={() => history.push('/teacher/course/courseId/assignments/create')}
          variant='contained' color='primary'
        >Create New Assignment
        </Button>
      )}
      square
      columns={columns}
      records={rows}
      onClickRow={onSelectAssignment}
    />
  )
}

const bredcrumLinks = [
  { name: 'Courses', path: '/teacher/2' },
  { name: 'Science', path: '/teacher/course/courseId' },
  { name: 'Assignments'}
]

export default withBreadcrum(TeacherAssignments, bredcrumLinks)