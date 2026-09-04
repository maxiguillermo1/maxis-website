import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { studioTokens } from '../lib/studio-tokens'
import FadeIn from './fade-in'

const THREADS = [
  'Software Engineering',
  'AI / ML',
  'UX Systems',
  'Agentic Workflows',
  'Second Brain Tools',
  'Healthcare + Nursing Pathway',
  'Market Research'
]

const InfoSection = () => {
  return (
    <VStack spacing={{ base: 8, md: 10 }} align="flex-start" w="100%">
      <FadeIn>
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          color={studioTokens.textPrimary}
          lineHeight="1.6"
          letterSpacing="-0.01em"
          maxW="640px"
        >
          I&apos;m Maxi — an engineer building quiet systems for thought. I work
          where software, AI, and design meet, shaping tools that hold memory,
          reduce noise, and let ideas move on their own.
        </Text>
      </FadeIn>

      <FadeIn delay={0.08}>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={studioTokens.textSecondary}
          lineHeight="1.7"
          maxW="640px"
        >
          I studied Computer Science with a minor in Cybersecurity at California
          State University, Long Beach. Lately my attention runs across agentic
          workflows, second-brain systems, healthcare, and the markets behind
          AI infrastructure.
        </Text>
      </FadeIn>

      <FadeIn delay={0.16}>
        <HStack spacing={2} flexWrap="wrap" maxW="640px">
          {THREADS.map((thread) => (
            <Text
              key={thread}
              as="span"
              fontSize="sm"
              color={studioTokens.textMuted}
              border="1px solid"
              borderColor={studioTokens.softBorder}
              borderRadius={studioTokens.radius}
              px={3}
              py={1}
              mb={2}
              whiteSpace="nowrap"
            >
              {thread}
            </Text>
          ))}
        </HStack>
      </FadeIn>
    </VStack>
  )
}

export default InfoSection
