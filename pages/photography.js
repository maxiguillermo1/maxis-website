import NextLink from 'next/link'
import Head from 'next/head'
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  VStack,
  SimpleGrid,
  Image
} from '@chakra-ui/react'

const Photography = () => {
  // List of photo filenames
  const photos = Array.from({ length: 30 }, (_, i) => i + 1)
    .filter(num => num !== 14) // Remove 14.jpg as it doesn't exist
    .map(num => `/images/favphotos/${num}.jpg`)

  return (
    <>
      <Head>
        <title>Photography - Maxwell Guillermo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Photography by Maxwell Guillermo" />
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
        <Container maxW="container.lg" px={{ base: 6, md: 8 }} py={8}>
          <VStack spacing={6} align="flex-start" maxW="100%">
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
              Photography
            </Heading>

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="black"
              fontStyle="italic"
              fontFamily="sans-serif"
            >
              A collection of my favorite photographs
            </Text>

            <Text fontSize={{ base: 'md', md: 'lg' }} color="black">
              —
            </Text>

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
              spacing={4}
              w="100%"
            >
              {photos.map((photo, index) => (
                <Box
                  key={index}
                  position="relative"
                  width="100%"
                  paddingBottom="100%"
                  overflow="hidden"
                  bg="gray.100"
                >
                  <Image
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    objectFit="cover"
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    _hover={{ opacity: 0.8 }}
                    transition="opacity 0.2s"
                  />
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default Photography

export { getServerSideProps } from '../components/chakra'

