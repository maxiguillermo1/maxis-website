import NextLink from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Flex, Link, Text } from '@chakra-ui/react'

// Drop a screenshot of the app in /public and set this path.
// Example: '/images/kairo.png'
const APP_SCREENSHOT = null

const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'

const linkProps = {
  color: '#1a4fd8',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  _hover: { color: '#1239a8' }
}

const TextLink = ({ href, children, external }) => {
  if (external) {
    return (
      <Link href={href} isExternal {...linkProps}>
        {children}
      </Link>
    )
  }
  return (
    <Link as={NextLink} href={href} {...linkProps}>
      {children}
    </Link>
  )
}

const BulletList = ({ children }) => (
  <Box
    as="ul"
    m={0}
    pl="1.25em"
    sx={{
      listStyleType: 'disc',
      '& > li + li': { mt: '0.4em' }
    }}
  >
    {children}
  </Box>
)

const PhoneFrame = () => (
  <Box
    position="relative"
    flexShrink={0}
    w={{ base: '230px', md: '280px' }}
    sx={{ aspectRatio: '9 / 19.5' }}
    bg="#111"
    borderRadius="42px"
    boxShadow="0 18px 50px rgba(0, 0, 0, 0.16)"
    aria-label={APP_SCREENSHOT ? 'App preview' : 'App screenshot placeholder'}
  >
    <Box
      position="absolute"
      top="11px"
      right="11px"
      bottom="11px"
      left="11px"
      borderRadius="32px"
      overflow="hidden"
      bg="#f3f3f3"
    >
      {APP_SCREENSHOT ? (
        <Image
          src={APP_SCREENSHOT}
          alt="App screenshot"
          fill
          style={{ objectFit: 'cover' }}
          sizes="280px"
          priority
        />
      ) : (
        <Flex h="100%" align="center" justify="center" px={6}>
          <Text
            fontFamily={FONT}
            fontSize="sm"
            color="#9a9a9a"
            textAlign="center"
          >
            App screenshot
          </Text>
        </Flex>
      )}
    </Box>

    <Box
      position="absolute"
      top="20px"
      left="50%"
      transform="translateX(-50%)"
      w="96px"
      h="28px"
      bg="#111"
      borderRadius="full"
      zIndex={2}
    />

    <Box
      position="absolute"
      bottom="18px"
      left="50%"
      transform="translateX(-50%)"
      w="96px"
      h="4px"
      bg="#111"
      borderRadius="full"
      zIndex={2}
      opacity={APP_SCREENSHOT ? 0.85 : 0.35}
    />
  </Box>
)

const Home = () => {
  return (
    <>
      <Head>
        <title>Maxi Guillermo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Maxi Guillermo — software, AI, and a calm personal calendar called Kairo."
        />
      </Head>

      <Flex
        minH="100vh"
        w="100%"
        bg="white"
        color="#111"
        fontFamily={FONT}
        fontSize="16px"
        lineHeight="1.55"
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        justify="center"
        gap={{ base: 12, lg: '6.5rem' }}
        px={{ base: 6, md: 10 }}
        py={{ base: 12, lg: 8 }}
      >
        <PhoneFrame />

        <Box w="100%" maxW="460px">
          <Text as="h1" fontWeight="700" fontSize="1.125rem" mb={6}>
            Maxi Guillermo
          </Text>

          <Text mb={2}>Some things about me:</Text>
          <BulletList>
            <li>Born and raised in the Bay Area</li>
            <li>
              Studied Computer Science with a minor in Cybersecurity at{' '}
              <TextLink href="https://www.csulb.edu/" external>
                CSU Long Beach
              </TextLink>
            </li>
            <li>
              Childhood cancer survivor with a passion for oncology care and
              research
            </li>
            <li>
              Pursuing nursing, with the goal of becoming a nurse practitioner
              and software engineer
            </li>
            <li>
              Building <TextLink href="/moodly">Kairo</TextLink>, a calm
              calendar for remembering how each day felt, and a personal second
              brain with agents, memory, and workflows
            </li>
            <li>Love learning about new AI technologies and infrastructure</li>
            <li>
              Into crypto, investing, trading, and learning how markets work
            </li>
            <li>Also into design, food, and music</li>
            <li>
              Photos live in my <TextLink href="/gallery">gallery</TextLink>
            </li>
          </BulletList>

          <Text mt={8} mb={2}>
            Some things I&apos;ve written:
          </Text>
          <BulletList>
            <li>
              <TextLink href="/writings">Writings</TextLink>
              <Text as="span" fontStyle="italic">
                {' '}
                (coming soon)
              </Text>
            </li>
          </BulletList>

          <Text mt={8} mb={2}>
            Where to find me:
          </Text>
          <BulletList>
            <li>
              <TextLink href="https://github.com/maxiguillermo1" external>
                GitHub
              </TextLink>
            </li>
            <li>
              <TextLink href="https://twitter.com/astrofying" external>
                Twitter
              </TextLink>
            </li>
            <li>
              <TextLink
                href="https://www.linkedin.com/in/maxwell-guillermo-67395520b"
                external
              >
                LinkedIn
              </TextLink>
            </li>
            <li>
              <TextLink href="mailto:maxiguillermo1@gmail.com" external>
                Email
              </TextLink>
            </li>
          </BulletList>

          <Link
            as={NextLink}
            href="/legacy/me"
            display="inline-block"
            mt={8}
            px={3}
            py={1.5}
            fontSize="sm"
            lineHeight="1.2"
            color="#444"
            border="1px solid #d4d4d4"
            borderRadius="6px"
            textDecoration="none"
            _hover={{ color: '#111', borderColor: '#111', textDecoration: 'none' }}
          >
            Legacy site
          </Link>
        </Box>
      </Flex>
    </>
  )
}

export default Home

export { getServerSideProps } from '../components/chakra'
