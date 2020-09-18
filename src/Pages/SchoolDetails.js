import React from 'react'
import PropTypes from 'prop-types'
import SchoolHeader from './SchoolHeader'
import SchoolNav from '../Components/school-detail/SchoolNav'
import styled from 'styled-components'
import withChatBot from '../Components/hoc/withChatBot'

const SchoolDetails = props => {
  const {
    name = 'Some School Name'
  } = props
  return (
    <SchoolDetailsWrapper>
      <div className='innerConatiner'>
        <SchoolHeader name={name} />
        <SchoolNav />
      </div>
    </SchoolDetailsWrapper>
  )
}

SchoolDetails.propTypes = {
  /** Name of the school */
  name: PropTypes.string.isRequired
}

export default withChatBot(SchoolDetails)

const SchoolDetailsWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
    flex: 1;
    margin: auto;
    width: 80%;

    .innerConatiner {
        width: 100%;
    }
`
