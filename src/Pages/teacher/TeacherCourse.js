import React, { useState } from 'react'
import withSidebar from '../../Components/hoc/page/withSidebar'
import Sidebar from '../../Components/common/sidebar/Sidebar'
import WhiteSpace from '../../Components/common/WhiteSpace.styles'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
import TocIcon from '@material-ui/icons/Toc'
import GradeIcon from '@material-ui/icons/Grade'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import AssessmentIcon from '@material-ui/icons/Assessment'
import BallotIcon from '@material-ui/icons/Ballot'
import Syllabus from '../../Components/courses/Syllabus'
import ForumIcon from '@material-ui/icons/Forum'
import TeacherDiscussionRoutes from '../../Components/courses/discussion/TeacherDiscussionRoutes'
import Videos from '../../Components/courses/videos'
import FilesList from '../../Components/files/FilesList'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import NotesIcon from '@material-ui/icons/Notes'
import Notes from '../../Components/courses/notes.js/index'
import TeacherAssignmentRoutes from '../../Components/courses/assignment/TeacherAssignmentRoutes'
import { UnderDevelopment } from '../Course'

const Course = ({ matchingPath }) => {
  const match = useRouteMatch(matchingPath)
  return (
    <Switch>
      <Route path={`${match.path}/syllabus`}>
        <Syllabus />
      </Route>
      <Route path={`${match.path}/assignments`}>
        <TeacherAssignmentRoutes />
      </Route>
      <Route path={`${match.path}/quizes`}>
        <UnderDevelopment
          name='Quiz'
          notes='Teacher can take regular quizes to test the effectiveness of what they have taught in a class.
          All quizes posted by the teacher of selected subject will be displayed here. Features include:'
          features={[
            'Students can see list of quizes for their subject. (Incomplete at top, first quiz at bottom)',
            'Students can click on the quiz and a window with questions will be displayed. See Assignment for reference.',
            'Quiz that are due will be highlighted red',
            'Students will be able to see marks for completed quiz'
          ]}
        />
      </Route>
      <Route path={`${match.path}/exams`}>
        <UnderDevelopment
          name='Exam'
          notes='You can check your exam, schedule, and other details related to exam' />
      </Route>
      <Route path={`${match.path}/results`}>
        <UnderDevelopment
          name='Results'
          notes='Marks scored in each of assignments, quizes, exams will be displayed here. Features include:'
          features={[
            'Students can see marks scored',
            'Students can see heightest mark',
            'Student will see graph of mark distribution in class to compare themselevs with other students',
            'This page is accible for parents as well so if they want to check how their childeren are doing.'
          ]}
        />
      </Route>
      <Route path={`${match.path}/discussions`}>
        <TeacherDiscussionRoutes />
      </Route>
      <Route path={`${match.path}/documents`}>
        <FilesList />
      </Route>
      <Route path={`${match.path}/videos`}>
        <Videos videods={videos} />
      </Route>
      <Route path={`${match.path}/notes`}>
        <Notes />
      </Route>
      <Route>
        <UnderDevelopment name='This' />
      </Route>
    </Switch>
  )
}

const videos = [{
  id: 'wWnfJ0-xXRE',
  title: 'Lecture I - Intro'
},
{
  id: 'GtOGurrUPmQ',
  title: 'Lecture II - Intro'
},
{
  id: 'q9IWoQ199_o',
  title: 'Lecture III - Intro'
},
{
  id: '0na1JdPE_JY',
  title: 'Lecture IV - Intro'
}
]

const navItems = [
  {
    id: 1,
    path: '/syllabus',
    name: 'Syllabus',
    icon: <TocIcon />
  },
  {
    id: 2,
    path: '/assignments',
    name: 'Assignments',
    icon: <AssignmentIcon />
  },
  {
    id: 3,
    path: '/quizes',
    name: 'Quizes',
    icon: <AssessmentIcon />
  },
  {
    id: 4,
    path: '/exams',
    name: 'Exams',
    icon: <BallotIcon />
  },
  {
    id: 5,
    path: '/results',
    name: 'Results',
    icon: <GradeIcon />
  },
  {
    id: 6,
    path: '/documents',
    name: 'Documents',
    icon: <AttachFileIcon />
  },
  {
    id: 7,
    path: '/discussions',
    name: 'Discussions',
    icon: <ForumIcon />
  },
  {
    id: 8,
    path: '/videos',
    name: 'Videos',
    icon: <OndemandVideoIcon />
  },
  {
    id: 9,
    path: '/notes',
    name: 'Notes',
    icon: <NotesIcon />
  }
]

const CourseSidebar = ({ matchingPath }) => {
  const config = {
    items: navItems.map(x => ({ ...x, path: `${matchingPath}${x.path}` })).sort((a, b) => a.name.localeCompare(b.name))
  }

  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <>
      <WhiteSpace height={500} />
      <Sidebar
        title='Science'
        config={config}
        onSelectItem={setSelectedItem}
        selectedItem={selectedItem}
      />
    </>
  )
}

export default withSidebar(Course, CourseSidebar)
