import React from 'react'
import PropTypes from 'prop-types'
import TextEditor from '../../../common/texteditor/TextEditor'
import { Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    padding: 10,
    marginBottom: 10
  }
}))

const TextQuestsion = (props) => {
  const classess = useStyles()

  return (
    <Paper elevation={0} square className={classess.paperRoot}>
      <TextEditor
        {...props}
      />
    </Paper>
  )
}

TextQuestsion.propTypes = {

}

export default TextQuestsion
