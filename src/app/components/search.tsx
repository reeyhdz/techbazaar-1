'use client'

import { FormEvent, ChangeEvent, useState } from 'react'
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import { useRouter } from 'next/navigation'

export default function Search() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const onSearch = (text) => {
    router.replace(`/search?s=${text}`)
  }
  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={"gray.200"}>
      <Container
        maxW={'lg'}
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>
          find your product
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={(e: FormEvent) => {
            e.preventDefault()
            onSearch(search)
          }}>
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'search-products'}
              type={'search'}
              placeholder={'Search'}
              aria-label={'Search'}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={'blue'}
              w="100%"
              type={'submit'}>
              Search
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  )
}
