import React from 'react'
import SchoolsGrid from '../Components/browse-schools/SchoolsGrid'
import styled from 'styled-components'
import SchoolBrowseForm from '../Components/browse-schools/SchoolBrowseForm'
import { getFakeSchools } from '../datastubs/schools-faker'

const createData = (id, name, coverImage = 'https://via.placeholder.com/150', pitch, location) => ({ id, name, coverImage, pitch, location })

const schools = [
  createData(1, 'Some name of the school', undefined, 'This area includes the pitch of school. This can be used to have short info of school.', 'Some Location'),
  createData(2, 'Xavier International College', undefined, 'World class education from experienced teachers aided by world class Artifical Intellenge of Sikshya. ', 'Kalopool')
]

const SchoolPage = (props) => {
  return (
    <SchoolPageWrapper>
      <div>
        <SchoolBrowseForm />
        <SchoolsGrid schools={getFakeSchools(100)} />
      </div>
    </SchoolPageWrapper>
  )
}

export default SchoolPage

const SchoolPageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`
