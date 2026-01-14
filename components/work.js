import NextLink from 'next/link'
import Image from 'next/image'
// perf: use next/image for automatic optimization
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/legacy/works">
      Works
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Box borderRadius="lg" w="full" mb={4} position="relative" overflow="hidden" paddingBottom="56.25%">
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: 'cover', borderRadius: '8px' }}
      sizes="(max-width: 768px) 100vw, 768px"
    />
  </Box>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
