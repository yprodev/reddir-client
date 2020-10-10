import React, { FC } from 'react'
import { Box, Link, Flex } from '@chakra-ui/core'
import NextLink from 'next/link'

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <Flex bg='tomato' p={4}>
      <Box ml={'auto'}>
        <NextLink href='/login'>
          <Link color='white' mr={2}>
            login
          </Link>
        </NextLink>
        <NextLink href='/register'>
          <Link color='white' mr={2}>
            register
          </Link>
        </NextLink>
      </Box>
    </Flex>
  )
}

export default NavBar
