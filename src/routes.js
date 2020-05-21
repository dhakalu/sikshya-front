import React, { Suspense, lazy } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const Home = lazy(() => import('./Pages/Home'))
const BrowseSchools = lazy(() => import('./Pages/BrowseSchools'))
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
