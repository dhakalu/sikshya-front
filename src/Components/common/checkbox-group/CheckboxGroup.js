import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Checkbox } from '@material-ui/core'
import { QuestionCategory } from '../radio/RadioGroup'

const useStyles = makeStyles((theme) => ({
  description: {
    margin: '10px 0'
  },
  marks: {
    margin: '0 10px'
  }
}))

const CheckboxGroup = ({
  category,
  description,
  options = [],
  answer = [],
  onChange = () => false, points
}) => {
  const handleChange = (event, value) => {
    if (answer.includes(value)) {
      onChange(answer.filter(x => x !== value))
    } else {
      onChange([...answer, value])
    }
  }

  const classes = useStyles()
  return (
    <FormControl component='fieldset' fullWidth>
      <QuestionCategory category={category} points={points} pointsClass={classes.marks} />
      {description && (
        <Typography className={classes.description}>
          {description}
        </Typography>
      )}
      <div aria-label='label' name='label'>
        {
          options.map(({ value, label }) => {
            return (
              <div key={value}>
                <FormControlLabel
                  value={value}
                  control={<Checkbox onChange={(event) => handleChange(event, value)} />}
                  label={label}
                />
              </div>
            )
          })
        }
      </div>
    </FormControl>
  )
}

export default CheckboxGroup

CheckboxGroup.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}
