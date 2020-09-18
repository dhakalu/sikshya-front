import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import RadioButtonsGroup from '../../../common/radio/RadioGroup'
import CheckboxGroup from '../../../common/checkbox-group/CheckboxGroup'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    padding: 10,
    marginBottom: 10
  }
}))

const MultipleChoiceQuestion = props => {
  const classess = useStyles()

  const { type, questionId, onUpdate = () => false, answer = '' } = props

  const isSingle = type === 'single'

  const handleValueUpdate = (answer) => {
    onUpdate(questionId, answer)
  }

  return (
    <Paper elevation={0} square className={classess.paperRoot}>
      {isSingle ? (
        <RadioButtonsGroup
          {...props}
          onChange={handleValueUpdate}
        />
      ) : (
        <CheckboxGroup
          onChange={handleValueUpdate}
          {...props}
        />
      )}
    </Paper>
  )
}

MultipleChoiceQuestion.propTypes = {
  questionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  category: PropTypes.string,
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  ]),
  onUpdate: PropTypes.func.isRequired
}

export default MultipleChoiceQuestion
