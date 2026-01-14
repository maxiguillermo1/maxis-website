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

const Home = () => {
  return (
    <>
      <Head>
        <title>Maxwell Guillermo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Maxwell Guillermo - Software engineer and product designer" />
      </Head>
      <Box
        minH="100vh"
        w="100%"
        bg="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top={0}
        left={0}
      >
        <Container maxW="container.md" px={{ base: 6, md: 8 }} py={20}>
          <VStack spacing={6} align="flex-start" maxW="700px">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="700"
              color="black"
              lineHeight="1.2"
              fontFamily="serif"
            >
              Maxi Guillermo
            </Heading>

            <HStack
              spacing={2}
              fontSize={{ base: 'sm', md: 'md' }}
              color="blue.600"
              fontFamily="sans-serif"
              flexWrap="wrap"
            >
              <Link
                href="https://github.com/maxiguillermo1"
                target="_blank"
                textDecoration="none"
                color="blue.600"
                _hover={{ textDecoration: 'underline' }}
              >
                github
              </Link>
              <Text as="span" color="black">|</Text>
              <Link
                as={NextLink}
                href="/writings"
                textDecoration="none"
                color="blue.600"
                _hover={{ textDecoration: 'underline' }}
              >
                writing
              </Link>
              <Text as="span" color="black">|</Text>
              <Link
                as={NextLink}
                href="/gallery"
                textDecoration="none"
                color="blue.600"
                _hover={{ textDecoration: 'underline' }}
              >
                gallery
              </Link>
              <Text as="span" color="black">|</Text>
              <Link
                as={NextLink}
                href="/legacy/me"
                textDecoration="none"
                color="blue.600"
                _hover={{ textDecoration: 'underline' }}
              >
                legacy website
              </Link>
            </HStack>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="black"
              lineHeight="1.6"
            >
              I'm an aspiring software engineer and product designer, transforming problems into fun and approachable solutions for all.
            </Text>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="black"
              lineHeight="1.6"
            >
              I'm building{' '}
              <Link
                href="#"
                textDecoration="underline"
                color="blue.600"
                fontFamily="sans-serif"
                _hover={{ opacity: 0.7 }}
              >
                Moody
              </Link>
              . An app to journal how your day went.
            </Text>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="black"
              lineHeight="1.6"
            >
             In my past, I built full-stack web applications, developed AI/ML systems, applied cybersecurity principles, designed user-centered UI/UX experiences, and worked with financial analysis using predictive and decision-based frameworks. I studied Computer Science with a minor in Cybersecurity at California State University, Long Beach. Go Beach! 
            </Text>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="black"
              lineHeight="1.6"
            >
              Connect with me on{' '}
              <Link
                href="https://www.linkedin.com/in/maxwell-guillermo-67395520b"
                target="_blank"
                textDecoration="underline"
                color="black"
                _hover={{ opacity: 0.7 }}
              >
                linkedin
              </Link>
              {' '}or at{' '}
              <Link
                href="mailto:maxiguillermo1@gmail.com"
                textDecoration="underline"
                color="black"
                _hover={{ opacity: 0.7 }}
              >
                maxiguillermo1 at gmail dot com
              </Link>
              .
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default Home

export { getServerSideProps } from '../components/chakra'
