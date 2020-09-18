import React from 'react'
import PropTypes from 'prop-types'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import PaddingAdder from '../../../common/PaddingAdder.styles'

/**
 * This component is used to display a list of MCQs
 *
 * @param {*} props All the `props` for this component
 */
const MultipleChoiceQuestions = props => {
  const {
    questions = [],
    answers = {},
    onUpdate = () => false
  } = props

  return (
    <PaddingAdder>
      {
        questions.map((question, index) => {
          return (
            <MultipleChoiceQuestion
              key={index}
              answer={answers[question.questionId]}
              {...question}
              onUpdate={onUpdate}
            />
          )
        })
      }
    </PaddingAdder>
  )
}

MultipleChoiceQuestions.propTypes = {
  questions: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default MultipleChoiceQuestions
