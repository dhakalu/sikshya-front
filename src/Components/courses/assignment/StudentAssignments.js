import React from 'react'
import { getKeys } from '../../utils/ObjectUtils'
import {
  useHistory
} from 'react-router-dom'
import AssignmentsList from './AssignmentsList'

const createData = (name, teacher, assignmentsDue, fullMarks, status = 'Open', score) => {
  return {
    name,
    assignmentsDue,
    status,
    fullMarks,
    score,
    teacher: {
      name: teacher
    }
  }
}

const rows = [
  createData('Chapter I - MCQ', 'Ranjana Adhikari', 'Yesturday 10:00PM', 100, { data: 'Past Due', severity: 'error' }, '-'),
  createData('Chapter I - Reading', 'Ranjana Adhikari', '05/23/2020', 25, { data: 'Past Due', severity: 'error' }, '-'),
  createData('Chapter I - Writing', 'Ranjana Adhikari', '05/11/2020 11:00 PM', 20, { data: 'Past Due', severity: 'error' }, '-'),
  createData('Chapter II - MCQ', 'Ranjana Adhikari', '09/11/2020 11:00 PM', 20, { data: 'Due Today', severity: 'warning' }, '-'),
  createData('Chapter II - Writing', 'Ranjana Adhikari', '09/11/2020 11:00 PM', 100, { data: 'Submitted', severity: 'success' }, '-'),
  createData('Chapter II - Discussion', 'Ranjana Adhikari', '09/11/2020 11:00 PM', 100, { data: 'Graded', severity: 'success' }, '80'),
  createData('Chapter II - Reading', 'Ranjana Adhikari', '09/19/2020 11:00 PM', 20, { data: 'Open', severity: 'info' }, '-'),
  createData('Chapter II - Reading', 'Ranjana Adhikari', '09/11/2020 11:00 PM', 20, { data: 'In Progress', severity: 'info' }, '-')
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

const StudentAssignments = props => {
  const history = useHistory()

  const onSelectAssignment = (course) => {
    history.push('/courses/<some-course-id>/assignments/<assignment-id>')
  }

  return (
    <AssignmentsList
      square
      columns={columns}
      records={rows}
      onClickRow={onSelectAssignment}
    />
  )
}

export default StudentAssignments
