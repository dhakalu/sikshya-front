
import React from 'react'
import EventList from './EventList'
import { Switch, Route } from 'react-router-dom'
import EventDetail from './EventDetail'

const EventRoutes = () => {
  return (
    <Switch>
      <Route path='/dashboard/4/create'>
         Create Event Form Will Come Here
      </Route>
      <Route path='/dashboard/4/:eventId'>
        <EventDetail />
      </Route>
      <Route>
        <EventList />
      </Route>
    </Switch>
  )
}

export default EventRoutes
