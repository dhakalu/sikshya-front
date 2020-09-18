import React from 'react'
import PropTypes from 'prop-types'
import TextQuestsion from '../questions/text/TextQuestsion'
import PaddingAdder from '../../common/PaddingAdder.styles'

const TextQuestsions = props => {
  const { questions, answers, onUpdate } = props
  return (
    <PaddingAdder>
      {
        questions.map((question, i) => (
          <TextQuestsion
            key={i}
            {...question}
            answer={answers[question.questionId]}
            onUpdate={onUpdate}
          />
        ))
      }
    </PaddingAdder>
  )
}

TextQuestsions.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default TextQuestsions
