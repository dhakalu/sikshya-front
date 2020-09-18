import React from 'react'
import SchoolsGrid from '../Components/browse-schools/SchoolsGrid'
import styled from 'styled-components'
import SchoolBrowseForm from '../Components/browse-schools/SchoolBrowseForm'
import { getFakeSchools } from '../datastubs/schools-faker'
import withChatBot from '../Components/hoc/withChatBot'

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

export default withChatBot(SchoolPage)

const SchoolPageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`
