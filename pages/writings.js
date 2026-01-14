import NextLink from 'next/link'
import Head from 'next/head'
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  VStack,
  HStack
} from '@chakra-ui/react'

const Writings = () => {
  const writings = [
    { title: 'Coming Soon', date: 'Coming 2026', link: '#' },
    // Add more writings here as you create them
    // Example format:
    // { title: 'My First Post', date: 'Jan 2025', link: '/writings/my-first-post', hasAsterisk: false },
  ]

  return (
    <>
      <Head>
        <title>Writings - Maxwell Guillermo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Writings by Maxwell Guillermo" />
      </Head>
      <Box
        minH="100vh"
        w="100%"
        bg="white"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        position="absolute"
        top={0}
        left={0}
        pt={20}
      >
        <Container maxW="container.md" px={{ base: 6, md: 8 }} py={8}>
          <VStack spacing={6} align="flex-start" maxW="700px">
            <Link
              as={NextLink}
              href="/"
              fontSize={{ base: 'sm', md: 'md' }}
              color="blue.600"
              textDecoration="none"
              fontFamily="sans-serif"
              _hover={{ textDecoration: 'underline' }}
            >
              Home
            </Link>

            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="700"
              color="black"
              lineHeight="1.2"
              fontFamily="sans-serif"
            >
              Writings
            </Heading>

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="black"
              fontStyle="italic"
              fontFamily="sans-serif"
            >
              Shorter musings & explorations. Posts with technical projects denoted with (*)
            </Text>

            <Text fontSize={{ base: 'md', md: 'lg' }} color="black">
              —
            </Text>

            <VStack spacing={4} align="flex-start" w="100%">
              {writings.map((writing, index) => (
                <HStack
                  key={index}
                  spacing={3}
                  align="baseline"
                  flexWrap="wrap"
                >
                  <Link
                    href={writing.link}
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="blue.600"
                    textDecoration="underline"
                    fontFamily="sans-serif"
                    _hover={{ opacity: 0.7 }}
                  >
                    {writing.title}
                    {writing.hasAsterisk && '*'}
                  </Link>
                  <Text
                    as="span"
                    fontSize={{ base: 'sm', md: 'md' }}
                    color="black"
                    fontStyle="italic"
                    fontFamily="sans-serif"
                  >
                    {writing.date}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default Writings

export { getServerSideProps } from '../components/chakra'

