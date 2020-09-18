import React from 'react'
import PropTypes from 'prop-types'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
import withBreadcrum from '../../hoc/withBreadCrum'
import DiscussionDetails from './DiscussionDetails'
import DiscussionsList from './DiscussionsList'
const Discussions = props => {
  const match = useRouteMatch('/courses/:courseId/discussions')
  return (
    <Switch>
      <Route path={`${match.path}/:discussionId`}>
        <DiscussionDetails />
      </Route>
      <Route path={`${match.path}`}>
        <DiscussionsList />
      </Route>
    </Switch>
  )
}

Discussions.propTypes = {

}

const bredcrumLinks = [
  { name: 'Courses', path: '/dashboard/courses' },
  { name: 'Science', path: '/courses/<some-course-id>/Science' },
  { name: 'Discussions' }
]

export default withBreadcrum(Discussions, bredcrumLinks)
