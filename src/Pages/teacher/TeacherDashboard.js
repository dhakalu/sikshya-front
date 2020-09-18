import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'

import ClassIcon from '@material-ui/icons/Class'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import AllInboxIcon from '@material-ui/icons/AllInbox'

import MyCourses from '../../Components/teacher-dashboard/MyCourses'

import { UnderDevelopment } from '../../Pages/Course'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'

import Grid from '@material-ui/core/Grid'
import Inobx from '../../Components/inbox'
import Calander from '../../Components/calander'
import withSidebar from '../../Components/hoc/page/withSidebar'
import Sidebar from '../../Components/common/sidebar/Sidebar'
import WhiteSpace from '../../Components/common/WhiteSpace.styles'

const TeacherDashboard = () => {
  return (
    <Switch>
      <Route path='/teacher/2'>
        <MyCourses />
      </Route>
      <Route path='/dashboard/3'>
        <Calander />
      </Route>
      <Route path='/dashboard/1'>
        <Inobx />
      </Route>
      <Route path='/teacher/' exact>
        <div>
          {/* <Typography component='h3' variant='h4'>Dashboard</Typography> */}
          <Grid container style={{ justifyContent: 'center' }}>
            {
              [
                {
                  title: 'Homework',
                  severity: 'success',
                  message: '0 homework due'
                },
                {
                  title: 'Notice to parents',
                  severity: 'info',
                  message: 'Result of 1st therm exam has been posted.'
                },
                {
                  title: '',
                  severity: 'warning'
                },
                {
                  title: 'Upcomming Exams',
                  severity: 'warning',
                  message: <div>
                  Midtem is comming up in 10 days.
                    <div>
                      <b>
                    Schedule
                      </b>
                    </div>
                  </div>
                },
                {
                  title: 'Fees due',
                  severity: 'error',
                  message: 'Fees of last 2 months are due today.'
                }
              ].map((x, i) => (
                <DashboardItem {...x} key={i} />
              ))
            }
          </Grid>
        </div>
      </Route>
      <Route>
        <UnderDevelopment
          title='404: Page Not found'
          notes='The page you are looking for does not exist.'
        />
      </Route>
    </Switch>
  )
}

const DashboardItem = ({ title, severity, message }) => {
  return (
    <div>
      <Alert
        variant='filled'
        style={{
          borderRadius: 5,
          width: 280,
          margin: 10,
          height: 170
        }}
        title={title}
        severity={severity}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </div>

  )
}

const navItems = [
  {
    id: 1,
    path: '/teacher/1/',
    name: 'All Inbox',
    icon: <AllInboxIcon />
  },
  {
    id: 2,
    path: '/teacher/2/',
    name: 'Courses I Teach',
    icon: <ClassIcon />
  },
  {
    id: 3,
    path: '/teacher/3/',
    name: 'Calander',
    icon: <CalendarTodayIcon />
  }
]

const TeacherDashboardSidebar = () => {
  const config = {
    items: navItems.sort((a, b) => a.name.localeCompare(b.name))
  }

  const [selectedItem, setSelectedItem] = useState('')

  const match = useRouteMatch('/dashboard/:optionId') || {}

  useEffect(() => {
    if (match.path) {
      const { optionId } = match.params
      setSelectedItem(optionId)
    } else {

    }
  }, [match])

  return (
    <>
      <WhiteSpace height={500} />
      <Sidebar
        selectedItem={selectedItem}
        onSelectItem={setSelectedItem}
        title='Some teacher'
        config={config}
      />
    </>
  )
}

export default withSidebar(TeacherDashboard, TeacherDashboardSidebar)
