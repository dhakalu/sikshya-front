import React, { Suspense, lazy } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import withSidebar from './Components/hoc/page/withSidebar'

const Home = lazy(() => import('./Pages/Home'))

const BrowseSchoolsPage = lazy(() => import('./Pages/BrowseSchools'))
const BrowseSchools = withSidebar(BrowseSchoolsPage)

const SchoolDetails = lazy(() => import('./Pages/SchoolDetails'))

const Routes = (props) => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/browse/:schoolId'>
            <SchoolDetails />
          </Route>
          <Route path='/browse'>
            <BrowseSchools />
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
