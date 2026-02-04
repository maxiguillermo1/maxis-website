import { useState } from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  VStack,
  SimpleGrid,
  Badge,
  UnorderedList,
  ListItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'

const screens = [
  {
    src: '/images/moodly/calendar-screen-1-view.jpg',
    title: 'Calendar — Monthly View (Example 1)',
    bullets: [
      'Shows a month-by-month view of logged mood entries',
      'Colored circles indicate completed check-ins',
      'Color reflects mood selected for that date',
      'Empty days indicate no entry recorded',
      'Select a day to view or edit its entry'
    ]
  },
  {
    src: '/images/moodly/calendar-screen-2-view.jpg',
    title: 'Calendar — Multi-Month View (Example 2)',
    bullets: [
      'Scroll through multiple months in a continuous view',
      'Colors create visual patterns across weeks and months',
      'Empty days indicate no entry recorded',
      'Designed for quick pattern recognition'
    ]
  },
  {
    src: '/images/moodly/calendar-view-1.jpg',
    title: 'Calendar — Year Overview (2025 Example)',
    bullets: [
      'Displays an overview of an entire year of mood entries',
      'Review long-term trends and month-to-month patterns',
      'Compare periods at a glance'
    ]
  },
  {
    src: '/images/moodly/calendar-view-2.jpg',
    title: 'Calendar — Year Overview (2026 Example)',
    bullets: [
      'Shows year layout with partial completion for current year',
      'Highlights logged days vs unlogged future days',
      'Helps track consistency over time'
    ]
  },
  {
    src: '/images/moodly/journal-entry-view.jpg',
    title: 'Today — Journal Entry',
    bullets: [
      'Select one mood (A+ to F) for the day',
      'Add an optional note for context',
      'Save stores the entry and updates calendar + journal',
      'Designed to keep daily reflection low-effort'
    ]
  },
  {
    src: '/images/moodly/journal-log-view.jpg',
    title: 'Journal — Log View',
    bullets: [
      'Chronological list of entries (most recent first)',
      'Note preview for quick context',
      'Mood badge summarizes the day at a glance',
      'Tap an entry to view or edit'
    ]
  },
  {
    src: '/images/moodly/settings-view.jpg',
    title: 'Settings — Summary & Preferences',
    bullets: [
      'Shows total entries and most common mood',
      'Mood breakdown with counts and percentages',
      'Calendar appearance preferences (full color vs minimal)',
      'Basic app metadata (version)'
    ]
  }
]

const Moodly = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeScreen = screens[activeIndex]

  const openModal = index => {
    setActiveIndex(index)
    onOpen()
  }

  return (
    <>
      <Head>
        <title>Moodly - Maxwell Guillermo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Moodly project progress by Maxwell Guillermo" />
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
              Moodly
            </Heading>

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="black"
              fontStyle="italic"
              fontFamily="sans-serif"
            >
              Daily mood reflection with a visual calendar heat map.
            </Text>

            <Box display="flex" alignItems="center" gap={3} flexWrap="wrap">
              <Badge colorScheme="orange">In progress</Badge>
              <Link
                href="https://github.com/maxiguillermo1/moodly"
                target="_blank"
                textDecoration="none"
                color="blue.600"
                fontFamily="sans-serif"
                _hover={{ textDecoration: 'underline' }}
              >
                GitHub
              </Link>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="black">
                React Native + Expo
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="black">
                Private + offline-first
              </Text>
            </Box>

            <Text fontSize={{ base: 'md', md: 'lg' }} color="black">
              Moodly is a lightweight journaling app that makes daily reflection
              feel simple and visual. It centers your entries in a calendar-style
              heat map so you can spot trends at a glance and keep a consistent
              habit without friction.
            </Text>

            <Text fontSize={{ base: 'md', md: 'lg' }} color="black">
              —
            </Text>

            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="black">
              Screens
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
              {screens.map((screen, index) => (
                <Box key={screen.title}>
                  <Box
                    position="relative"
                    borderRadius="12px"
                    overflow="hidden"
                    paddingBottom="140%"
                    cursor="pointer"
                    onClick={() => openModal(index)}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </Box>
                  <Text fontWeight="600" mt={3}>
                    {screen.title}
                  </Text>
                  <UnorderedList spacing={1} mt={2} ml={5}>
                    {screen.bullets.map(bullet => (
                      <ListItem key={bullet}>{bullet}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              ))}
            </SimpleGrid>

            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="black" mt={6}>
              What I’m building next
            </Heading>
            <UnorderedList spacing={2} ml={5}>
              <ListItem>Polish the daily flow and reduce taps</ListItem>
              <ListItem>Improve performance on year overview views</ListItem>
              <ListItem>Refine the journaling UI and microcopy</ListItem>
              <ListItem>Expand accessibility and offline resilience</ListItem>
            </UnorderedList>

            <Link
              as={NextLink}
              href="/legacy/works"
              color="blue.600"
              textDecoration="none"
              _hover={{ textDecoration: 'underline' }}
            >
              Back to Portfolio
            </Link>
            <Link
              href="https://github.com/maxiguillermo1/moodly"
              target="_blank"
              textDecoration="none"
              color="blue.600"
              _hover={{ textDecoration: 'underline' }}
            >
              GitHub
            </Link>
          </VStack>
        </Container>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{activeScreen?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box position="relative" borderRadius="12px" overflow="hidden" paddingBottom="56.25%">
              {activeScreen && (
                <Image
                  src={activeScreen.src}
                  alt={activeScreen.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Moodly
export { getServerSideProps } from '../components/chakra'
