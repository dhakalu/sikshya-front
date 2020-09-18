import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BreadcrumContext } from '../../hoc/withBreadCrum'
import PaddingAdder from '../../common/PaddingAdder.styles'
import AssignmentForm from './AssignmentForm'

const bredcrumLinks = [
  { name: 'Courses', path: '/dashboard/courses' },
  { name: 'Science', path: '/courses/<some-course-id>/Science' },
  { name: 'Assignments', path: '/courses/<some-course-id>/assignments' },
  { name: 'Chapter I - Reading' }
]

export const details = {
  tasks: {
    text: [
      {
        questionId: 3,
        points: 5,
        category: 'Short Answer',
        description: 'List five features of living things'
      },
      {
        questionId: 4,
        points: 10,
        category: 'Long Answer',
        description: 'Compare and Contrast between living and non-living things'
      }
    ],
    mcq: [
      {
        questionId: 1,
        points: 1,
        category: 'Choose Correct Option',
        description: 'Which one of the following is not an animal',
        type: 'single',
        options: [
          {
            value: 'rabbit',
            label: 'Rabbit'
          },
          {
            value: 'rat',
            label: 'Rat'
          },
          {
            value: 'cat',
            label: 'Cat'
          },
          {
            value: 'stone',
            label: 'Stone'
          }
        ]
      },
      {
        questionId: 2,
        points: 2,
        category: 'Choose Correct Options',
        description: 'Choose two fruits',
        type: 'multi',
        options: [
          {
            value: 'apple',
            label: 'Apple'
          },
          {
            value: 'rat',
            label: 'Rat'
          },
          {
            value: 'mango',
            label: 'Mango'
          },
          {
            value: 'stone',
            label: 'Stone'
          }
        ]
      },

    ]
  }
}

const AssignmentDetail = props => {
  const { setLinks } = useContext(BreadcrumContext)

  useEffect(() => {
    setLinks(bredcrumLinks)
  }, [])

  return (
    <PaddingAdder>
      <AssignmentForm details={details} />
    </PaddingAdder>
  )
}

AssignmentDetail.propTypes = {

}

export default AssignmentDetail
