import LoginForm from '../Components/hoc/login/Form'
import FormWrapper from '../Components/hoc/login/FormWrapper.styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import React from 'react'
import WhiteSpace from '../Components/common/WhiteSpace.styles'

const LoginPage = (props) => {
  return (
    <Box display='flex' justifyContent='center'>
      <FormWrapper>
        <Typography component='h2' variant='h4'>Login to Sikshya</Typography>
        <WhiteSpace />
        <LoginForm />
      </FormWrapper>
    </Box>
  )
}

export default LoginPage
