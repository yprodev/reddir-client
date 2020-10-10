import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import { Box, Button } from '@chakra-ui/core'
import { useMutation } from 'urql'

import Wrapper from '../components/Wrapper'
import InputField from '../components/InputField'
import { useLoginMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'

const Login: FC<{}> = () => {
  const router = useRouter()
  const [, login] = useLoginMutation()

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({ options: values })
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data?.login.errors))
          } else if (response.data?.login.errors) {
            //worked
            router.push('/')
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
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Login
