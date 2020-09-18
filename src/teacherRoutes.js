import React, { Suspense, lazy } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TeacherDashboard from './Pages/teacher/TeacherDashboard'
import TeacherCourse from './Pages/teacher/TeacherCourse'

const TeacherRoutes = (props) => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/teacher/course/:courseId'>
            <TeacherCourse matchingPath={'/teacher/course/:courseId'} />
          </Route>
          <Route path='/teacher'>
            <TeacherDashboard />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default TeacherRoutes
