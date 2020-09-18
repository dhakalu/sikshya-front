import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MultipleChoiceQuestions from '../questions/mcq/MultipleChoiceQuestions'
import TextQuestsions from './TextQuestsions'
import SpeedDials from '../../common/sppeddial/SpeedDial'

/**
 * Component that shows the questions to students so
 *  that they can answer them
 * @param {*} props
 */
const AssignmentForm = props => {
  const {
    details = {},
    answers = {}
  } = props

  const [dirtyAnswers, setDirtyAnswers] = useState(answers)

  const { tasks = {} } = details
  const { text, mcq } = tasks
  /**
   * This function can be used to update the answer to any question on the current assignment
   * @param {UUID} questionId The question Id to which the answer belongs to
   * @param {any} answer Answer of the question
   */
  const updateAnswer = (questionId, answer) => {
    setDirtyAnswers({ ...dirtyAnswers, [questionId]: answer })
  }

  return (
    <>
      <MultipleChoiceQuestions
        questions={mcq}
        answers={dirtyAnswers}
        onUpdate={updateAnswer}
      />
      <TextQuestsions
        questions={text}
        answers={dirtyAnswers}
        onUpdate={updateAnswer}
      />
      <SpeedDials />
    </>
  )
}

AssignmentForm.propTypes = {
  details: PropTypes.object.isRequired
}

export default AssignmentForm
