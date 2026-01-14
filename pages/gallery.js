import { useState, useRef, useEffect, useMemo } from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
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

      ],



      // pro removed
    }),
    []
  )

  const [activeCategory, setActiveCategory] = useState('me')
  const photos = categories[activeCategory] || []
  const total = photos.length

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [slideDirection, setSlideDirection] = useState(null) // 'prev' | 'next' | 'reset' | null

  const containerRef = useRef(null)
  const transitionTimeoutRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const startXRef = useRef(null)
  const lastXRef = useRef(null)
  const lastTimeRef = useRef(null)
  const pendingDirectionRef = useRef(null)

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

  const [translatePx, setTranslatePx] = useState(0)

  // Snap to base offset when width changes
  useEffect(() => {
    setTranslatePx(baseOffsetPx)
  }, [baseOffsetPx])

  useEffect(() => {
    // Reset carousel state when switching categories
    setCurrentIndex(0)
    setIsAnimating(false)
    setSlideDirection(null)
    setTranslatePx(baseOffsetPx)
    pendingDirectionRef.current = null
  }, [activeCategory, baseOffsetPx])

  const safeTotal = total || 1
  const prev2Index = (currentIndex - 2 + safeTotal) % safeTotal
  const prevIndex = (currentIndex - 1 + safeTotal) % safeTotal
  const nextIndex = (currentIndex + 1) % safeTotal
  const next2Index = (currentIndex + 2) % safeTotal
  const currentSrc = photos[currentIndex]
  const prevSrc = photos[prevIndex]
  const nextSrc = photos[nextIndex]

  const commit = direction => {
    if (!panelWidthPx || total < 2) return
    if (isAnimating) {
      pendingDirectionRef.current = direction
      return
    }

    let target = baseOffsetPx
    if (direction === 'next') {
      target = baseOffsetPx - panelWidthPx
    } else if (direction === 'prev') {
      target = baseOffsetPx + panelWidthPx
    }

    // Avoid starting an animation if we're already at the target.
    if (target === translatePx) return

    setSlideDirection(direction)
    setIsAnimating(true)
    setTranslatePx(target)
  }

  const handleTransitionEnd = () => {
    if (!isAnimating) return

    if (slideDirection === 'next' && total) {
      setCurrentIndex(i => (i + 1) % total)
    } else if (slideDirection === 'prev' && total) {
      setCurrentIndex(i => (i - 1 + total) % total)
    }

    // Stop animation and snap back to the resting position
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = null
    }
    setIsAnimating(false)
    setSlideDirection(null)
    setTranslatePx(baseOffsetPx)

    if (pendingDirectionRef.current) {
      const nextDirection = pendingDirectionRef.current
      pendingDirectionRef.current = null
      // perf: chain a single queued swipe for fast flicks
      commit(nextDirection)
    }
  }

  useEffect(() => {
    if (!isAnimating) return
    transitionTimeoutRef.current = setTimeout(() => {
      handleTransitionEnd()
    }, 450)
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
        transitionTimeoutRef.current = null
      }
    }
  }, [isAnimating, baseOffsetPx, slideDirection, total])

  const handlePointerDown = event => {
    if (isAnimating || !panelWidthPx || total < 2) return
    event.currentTarget.setPointerCapture(event.pointerId)
    setIsDragging(true)
    startXRef.current = event.clientX
    lastXRef.current = event.clientX
    lastTimeRef.current = performance.now()
  }

  const handlePointerMove = event => {
    if (!isDragging || isAnimating || !panelWidthPx || startXRef.current == null) return
    if (event.cancelable) event.preventDefault()
    const deltaX = event.clientX - startXRef.current
    const clamped = Math.max(Math.min(deltaX, panelWidthPx), -panelWidthPx)
    setTranslatePx(baseOffsetPx + clamped)
    lastXRef.current = event.clientX
    lastTimeRef.current = performance.now()
  }

  const handlePointerUp = event => {
    if (!isDragging || !panelWidthPx || startXRef.current == null) {
      setIsDragging(false)
      return
    }

    const deltaX = event.clientX - startXRef.current
    const now = performance.now()
    const timeDelta = now - (lastTimeRef.current ?? now)
    const positionDelta = event.clientX - (lastXRef.current ?? event.clientX)
    const velocity = timeDelta > 0 ? positionDelta / timeDelta : 0

    const distanceThreshold = panelWidthPx * 0.2
    const velocityThreshold = 0.6

    if (deltaX < -distanceThreshold || velocity < -velocityThreshold) {
      commit('next')
    } else if (deltaX > distanceThreshold || velocity > velocityThreshold) {
      commit('prev')
    } else {
      if (translatePx !== baseOffsetPx) {
        setSlideDirection('reset')
        setIsAnimating(true)
        setTranslatePx(baseOffsetPx)
      } else {
        setIsAnimating(false)
        setSlideDirection(null)
      }
    }

    setIsDragging(false)
    startXRef.current = null
    lastXRef.current = null
    lastTimeRef.current = null
  }

  const handlePointerCancel = () => {
    setIsDragging(false)
    setTranslatePx(baseOffsetPx)
    startXRef.current = null
    lastXRef.current = null
    lastTimeRef.current = null
  }

  return (
    <>
      <Head>
        <title>Gallery - Maxwell Guillermo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gallery by Maxwell Guillermo" />
        {currentSrc && (
          <link rel="preload" as="image" href={currentSrc} />
        )}
        {prevSrc && (
          <link rel="preload" as="image" href={prevSrc} />
        )}
        {nextSrc && (
          <link rel="preload" as="image" href={nextSrc} />
        )}
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
              <Text as="span" color="black">|</Text>
              <Box
                as="button"
                type="button"
                onClick={() => setActiveCategory('food')}
                fontWeight={activeCategory === 'food' ? '700' : '500'}
                cursor="pointer"
              >
                food
              </Box>
              <Text as="span" color="black">|</Text>
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

            <Box w="100%" display="flex" justifyContent="center" mt={4}>
              <Box
                ref={containerRef}
                w="100%"
                maxW="960px"
                h={{ base: '60vh', md: '70vh' }}
                overflow="hidden"
                userSelect="none"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                cursor={isDragging ? 'grabbing' : 'grab'}
                touchAction="pan-y"
              >
                {/* 5-panel track: prev2 | prev | center | next | next2 */}
                <Box
                  as="div"
                  display="flex"
                  h="100%"
                  w="max-content"
                  style={{ willChange: 'transform' }}
                  transform={`translate3d(${translatePx}px, 0, 0)`}
                  transition={isAnimating ? 'transform 0.35s ease-in-out' : 'none'}
                  onTransitionEnd={handleTransitionEnd}
                >
                  <Box
                    flex={`0 0 ${panelWidthPx}px`}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={0.25}
                  >
                    {photos[prev2Index] && (
                      <Image
                        src={photos[prev2Index]}
                        alt={`Photo ${prev2Index + 1}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="33vw"
                        loading="lazy"
                        draggable={false}
                      />
                    )}
                  </Box>

                  <Box
                    flex={`0 0 ${panelWidthPx}px`}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={0.25}
                    cursor="pointer"
                    onClick={() => commit('prev')}
                  >
                    {photos[prevIndex] && (
                      <Image
                        src={photos[prevIndex]}
                        alt={`Previous photo ${prevIndex + 1}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="33vw"
                        loading="lazy"
                        draggable={false}
                      />
                    )}
                  </Box>

                  <Box
                    flex={`0 0 ${panelWidthPx}px`}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={1}
                  >
                    {photos[currentIndex] && (
                      <Image
                        src={photos[currentIndex]}
                        alt={`Photo ${currentIndex + 1}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="33vw"
                      priority={activeCategory === 'me' && currentIndex === 0}
                        loading={currentIndex === 0 ? 'eager' : 'lazy'}
                        draggable={false}
                      />
                    )}
                  </Box>

                  <Box
                    flex={`0 0 ${panelWidthPx}px`}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={0.25}
                    cursor="pointer"
                    onClick={() => commit('next')}
                  >
                    {photos[nextIndex] && (
                      <Image
                        src={photos[nextIndex]}
                        alt={`Next photo ${nextIndex + 1}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="33vw"
                        loading="lazy"
                        draggable={false}
                      />
                    )}
                  </Box>

                  <Box
                    flex={`0 0 ${panelWidthPx}px`}
                    h="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={0.25}
                  >
                    {photos[next2Index] && (
                      <Image
                        src={photos[next2Index]}
                        alt={`Photo ${next2Index + 1}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="33vw"
                        loading="lazy"
                        draggable={false}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* minimal arrow controls below the carousel */}
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
                disabled={!panelWidthPx || isAnimating}
                opacity={!panelWidthPx || isAnimating ? 0.5 : 1}
                cursor={!panelWidthPx || isAnimating ? 'not-allowed' : 'pointer'}
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
                disabled={!panelWidthPx || isAnimating}
                opacity={!panelWidthPx || isAnimating ? 0.5 : 1}
                cursor={!panelWidthPx || isAnimating ? 'not-allowed' : 'pointer'}
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
