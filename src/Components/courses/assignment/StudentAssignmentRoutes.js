import React from 'react'
import StudentAssignments from './StudentAssignments'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
import withBreadcrum from '../../hoc/withBreadCrum'
import AssignmentDetail from './AssignmentDetail'

const Assignments = props => {
  const match = useRouteMatch('/courses/:courseId/assignments')
  console.log(match)
  return (
    <Switch>
      <Route path={`${match.path}/:assignmentId`}>
        <AssignmentDetail />
      </Route>
      <Route path={`${match.path}`}>
        <StudentAssignments />
      </Route>
    </Switch>
  )
}

Assignments.propTypes = {

}

const bredcrumLinks = [
  { name: 'Courses', path: '/dashboard/courses' },
  { name: 'Science', path: '/courses/<some-course-id>/Science' },
  { name: 'Assignments' }
]

export default withBreadcrum(Assignments, bredcrumLinks)
