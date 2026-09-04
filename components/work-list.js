import NextLink from 'next/link'
import { Box, Flex, HStack, Text, VStack, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { studioTokens } from '../lib/studio-tokens'
import FadeIn from './fade-in'

// Real, existing route is preserved for Kairo (the Moodly showcase page lives
// at /moodly). The other rows describe in-progress systems and intentionally
// carry no invented external links.
const PROJECTS = [
  {
    name: 'Kairo',
    description:
      'A calm personal calendar for remembering how life actually felt — mood, gently logged over time.',
    tags: ['React Native', 'Expo', 'Supabase', 'Product Design'],
    meta: '2026 · Building',
    href: '/moodly'
  },
  {
    name: 'Melody',
    description:
      'A music social platform that matches people by taste and the shows they want to be at.',
    tags: ['Social', 'Music', 'Recommendation'],
    meta: '2025 · Concept'
  },
  {
    name: 'Maxi · Second Brain',
    description:
      'Maxi is a living, Karpathy-style LLM-Wiki second brain — the mind. Maxi\u2019s Anatomy is its calm interface; Obsidian sits quietly in the back.',
    tags: ['AI Agents', 'LLM-Wiki', 'Knowledge Graph', 'Obsidian Backend'],
    meta: 'Ongoing'
  },
  {
    name: 'MaxisOS',
    description:
      'A personal AI operating system — agents, memory, and workflows quietly running the day.',
    tags: ['Agents', 'Memory', 'Workflows'],
    meta: 'Ongoing · Private'
  }
]

const Tags = ({ tags }) => (
  <HStack spacing={2} flexWrap="wrap" mt={3}>
    {tags.map((tag) => (
      <Text
        key={tag}
        as="span"
        fontSize="xs"
        color={studioTokens.textMuted}
        border="1px solid"
        borderColor={studioTokens.softBorder}
        borderRadius={studioTokens.radius}
        px={3}
        py={1}
        whiteSpace="nowrap"
      >
        {tag}
      </Text>
    ))}
  </HStack>
)

const RowInner = ({ project }) => (
  <Flex
    direction={{ base: 'column', md: 'row' }}
    align={{ base: 'flex-start', md: 'baseline' }}
    justify="space-between"
    gap={{ base: 2, md: 8 }}
  >
    <Box flex="1">
      <Text
        as="span"
        fontFamily="'M PLUS Rounded 1c', sans-serif"
        fontSize={{ base: '1.6rem', md: '2rem' }}
        fontWeight="500"
        letterSpacing="-0.03em"
        color={studioTokens.textPrimary}
        transition="color 0.4s ease"
        _groupHover={{ color: '#6f6f6f' }}
      >
        {project.name}
      </Text>
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        color={studioTokens.textSecondary}
        lineHeight="1.6"
        mt={2}
        maxW="560px"
      >
        {project.description}
      </Text>
      {/* Metadata softly revealed on hover/focus, but always present for a11y */}
      <Box
        opacity={{ base: 1, md: 0 }}
        transform={{ base: 'none', md: 'translateY(4px)' }}
        transition="opacity 0.5s ease, transform 0.5s ease"
        _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
        sx={{ '[role=group]:focus-within &': { opacity: 1, transform: 'translateY(0)' } }}
      >
        <Tags tags={project.tags} />
      </Box>
    </Box>
    <Text
      as="span"
      fontSize="sm"
      color={studioTokens.textMuted}
      whiteSpace="nowrap"
      flexShrink={0}
    >
      {project.meta}
    </Text>
  </Flex>
)

const WorkList = () => {
  return (
    <VStack spacing={0} align="stretch" w="100%">
      {PROJECTS.map((project, i) => (
        <FadeIn key={project.name} delay={i * 0.06}>
          {project.href ? (
            <LinkBox
              className="group"
              role="group"
              py={{ base: 7, md: 9 }}
              borderTop={i === 0 ? 'none' : '1px solid'}
              borderColor={studioTokens.softBorder}
              transition="opacity 0.4s ease"
              _hover={{ opacity: 1 }}
            >
              <LinkOverlay as={NextLink} href={project.href} aria-label={`${project.name} — view`}>
                <RowInner project={project} />
              </LinkOverlay>
            </LinkBox>
          ) : (
            <Box
              className="group"
              role="group"
              py={{ base: 7, md: 9 }}
              borderTop={i === 0 ? 'none' : '1px solid'}
              borderColor={studioTokens.softBorder}
            >
              <RowInner project={project} />
            </Box>
          )}
        </FadeIn>
      ))}
    </VStack>
  )
}

export default WorkList
