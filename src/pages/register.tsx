import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/core'
import { useMutation } from 'urql'

import Wrapper from '../components/Wrapper'
import InputField from '../components/InputField'
import { useRegisterMutation } from '../generated/graphql'

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [, register] = useRegisterMutation()

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register(values)
          if (response.data?.register.errors) {
            setErrors({
              username: 'Hey Im an error'
            })
          }
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
