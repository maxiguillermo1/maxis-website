import { Box, Container, Text } from '@chakra-ui/react'
import { studioTokens } from '../lib/studio-tokens'
import FadeIn from './fade-in'

// SectionShell
// A calm, max-width section wrapper with a small muted label. Used for the
// Work / Info / Contact blocks below the hero so they share spacing + rhythm.
const SectionShell = ({ id, label, children, maxW = '760px' }) => {
  return (
    <Box
      as="section"
      id={id}
      aria-labelledby={`${id}-label`}
      w="100%"
      py={{ base: 20, md: 32 }}
      px={{ base: 6, md: 8 }}
      position="relative"
      zIndex={1}
    >
      <Container maxW={maxW} px={0}>
        <FadeIn>
          <Text
            id={`${id}-label`}
            as="h2"
            fontFamily="'M PLUS Rounded 1c', sans-serif"
            fontSize="sm"
            fontWeight="500"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color={studioTokens.textMuted}
            mb={{ base: 8, md: 12 }}
          >
            {label}
          </Text>
        </FadeIn>
        {children}
      </Container>
    </Box>
  )
}

export default SectionShell
