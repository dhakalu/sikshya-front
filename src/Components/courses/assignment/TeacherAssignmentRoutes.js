import React from 'react'
import PropTypes from 'prop-types'
import TeacherAssignments from './TeacherAssignments'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
import AssignmentCreateForm from './AssignmentCreateForm'
import HomeworkSubmissions from '../../teacher-dashboard/HomeworkSubmissions'

const Assignments = props => {
  const match = useRouteMatch('/teacher/course/:courseId/assignments') || {}
  return (
    <Switch>
      <Route path={`${match.path}/create`}>
        <AssignmentCreateForm />
      </Route>
      <Route path={`${match.path}/:assignmentId`}>
        <HomeworkSubmissions />
      </Route>
      <Route path={`${match.path}`}>
        <TeacherAssignments />
      </Route>
    </Switch>
  )
}

Assignments.propTypes = {

}

export default Assignments