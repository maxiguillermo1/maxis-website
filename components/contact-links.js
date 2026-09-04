import NextLink from 'next/link'
import { Box, Link, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { studioTokens } from '../lib/studio-tokens'
import FadeIn from './fade-in'

// SoftLink — a calm pill link used for both contact and in-site navigation.
const SoftLink = ({ href, children, external, ...props }) => {
  const common = {
    fontSize: { base: 'sm', md: 'md' },
    color: studioTokens.textPrimary,
    border: '1px solid',
    borderColor: studioTokens.softBorder,
    borderRadius: studioTokens.radius,
    px: 5,
    py: 2.5,
    bg: 'rgba(255,255,255,0.4)',
    transition: 'opacity 0.35s ease, color 0.35s ease, background 0.35s ease',
    _hover: { opacity: 1, color: '#6f6f6f', bg: 'rgba(255,255,255,0.7)', textDecoration: 'none' },
    _focusVisible: { outline: '2px solid rgba(120,120,120,0.5)', outlineOffset: '3px' }
  }

  if (external) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" {...common} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <Link as={NextLink} href={href} {...common} {...props}>
      {children}
    </Link>
  )
}

// Real handles/links preserved from the existing site.
const CONTACTS = [
  { label: 'Email', href: 'mailto:maxiguillermo1@gmail.com', external: true },
  { label: 'GitHub', href: 'https://github.com/maxiguillermo1', external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maxwell-guillermo-67395520b',
    external: true
  },
  { label: 'X / Twitter', href: 'https://twitter.com/astrofying', external: true },
  // Placeholder: points at the existing resume asset until a dedicated
  // resume page/PDF exists.
  { label: 'Resume', href: '/images/contents/resume.jpg', external: true }
]

// Existing site routes kept reachable from the new home page.
const ELSEWHERE = [
  { label: 'Writing', href: '/writings' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Legacy site', href: '/legacy/me' }
]

const ContactLinks = () => {
  return (
    <VStack spacing={{ base: 8, md: 10 }} align="flex-start" w="100%">
      <FadeIn>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          color={studioTokens.textPrimary}
          lineHeight="1.6"
          maxW="600px"
        >
          Open to quiet conversations about calm software, AI systems, and
          research. The inbox is always a good place to start.
        </Text>
      </FadeIn>

      <FadeIn delay={0.08}>
        <Wrap spacing={3}>
          {CONTACTS.map((c) => (
            <WrapItem key={c.label}>
              <SoftLink href={c.href} external={c.external}>
                {c.label}
              </SoftLink>
            </WrapItem>
          ))}
        </Wrap>
      </FadeIn>

      <FadeIn delay={0.16}>
        <Box>
          <Text
            fontSize="xs"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color={studioTokens.textMuted}
            mb={3}
          >
            Elsewhere
          </Text>
          <Wrap spacing={3}>
            {ELSEWHERE.map((c) => (
              <WrapItem key={c.label}>
                <SoftLink href={c.href}>{c.label}</SoftLink>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </FadeIn>

      <FadeIn delay={0.24}>
        <Text fontSize="xs" color={studioTokens.textMuted} pt={4}>
          © {new Date().getFullYear()} Maxi Guillermo
        </Text>
      </FadeIn>
    </VStack>
  )
}

export default ContactLinks
