'use client'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'#'}>
            Home
          </Box>
          <Box as="a" href={'#'}>
            About
          </Box>
          <Box as="a" href={'#'}>
            Blog
          </Box>
          <Box as="a" href={'#'}>
            Contact
          </Box>
        </Stack>
        <Text>© 2023 Chakra Templates. All rights reserved</Text>
      </Container>
    </Box>
  )
}
