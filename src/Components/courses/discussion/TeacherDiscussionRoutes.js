import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory
} from 'react-router-dom'
import withBreadcrum from '../../hoc/withBreadCrum'
import DiscussionDetails from './DiscussionDetails'
import DiscussionsList from './DiscussionsList'
import { Button } from '@material-ui/core'
import CreateDiscussionForm from './CreateDiscussionForm'

const Discussions = props => {
  const match = useRouteMatch('/teacher/course/:courseId/discussions')

  const history = useHistory()

  return (
    <Switch>
      <Route path={`${match.path}/create`}>
        <CreateDiscussionForm />
      </Route>
      <Route path={`${match.path}/:discussionId`}>
        <DiscussionDetails />
      </Route>
      <Route path={`${match.path}`}>
        <DiscussionsList
          actions={(
            <Button
              onClick={() => history.push('/teacher/course/courseId/discussions/create')}
              variant='contained' color='primary'
            >Start New Discussion
            </Button>
          )}
        />
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
