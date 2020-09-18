import DataTable from '../common/table/DataTable'
import React from 'react'
import withBreadcrum from '../hoc/withBreadCrum'
import { submissions, columns } from './submissions'

const HomeworkSubmissions = ({ courseId }) => {
  return <DataTable columns={columns} records={submissions} />
}

const bredcrumLinks = [
  { name: 'Courses', path: '/teacher/2' },
  { name: 'Science', path: '/teacher/course/courseId' },
  { name: 'Assignments', path: '/teacher/course/courseId/assignments' },
  { name: 'Assignment Name', path: '/teacher/course/courseId/assignments/assignmentId' },
  { name: 'Submissions' }
]

export default withBreadcrum(HomeworkSubmissions, bredcrumLinks)
