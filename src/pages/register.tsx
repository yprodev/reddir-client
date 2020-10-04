import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/core'

import Wrapper from '../components/Wrapper'
import InputField from '../components/InputField'

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => {
          console.log('values are: ', values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name='username' label='Username' placeholder='Username' />
            <Box mt='4'>
              <InputField name='password' label='Password' placeholder='Password' type='password' />
            </Box>
            <Button mt='4' type='submit' isLoading={isSubmitting} variantColor='teal'>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Register
