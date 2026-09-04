import { Box, HStack, Link } from '@chakra-ui/react'
import { studioTokens } from '../lib/studio-tokens'

// FloatingNav
// A small, calm pill fixed to the top-center. A circular "M" mark on the left,
// then Work / Info / Contact that smooth-scroll to the matching sections.
const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'info', label: 'Info' },
  { id: 'contact', label: 'Contact' }
]

const smoothScrollTo = (id) => {
  if (typeof document === 'undefined') return
  const el = document.getElementById(id)
  if (!el) return
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({
    behavior: prefersReduced ? 'auto' : 'smooth',
    block: 'start'
  })
}

const FloatingNav = () => {
  const handleClick = (e, id) => {
    e.preventDefault()
    smoothScrollTo(id)
    if (typeof history !== 'undefined') {
      history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <Box
      as="nav"
      aria-label="Primary"
      position="fixed"
      top={{ base: 4, md: 6 }}
      left="50%"
      transform="translateX(-50%)"
      zIndex={20}
      sx={{ backdropFilter: studioTokens.blur, WebkitBackdropFilter: studioTokens.blur }}
      bg={studioTokens.navBackground}
      borderRadius={studioTokens.radius}
      border="1px solid"
      borderColor={studioTokens.softBorder}
      px={{ base: 2, md: 3 }}
      py={{ base: 1.5, md: 2 }}
    >
      <HStack spacing={{ base: 2, md: 3 }} align="center">
        <Link
          href="#top"
          onClick={(e) => handleClick(e, 'top')}
          aria-label="Back to top"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={{ base: '26px', md: '30px' }}
          h={{ base: '26px', md: '30px' }}
          borderRadius="full"
          bg="rgba(255,255,255,0.28)"
          color={studioTokens.navText}
          fontFamily="'M PLUS Rounded 1c', sans-serif"
          fontWeight="700"
          fontSize={{ base: 'xs', md: 'sm' }}
          lineHeight="1"
          _hover={{ bg: 'rgba(255,255,255,0.42)' }}
          transition="background 0.3s ease"
        >
          M
        </Link>

        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            color={studioTokens.navText}
            fontSize={{ base: 'xs', md: 'sm' }}
            fontWeight="500"
            letterSpacing="0.01em"
            px={{ base: 1.5, md: 2 }}
            opacity={0.92}
            _hover={{ opacity: 1, textDecoration: 'none' }}
            transition="opacity 0.3s ease"
          >
            {item.label}
          </Link>
        ))}
      </HStack>
    </Box>
  )
}

export default FloatingNav
