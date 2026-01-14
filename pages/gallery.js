import { useState, useRef, useEffect, useMemo } from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import { Box, Container, Heading, Text, Link, VStack } from '@chakra-ui/react'

const Gallery = () => {
  const categories = useMemo(
    () => ({
      me: [
        '/images/me/me1.jpg',
        '/images/me/me2.jpg',
        '/images/me/me3.jpg',
        '/images/me/me4.jpg',
        '/images/me/me5.jpg',
        '/images/me/me6.jpg',
        '/images/me/me7.jpg',
        '/images/me/me8.jpg',
        '/images/me/me9.jpg',
        '/images/me/me10.jpg',
        '/images/me/me11.jpg',
        '/images/me/me12.jpg',
        '/images/me/me13.jpg',
        '/images/me/me14.jpg',
        '/images/me/me15.jpg',
        '/images/me/me16.jpg',
        '/images/me/me17.jpg',
        '/images/me/me18.jpg',
        '/images/me/me19.jpg',
        '/images/me/me20.jpg',
        '/images/me/me21.jpg',
        '/images/me/me22.jpg',
        '/images/me/me23.jpg',
        '/images/me/me24.jpg',
        '/images/me/me25.jpg',
        '/images/me/me26.jpeg',
        '/images/me/me27.jpeg',
        '/images/me/me28.jpeg',
        '/images/me/me29.jpeg',
        '/images/me/me30.jpeg',
        '/images/me/me31.jpeg',
        '/images/me/me32.png',
        '/images/me/me33.jpeg',
        '/images/me/me34.jpg',
        '/images/me/me35.jpg',
        '/images/me/me36.jpeg',
        '/images/me/me37.jpeg',
        '/images/me/me38.jpeg',
        '/images/me/me39.jpeg',
        '/images/me/me40.jpeg',
        '/images/me/me41.jpg',
        '/images/me/me42.jpg',
        '/images/me/me43.jpg',
        '/images/me/me44.jpg',
        '/images/me/me45.jpg'
      ],
      food: [
        '/images/food/food1.jpg',
        '/images/food/food2.jpeg',
        '/images/food/food3.jpeg',
        '/images/food/food4.jpeg',
        '/images/food/food5.jpg',
        '/images/food/food6.jpg',
        '/images/food/food7.jpg',
        '/images/food/food8.jpg',
        '/images/food/food9.jpg',
        '/images/food/food10.jpg',
        '/images/food/food11.jpg',
        '/images/food/food12.jpg',
        '/images/food/food13.jpeg',
        '/images/food/food14.jpeg',
        '/images/food/food15.jpeg',
        '/images/food/food16.jpeg',
        '/images/food/food17.jpeg',
        '/images/food/food18.jpeg',
        '/images/food/food19.jpeg',
        '/images/food/food20.jpeg',
        '/images/food/food21.jpeg',
        '/images/food/food22.jpeg',
        '/images/food/food23.jpg',
        '/images/food/food24.jpeg',
        '/images/food/food25.jpeg',
        '/images/food/food26.jpeg',
        '/images/food/food27.jpeg',
        '/images/food/food28.jpg',
        '/images/food/food29.jpeg',
        '/images/food/food30.jpeg',
        '/images/food/food31.jpeg',
        '/images/food/food32.jpeg',
        '/images/food/food33.jpeg',
        '/images/food/food34.jpeg',
        '/images/food/food35.jpeg',
        '/images/food/food36.jpeg',
        '/images/food/food37.jpeg',
        '/images/food/food38.jpeg',
        '/images/food/food39.jpeg',
        '/images/food/food40.jpeg',
        '/images/food/food41.jpeg',
        '/images/food/food42.jpg',
        '/images/food/food43.jpeg',
        '/images/food/food44.jpeg',
        '/images/food/food45.jpeg',
        '/images/food/food46.jpeg',
        '/images/food/food47.jpeg',
        '/images/food/food48.jpeg',
        '/images/food/food49.jpeg',
        '/images/food/food50.jpeg',
        '/images/food/food51.jpeg',
        '/images/food/food52.jpeg',
        '/images/food/food53.jpeg',
        '/images/food/food54.jpeg',
        '/images/food/food55.jpeg',
        '/images/food/food56.jpeg',
        '/images/food/food57.jpeg',
        '/images/food/food58.jpeg',
        '/images/food/food59.jpeg',
        '/images/food/food60.jpeg',
        '/images/food/food61.jpeg',
        '/images/food/food62.jpeg',
        '/images/food/food63.jpeg',
        '/images/food/food64.jpeg',
        '/images/food/food65.jpeg',
        '/images/food/food66.jpeg',
        '/images/food/food67.jpeg',
        '/images/food/food68.jpeg',
        '/images/food/food69.jpeg',
        '/images/food/food70.jpeg',
        '/images/food/food71.jpeg',
        '/images/food/food72.jpeg',
        '/images/food/food73.jpeg',
        '/images/food/food74.jpeg',
        '/images/food/food75.jpeg',
        '/images/food/food76.jpg',
        '/images/food/food77.jpeg',
        '/images/food/food78.jpeg'
      ],
      misc: [
        '/images/misc/misc1.jpeg',
        '/images/misc/misc2.jpeg',
        '/images/misc/misc3.jpeg',
        '/images/misc/misc4.jpeg',
        '/images/misc/misc5.jpeg'
      ],
      nature: [
        '/images/nature/nature1.jpg',
        '/images/nature/nature2.jpeg',
        '/images/nature/nature3.jpeg',
        '/images/nature/nature4.jpeg',
        '/images/nature/nature5.jpeg',
        '/images/nature/nature6.jpeg',
        '/images/nature/nature7.jpeg',
        '/images/nature/nature8.jpeg',
        '/images/nature/nature9.jpeg',
        '/images/nature/nature10.jpeg',
        '/images/nature/nature11.jpeg',
        '/images/nature/nature12.jpeg',
        '/images/nature/nature13.jpeg',
        '/images/nature/nature14.jpeg',
        '/images/nature/nature15.jpeg',
        '/images/nature/nature16.jpeg',
        '/images/nature/nature17.jpeg',
        '/images/nature/nature18.jpeg',
        '/images/nature/nature19.jpeg',
        '/images/nature/nature20.jpeg',
        '/images/nature/nature21.jpeg',
        '/images/nature/nature22.jpeg',
        '/images/nature/nature23.jpeg',
        '/images/nature/nature24.jpeg',
        '/images/nature/nature25.jpeg',
        '/images/nature/nature26.jpeg',
        '/images/nature/nature27.jpeg',
        '/images/nature/nature28.jpeg',
        '/images/nature/nature29.jpeg',
        '/images/nature/nature30.jpeg',
        '/images/nature/nature31.jpeg',
        '/images/nature/nature32.jpeg'
      ]
    }),
    []
  )

  const [activeCategory, setActiveCategory] = useState('me')
  const photos = categories[activeCategory] || []
  const total = photos.length

  const [currentIndex, setCurrentIndex] = useState(0)

  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const isAnimatingRef = useRef(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const slideDirRef = useRef(null) // 'prev' | 'next' | null

  // Measure container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const panelWidthPx = containerWidth > 0 ? containerWidth / 3 : 0
  const baseOffsetPx = panelWidthPx ? -panelWidthPx : 0

  const applyTransform = (px, withTransition) => {
    const el = trackRef.current
    if (!el) return
    el.style.transition = withTransition ? 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
    el.style.transform = `translate3d(${px}px, 0, 0)`
  }

  // snap to base offset when width changes
  useEffect(() => {
    applyTransform(baseOffsetPx, false)
  }, [baseOffsetPx])

  // reset on category change
  useEffect(() => {
    setCurrentIndex(0)
    isAnimatingRef.current = false
    setIsAnimating(false)
    slideDirRef.current = null
    applyTransform(baseOffsetPx, false)
  }, [activeCategory, baseOffsetPx])

  // Helpers for indices (5-panel strip)
  const safeTotal = total || 1
  const prev2Index = (currentIndex - 2 + safeTotal) % safeTotal
  const prevIndex = (currentIndex - 1 + safeTotal) % safeTotal
  const nextIndex = (currentIndex + 1) % safeTotal
  const next2Index = (currentIndex + 2) % safeTotal

  // --- Peak smoothness: preload+decode before animation ---
  const decodeImage = (src) =>
    new Promise((resolve) => {
      if (!src) return resolve()
      const img = new window.Image()
      img.decoding = 'async'
      img.src = src
      // If already cached, decode resolves quickly
      const done = () => resolve()
      if (img.decode) {
        img.decode().then(done).catch(done)
      } else {
        img.onload = done
        img.onerror = done
      }
    })

  // Pre-decode neighbors whenever index/category changes (keeps things warm)
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!total) return

    const srcs = [
      photos[currentIndex],
      photos[prevIndex],
      photos[nextIndex],
      photos[prev2Index],
      photos[next2Index]
    ].filter(Boolean)

    // fire and forget
    srcs.forEach((s) => {
      const img = new window.Image()
      img.decoding = 'async'
      img.src = s
      if (img.decode) img.decode().catch(() => {})
    })
  }, [activeCategory, currentIndex, total, photos, prevIndex, nextIndex, prev2Index, next2Index])

  const commit = async (direction) => {
    if (!panelWidthPx || total < 2) return
    if (isAnimatingRef.current) return

    // Determine which image will become the new center and decode it BEFORE animating
    const targetIndex = direction === 'next'
      ? (currentIndex + 1) % total
      : (currentIndex - 1 + total) % total

    const targetSrc = photos[targetIndex]
    if (typeof window !== 'undefined') {
      // decode center target + the new neighbor to prevent any flash
      const neighborIndex = direction === 'next'
        ? (currentIndex + 2) % total
        : (currentIndex - 2 + total) % total

      const neighborSrc = photos[neighborIndex]
      await Promise.all([decodeImage(targetSrc), decodeImage(neighborSrc)])
    }

    isAnimatingRef.current = true
    setIsAnimating(true)
    slideDirRef.current = direction

    if (direction === 'next') {
      applyTransform(baseOffsetPx - panelWidthPx, true)
    } else {
      applyTransform(baseOffsetPx + panelWidthPx, true)
    }
  }

  const handleTransitionEnd = (e) => {
    if (!isAnimatingRef.current) return
    if (!e || e.propertyName !== 'transform') return

    const dir = slideDirRef.current
    slideDirRef.current = null
    isAnimatingRef.current = false
    setIsAnimating(false)

    // Snap back first (no transition) to avoid any visual mismatch
    applyTransform(baseOffsetPx, false)

    // Update index on next frame
    requestAnimationFrame(() => {
      if (dir === 'next') {
        setCurrentIndex((i) => (i + 1) % total)
      } else if (dir === 'prev') {
        setCurrentIndex((i) => (i - 1 + total) % total)
      }
    })
  }

  // Render helper: ultra-stable <img> (no Next/Image flicker)
  const Img = ({ src, alt, priority = false }) => {
    if (!src) return null
    return (
      <img
        src={src}
        alt={alt}
        draggable={false}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={priority ? 'high' : 'auto'}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    )
  }

  return (
    <>
      <Head>
        <title>Gallery - Maxwell Guillermo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gallery by Maxwell Guillermo" />
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
              Gallery
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

            {/* Category menu */}
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize={{ base: 'sm', md: 'md' }}
              color="black"
              fontFamily="sans-serif"
            >
              <Box
                as="button"
                type="button"
                onClick={() => setActiveCategory('me')}
                fontWeight={activeCategory === 'me' ? '700' : '500'}
                cursor="pointer"
              >
                me
              </Box>
              <Text as="span">|</Text>
              <Box
                as="button"
                type="button"
                onClick={() => setActiveCategory('food')}
                fontWeight={activeCategory === 'food' ? '700' : '500'}
                cursor="pointer"
              >
                food
              </Box>
              <Text as="span">|</Text>
              <Box
                as="button"
                type="button"
                onClick={() => setActiveCategory('nature')}
                fontWeight={activeCategory === 'nature' ? '700' : '500'}
                cursor="pointer"
              >
                nature
              </Box>
            </Box>

            {/* Carousel: buttons-only */}
            <Box w="100%" display="flex" justifyContent="center" mt={4}>
              <Box
                ref={containerRef}
                w="100%"
                maxW="960px"
                h={{ base: '60vh', md: '70vh' }}
                overflow="hidden"
                userSelect="none"
              >
                <Box
                  ref={trackRef}
                  as="div"
                  display="flex"
                  h="100%"
                  w="max-content"
                  style={{ willChange: 'transform' }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {/* prev2 */}
                  <Box
                    flex={`0 0 ${panelWidthPx || 0}px`}
                    minW={panelWidthPx ? `${panelWidthPx}px` : '33.333%'}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={0.25}
                    pointerEvents="none"
                  >
                    <Img src={photos[prev2Index]} alt={`Photo ${prev2Index + 1}`} />
                  </Box>

                  {/* prev */}
                  <Box
                    flex={`0 0 ${panelWidthPx || 0}px`}
                    minW={panelWidthPx ? `${panelWidthPx}px` : '33.333%'}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={0.25}
                    pointerEvents="none"
                  >
                    <Img src={photos[prevIndex]} alt={`Photo ${prevIndex + 1}`} />
                  </Box>

                  {/* center */}
                  <Box
                    flex={`0 0 ${panelWidthPx || 0}px`}
                    minW={panelWidthPx ? `${panelWidthPx}px` : '33.333%'}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={1}
                    pointerEvents="none"
                  >
                    <Img
                      src={photos[currentIndex]}
                      alt={`Photo ${currentIndex + 1}`}
                      priority={activeCategory === 'me' && currentIndex === 0}
                    />
                  </Box>

                  {/* next */}
                  <Box
                    flex={`0 0 ${panelWidthPx || 0}px`}
                    minW={panelWidthPx ? `${panelWidthPx}px` : '33.333%'}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={0.25}
                    pointerEvents="none"
                  >
                    <Img src={photos[nextIndex]} alt={`Photo ${nextIndex + 1}`} />
                  </Box>

                  {/* next2 */}
                  <Box
                    flex={`0 0 ${panelWidthPx || 0}px`}
                    minW={panelWidthPx ? `${panelWidthPx}px` : '33.333%'}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={0.25}
                    pointerEvents="none"
                  >
                    <Img src={photos[next2Index]} alt={`Photo ${next2Index + 1}`} />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* ONLY navigation controls */}
            <Box mt={3} w="100%" display="flex" justifyContent="center" alignItems="center" gap={4}>
              <Box
                as="button"
                type="button"
                onClick={() => commit('prev')}
                px={2}
                py={1}
                fontSize="xs"
                borderRadius="full"
                border="1px solid"
                borderColor="gray.300"
                bg="white"
                _hover={{ bg: 'gray.50' }}
                disabled={!panelWidthPx || isAnimating || total < 2}
                opacity={!panelWidthPx || isAnimating || total < 2 ? 0.5 : 1}
                cursor={!panelWidthPx || isAnimating || total < 2 ? 'not-allowed' : 'pointer'}
              >
                ←
              </Box>
              <Box
                as="button"
                type="button"
                onClick={() => commit('next')}
                px={2}
                py={1}
                fontSize="xs"
                borderRadius="full"
                border="1px solid"
                borderColor="gray.300"
                bg="white"
                _hover={{ bg: 'gray.50' }}
                disabled={!panelWidthPx || isAnimating || total < 2}
                opacity={!panelWidthPx || isAnimating || total < 2 ? 0.5 : 1}
                cursor={!panelWidthPx || isAnimating || total < 2 ? 'not-allowed' : 'pointer'}
              >
                →
              </Box>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default Gallery
export { getServerSideProps } from '../components/chakra'
