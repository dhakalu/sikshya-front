import React from 'react'
import { getKeys } from '../utils/ObjectUtils'
import DataTable from '../common/table/DataTable'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { PaddingAdder } from '../common/PaddingAdder.styles'
import { useHistory } from 'react-router-dom'

const createData = (courseName, teacher, time, assignmentsDue, attendence, gpa) => {
  return { courseName, teacher, assignmentsDue, days: 'S M T W TH F', time, attendence, gpa }
}

const rows = [
  createData('Science', 'Saurab Bhandari', '10:00 AM - 10:45AM', 1, '10/30', 4.0),
  createData('Maths', 'Paras Kadkha', '10:00 AM - 10:45AM', 0, '30/30', 4.3),
  createData('Environment, Health and Population', 'Ranjana Adhikari', '10:00 AM - 10:45AM', 10, '30/30', 6.0),
  createData('Social Studies', 'Bhude Budo', '10:00 AM - 10:45AM', 3, '30/30', 4.3),
  createData('Nepali', 'Guru Bau', '10:00 AM - 10:45AM', 1, '30/30', 3.9),
  createData('English', 'Khaire Mula', '10:00 AM - 10:45AM', 0.0, '30/30', 3.9),
  createData('Accounting', 'Paisae Pasa', '10:00 AM - 10:45AM', 0.0, '30/30', 3.9),
  createData('Maths II', 'Paisae Pasa', '10:00 AM - 10:45AM', 0.0, '30/30', 3.9),
  createData('G.K', 'Paisae Pasa', '10:00 AM - 10:45AM', 0.0, '30/30', 3.9),
]

const columns = getKeys(createData('Frozen yoghurt', 159, 6.0, 24, 4.0)).map(x => (
  {
    label: x.toUpperCase(),
    id: x
  }
))

const CoursesList = ({ path }) => {

  const history = useHistory()

  const onSelectCourse = (course) => {
    history.push(`${path}/${course.courseName}`)
  }

  return (
    <CoursesListWrapper>
      <PaddingAdder>
        <Typography component='h3' variant='h4'>Courses</Typography>
      </PaddingAdder>
      <DataTable columns={columns} records={rows} onClickRow={onSelectCourse} />
    </CoursesListWrapper>
  )
}

export default CoursesList

const CoursesListWrapper = styled.div`padding: 10px`
