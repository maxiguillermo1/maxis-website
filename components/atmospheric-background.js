import { Box } from '@chakra-ui/react'
import { studioTokens } from '../lib/studio-tokens'

// AtmosphericBackground
// A fixed, full-bleed calm backdrop: off-white base + a couple of very soft
// blurred haze orbs, a barely-there grain, and edge fade masks. Purely
// decorative, sits behind everything, and is static (no motion) so it is safe
// for prefers-reduced-motion.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")"

const AtmosphericBackground = () => {
  return (
    <Box
      aria-hidden="true"
      position="fixed"
      inset={0}
      zIndex={0}
      overflow="hidden"
      pointerEvents="none"
      bg={studioTokens.background}
    >
      {/* Primary soft glow behind the hero */}
      <Box
        position="absolute"
        top={{ base: '18%', md: '30%' }}
        left="50%"
        w={{ base: '120vw', md: '70vw' }}
        h={{ base: '60vh', md: '70vh' }}
        transform="translate(-50%, -50%)"
        borderRadius="50%"
        sx={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(231,231,226,0.55) 38%, rgba(247,247,244,0) 70%)',
          filter: 'blur(40px)'
        }}
      />
      {/* Cool secondary haze, top-right */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w={{ base: '70vw', md: '45vw' }}
        h="45vh"
        borderRadius="50%"
        sx={{
          background:
            'radial-gradient(circle at center, rgba(214,219,224,0.45) 0%, rgba(247,247,244,0) 68%)',
          filter: 'blur(46px)'
        }}
      />
      {/* Warm secondary haze, bottom-left */}
      <Box
        position="absolute"
        bottom="-12%"
        left="-8%"
        w={{ base: '70vw', md: '42vw' }}
        h="42vh"
        borderRadius="50%"
        sx={{
          background:
            'radial-gradient(circle at center, rgba(228,224,216,0.5) 0%, rgba(247,247,244,0) 68%)',
          filter: 'blur(46px)'
        }}
      />
      {/* Barely-visible grain */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.025}
        sx={{ backgroundImage: GRAIN, backgroundSize: '160px 160px' }}
      />
      {/* Soft vignette / edge fade to keep attention centered */}
      <Box
        position="absolute"
        inset={0}
        sx={{
          background:
            'radial-gradient(120% 90% at 50% 45%, rgba(247,247,244,0) 55%, rgba(247,247,244,0.65) 100%)'
        }}
      />
    </Box>
  )
}

export default AtmosphericBackground
