import React, { Suspense, lazy } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import withSidebar from './Components/hoc/page/withSidebar'
import Header from './Components/navigation/Header'
import StudentDashboard from './Pages/StudentDashboard'
import TeacherRoutes from './teacherRoutes'

const Home = lazy(() => import('./Pages/Home'))

const BrowseSchoolsPage = lazy(() => import('./Pages/BrowseSchools'))
const BrowseSchools = withSidebar(BrowseSchoolsPage)

const SchoolDetails = lazy(() => import('./Pages/SchoolDetails'))

const Course = lazy(() => import('./Pages/Course'))

const Routes = (props) => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/browse/:schoolId'>
            <SchoolDetails />
          </Route>
          <Route path='/browse'>
            <BrowseSchools />
          </Route>
          <Route path='/courses/:courseId'>
            <Course matchingPath={'/courses/:courseId'}/>
          </Route>
          <Route path='/dashboard'>
            <StudentDashboard />
          </Route>
          <Route path='/teacher'>
            <TeacherRoutes />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
