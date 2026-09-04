import { useEffect, useMemo, useState } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { floatingNodes, focusPhrases } from '../lib/floating-nodes'

// FloatingNodeHero
// A breathing, data-driven "knowledge cloud": large typography nodes drift
// slowly while exactly one focus phrase holds the center and cross-fades every
// 3.5–5s. Depth is faked entirely with transform / opacity / light blur so it
// stays cheap to animate, even on mobile.

// Slow vertical breathing. Amplitude / rotation are per-node via CSS vars so we
// only ship one keyframes definition.
const drift = keyframes`
  0%   { transform: translateY(calc(var(--amp, 8px) * -1)) rotate(calc(var(--rot, 0.5deg) * -1)) scale(var(--scale, 1)); }
  100% { transform: translateY(var(--amp, 8px)) rotate(var(--rot, 0.5deg)) scale(var(--scale, 1)); }
`

// Depth tiers — far recedes, middle sits closer, active is the focus phrase.
const TIERS = {
  far: { opacity: 0.14, blur: '6px', scale: 0.88, amp: '6px', rot: '0.6deg' },
  middle: { opacity: 0.3, blur: '3px', scale: 0.95, amp: '9px', rot: '0.5deg' }
}

// Deterministic pseudo-random in [0,1) so SSR and client agree (no hydration
// mismatch, no layout thrash).
const seeded = (n) => {
  const x = Math.sin(n) * 43758.5453
  return x - Math.floor(x)
}

// Pick a curated, weight-biased subset for the cloud and give each a calm,
// organic position. The full data set stays available for future wiring.
const buildLayout = (count) => {
  const chosen = [...floatingNodes]
    .sort((a, b) => (b.weight || 0) - (a.weight || 0))
    .slice(0, count)

  return chosen.map((node, i) => {
    const tierName = seeded(i * 5.7 + 1) < 0.5 ? 'far' : 'middle'
    const top = 8 + (i / Math.max(1, count - 1)) * 84 + (seeded(i * 1.7) * 6 - 3)
    const xFrac = (seeded(i * 3.1 + 2) - 0.5) * 2 // -1..1
    const duration = 9 + seeded(i * 7.3) * 7 // 9..16s
    const delay = -(seeded(i * 9.1) * 8).toFixed(2) // desync start
    return { node, tierName, top, xFrac, duration, delay, order: i }
  })
}

const FloatingNodeHero = () => {
  const prefersReduced = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)

  const layout = useMemo(() => buildLayout(16), [])

  // Cycle the center phrase on a calm, slightly-varied cadence.
  useEffect(() => {
    if (prefersReduced) return undefined
    let timeout
    const tick = () => {
      const wait = 3500 + Math.random() * 1500
      timeout = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % focusPhrases.length)
        tick()
      }, wait)
    }
    tick()
    return () => clearTimeout(timeout)
  }, [prefersReduced])

  const handleNodeActivate = (e) => {
    e.preventDefault()
    if (typeof document === 'undefined') return
    const work = document.getElementById('work')
    if (work) {
      work.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        block: 'start'
      })
    }
  }

  const activePhrase = focusPhrases[phraseIndex]

  return (
    <Box
      as="section"
      id="top"
      aria-label="Maxi Guillermo — a living preview of the second brain"
      position="relative"
      w="100%"
      minH={{ base: '88vh', md: '100vh' }}
      overflow="hidden"
    >
      {/* Floating cloud of soft knowledge nodes */}
      <Box
        aria-hidden={false}
        position="absolute"
        inset={0}
        zIndex={1}
      >
        {layout.map(({ node, tierName, top, xFrac, duration, delay, order }) => {
          const tier = TIERS[tierName]
          const isFar = tierName === 'far'
          return (
            <Box
              key={node.id}
              position="absolute"
              top={`${top}%`}
              left="50%"
              // Hide the lower-weight, far nodes on small screens to reduce
              // density and any chance of horizontal overflow.
              display={{ base: order < 9 ? 'block' : 'none', md: 'block' }}
              sx={{
                '--max-x': 'min(115px, 24vw)',
                transform: `translate(calc(-50% + ${xFrac.toFixed(3)} * var(--max-x)), -50%)`
              }}
            >
              <Box
                as="button"
                type="button"
                onClick={handleNodeActivate}
                data-route={node.route}
                data-type={node.type}
                aria-label={`${node.label} — ${node.type}`}
                title={node.label}
                whiteSpace="nowrap"
                bg="transparent"
                border="none"
                cursor="pointer"
                fontFamily="'M PLUS Rounded 1c', sans-serif"
                fontWeight="500"
                letterSpacing="-0.02em"
                color={isFar ? 'rgba(150,150,150,0.55)' : '#bdbdbd'}
                fontSize={
                  isFar
                    ? { base: '0.95rem', md: 'clamp(0.95rem, 2.2vw, 1.7rem)' }
                    : { base: '1.15rem', md: 'clamp(1.2rem, 2.8vw, 2.3rem)' }
                }
                sx={{
                  '--amp': tier.amp,
                  '--rot': tier.rot,
                  '--scale': tier.scale,
                  opacity: tier.opacity,
                  filter: prefersReduced ? 'none' : `blur(${tier.blur})`,
                  transform: `scale(${tier.scale})`,
                  animation: prefersReduced
                    ? 'none'
                    : `${drift} ${duration.toFixed(2)}s ease-in-out ${delay}s infinite alternate`,
                  transition: 'opacity 0.6s ease, color 0.6s ease, filter 0.6s ease'
                }}
                _hover={{ opacity: Math.min(0.7, tier.opacity + 0.35), color: '#9a9a9a' }}
                _focusVisible={{
                  outline: '2px solid rgba(120,120,120,0.5)',
                  outlineOffset: '4px',
                  opacity: 0.8
                }}
              >
                {node.label}
              </Box>
            </Box>
          )
        })}
      </Box>

      {/* Active center phrase */}
      <Box
        position="absolute"
        inset={0}
        zIndex={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ base: 6, md: 10 }}
        pointerEvents="none"
      >
        {prefersReduced ? (
          <Heading
            as="h1"
            textAlign="center"
            maxW="900px"
            fontFamily="'M PLUS Rounded 1c', sans-serif"
            fontWeight="500"
            letterSpacing="-0.04em"
            lineHeight="1.05"
            color="#7a7a7a"
            fontSize={{ base: 'clamp(2rem, 11vw, 3.6rem)', md: 'clamp(3.2rem, 7vw, 7rem)' }}
          >
            {activePhrase}
          </Heading>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={phraseIndex}
              initial={{ opacity: 0, filter: 'blur(8px)', y: 6 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(8px)', y: -6 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ textAlign: 'center' }}
            >
              <Heading
                as="h1"
                textAlign="center"
                maxW="900px"
                fontFamily="'M PLUS Rounded 1c', sans-serif"
                fontWeight="500"
                letterSpacing="-0.04em"
                lineHeight="1.05"
                color="#7a7a7a"
                transform="scale(1.05)"
                fontSize={{ base: 'clamp(2rem, 11vw, 3.6rem)', md: 'clamp(3.2rem, 7vw, 7rem)' }}
              >
                {activePhrase}
              </Heading>
            </motion.div>
          </AnimatePresence>
        )}
      </Box>

      {/* Visually-hidden, stable summary for assistive tech / SEO */}
      <Box as="p" position="absolute" w="1px" h="1px" overflow="hidden" clip="rect(0 0 0 0)" opacity={0}>
        Maxi Guillermo builds quiet systems for thought, software, and intelligent
        workflows — a living second brain of notes, agents, and research.
      </Box>
    </Box>
  )
}

export default FloatingNodeHero
