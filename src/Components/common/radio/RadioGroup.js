import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  description: {
    margin: '10px 0'
  },
  marks: {
    margin: '0 10px'
  }
}))

export const QuestionCategory = ({ category, points, pointsClass }) => (
  <Box display='flex' justifyContent='space-between'>
    <FormLabel component='legend'>{category}</FormLabel>
    <FormLabel component='legend' className={pointsClass}>{points}</FormLabel>
  </Box>
)

const RadioButtonsGroup = ({ category, description, points, options = [], value, onChange = () => false }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
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
      <RadioGroup aria-label='label' name='label' value={value} onChange={handleChange}>
        {
          options.map(({ value, label }) => {
            return (
              <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
            )
          })
        }
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonsGroup

RadioButtonsGroup.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}
