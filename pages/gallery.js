import { useState, useRef, useEffect, useMemo } from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Heading, Text, Link, VStack } from '@chakra-ui/react'

const Gallery = () => {
  const categories = useMemo(
    () => ({
      me: [
        '/images/me/1.jpg',
        '/images/me/2.jpg',
        '/images/me/3.jpg',
        '/images/me/4.jpg',
        '/images/me/5.jpg',
        '/images/me/6.jpg',
        '/images/me/7.jpg',
        '/images/me/8.jpg',
        '/images/me/9.jpg',
        '/images/me/10.jpg',
        '/images/me/11.jpg',
        '/images/me/12.jpg',
        '/images/me/13.jpg',
        '/images/me/15.jpg',
        '/images/me/16.jpg',
        '/images/me/17.jpg',
        '/images/me/18.jpg',
        '/images/me/19.jpg',
        '/images/me/20.jpg',
        '/images/me/21.jpg',
        '/images/me/22.jpg',
        '/images/me/23.jpg',
        '/images/me/24.jpg',
        '/images/me/25.jpg',
        '/images/me/26.jpg',
        '/images/me/27.jpg',
        '/images/me/28.jpg',
        '/images/me/29.jpg',
        '/images/me/30.jpg',
        '/images/me/31.jpeg',
        '/images/me/32.JPG'
      ],
      food: [
        '/images/food/food1.jpeg',
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
      nature: [],
      // pro removed
    }),
    []
  )

  const [activeCategory, setActiveCategory] = useState('me')
  const photos = categories[activeCategory] || []
  const total = photos.length

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState(null) // 'prev' | 'next' | 'reset' | null

  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

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
  }, [activeCategory, baseOffsetPx])

  const safeTotal = total || 1
  const prev2Index = (currentIndex - 2 + safeTotal) % safeTotal
  const prevIndex = (currentIndex - 1 + safeTotal) % safeTotal
  const nextIndex = (currentIndex + 1) % safeTotal
  const next2Index = (currentIndex + 2) % safeTotal

  const commit = direction => {
    if (isAnimating || !panelWidthPx) return

    setSlideDirection(direction)
    setIsAnimating(true)

    if (direction === 'next') {
      setTranslatePx(baseOffsetPx - panelWidthPx)
    } else if (direction === 'prev') {
      setTranslatePx(baseOffsetPx + panelWidthPx)
    } else {
      setTranslatePx(baseOffsetPx)
    }
  }

  const handleTransitionEnd = () => {
    if (!isAnimating) return

    if (slideDirection === 'next' && total) {
      setCurrentIndex(i => (i + 1) % total)
    } else if (slideDirection === 'prev' && total) {
      setCurrentIndex(i => (i - 1 + total) % total)
    }

    // Stop animation and snap back to the resting position
    setIsAnimating(false)
    setSlideDirection(null)
    setTranslatePx(baseOffsetPx)
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
