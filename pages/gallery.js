import { useEffect, useMemo, useRef, useState } from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import { Box, Container, Heading, Text, Link, VStack } from '@chakra-ui/react'

const Gallery = () => {
  // ✅ Keep categories, now pointing to optimized WebP paths.
  // Using generators keeps the file maintainable and matches your folder structure.
  const categories = useMemo(
    () => ({
      me: Array.from({ length: 54 }, (_, i) => `/images_optimized/me/me${i + 1}.webp`),
      food: Array.from({ length: 78 }, (_, i) => `/images_optimized/food/food${i + 1}.webp`),
      nature: Array.from({ length: 32 }, (_, i) => `/images_optimized/nature/nature${i + 1}.webp`),
      misc: Array.from({ length: 5 }, (_, i) => `/images_optimized/misc/misc${i + 1}.webp`)
    }),
    []
  )

  const [activeCategory, setActiveCategory] = useState('me')
  const shuffledCacheRef = useRef({})

  const shuffle = (items) => {
    const array = items.slice()
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const photos = useMemo(() => {
    const base = categories[activeCategory] || []
    if (!shuffledCacheRef.current[activeCategory]) {
      shuffledCacheRef.current[activeCategory] = shuffle(base)
    }
    return shuffledCacheRef.current[activeCategory]
  }, [activeCategory, categories])

  const total = photos.length

  // looped index: [last, ...photos, first]
  const [currentIndex, setCurrentIndex] = useState(1)

  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  // Measure container width for precise panel math
  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Each panel = 1/3 viewport width
  const panelWidth = containerWidth ? containerWidth / 3 : 0

  // Translate track so currentIndex sits in the CENTER panel.
  // Center panel x starts at +panelWidth.
  const translatePx = panelWidth ? panelWidth - currentIndex * panelWidth : 0

  // Reset index when switching categories
  useEffect(() => {
    setCurrentIndex(1)
  }, [activeCategory])

  const loopedPhotos = useMemo(() => {
    if (!total) return []
    const first = photos[0]
    const last = photos[total - 1]
    return [last, ...photos, first]
  }, [photos, total])

  useEffect(() => {
    if (typeof window === 'undefined' || !loopedPhotos.length) return
    const totalLooped = loopedPhotos.length
    const normalize = (idx) => (idx + totalLooped) % totalLooped
    const indices = [
      currentIndex,
      normalize(currentIndex - 1),
      normalize(currentIndex + 1),
      normalize(currentIndex - 2),
      normalize(currentIndex + 2)
    ]
    const unique = Array.from(new Set(indices))
    unique.forEach((idx) => {
      const src = loopedPhotos[idx]
      if (!src) return
      const img = new window.Image()
      img.decoding = 'async'
      img.src = src
      if (img.decode) img.decode().catch(() => {})
    })
  }, [currentIndex, loopedPhotos])

  const goPrev = () => {
    if (total < 2) return
    setCurrentIndex((i) => i - 1)
  }

  const goNext = () => {
    if (total < 2) return
    setCurrentIndex((i) => i + 1)
  }
  const Img = ({ src, alt, priority = false }) => {
    if (!src) return null
    return (
      <img
        src={src}
        alt={alt}
        draggable={false}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'auto'}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          imageOrientation: 'from-image' // ✅ fixes iPhone EXIF rotation
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

            {/* Carousel viewport: 3 panels visible, looped track for seamless wrap */}
            <Box w="100%" display="flex" justifyContent="center" mt={4}>
              <Box
                ref={containerRef}
                w="100%"
                maxW="960px"
                h={{ base: '60vh', md: '70vh' }}
                overflow="hidden"
                position="relative"
                userSelect="none"
              >
                {/* Track */}
                <Box
                  as="div"
                  display="flex"
                  h="100%"
                  w="max-content"
                  style={{
                    willChange: 'transform',
                    transform: `translate3d(${translatePx}px, 0, 0)`,
                    transition:
                      currentIndex === 0 || currentIndex === total + 1
                        ? 'none'
                        : 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)',
                    transformStyle: 'preserve-3d'
                  }}
                  onTransitionEnd={() => {
                    if (!total) return
                    if (currentIndex === 0) {
                      setCurrentIndex(total)
                    } else if (currentIndex === total + 1) {
                      setCurrentIndex(1)
                    }
                  }}
                >
                  {loopedPhotos.map((src, idx) => {
                    const isCenter = idx === currentIndex
                    return (
                      <Box
                        key={`${src}-${idx}`}
                        flex={`0 0 ${panelWidth || 0}px`}
                        minW={panelWidth ? `${panelWidth}px` : '33.333%'}
                        h="100%"
                        position="relative"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        opacity={isCenter ? 1 : 0.25}
                        style={{ transition: 'opacity 0.2s ease-out' }}
                        pointerEvents="none" // ✅ images cannot be clicked/touched
                      >
                        <Img
                          src={src}
                          alt={`Photo ${idx}`}
                          priority={activeCategory === 'me' && idx === 1}
                        />
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            </Box>

            {/* Only navigation controls: bottom center arrows */}
            <Box mt={3} w="100%" display="flex" justifyContent="center" alignItems="center" gap={4}>
              <Box
                as="button"
                type="button"
                onClick={goPrev}
                px={2}
                py={1}
                fontSize="xs"
                borderRadius="full"
                border="1px solid"
                borderColor="gray.300"
                bg="white"
                _hover={{ bg: 'gray.50' }}
                disabled={total < 2}
                opacity={total < 2 ? 0.5 : 1}
                cursor={total < 2 ? 'not-allowed' : 'pointer'}
              >
                ←
              </Box>
              <Box
                as="button"
                type="button"
                onClick={goNext}
                px={2}
                py={1}
                fontSize="xs"
                borderRadius="full"
                border="1px solid"
                borderColor="gray.300"
                bg="white"
                _hover={{ bg: 'gray.50' }}
                disabled={total < 2}
                opacity={total < 2 ? 0.5 : 1}
                cursor={total < 2 ? 'not-allowed' : 'pointer'}
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
