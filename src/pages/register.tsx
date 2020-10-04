import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/core'
import { useMutation } from 'urql'

import Wrapper from '../components/Wrapper'
import InputField from '../components/InputField'

interface RegisterProps {}

const REGISTER_MUTATION = `
  mutation Register($username: String!, $password: String!) {
    register(options: { username: $username, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`

const Register: FC<RegisterProps> = () => {
  const [, register] = useMutation(REGISTER_MUTATION)

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => {
          return register(values)
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
