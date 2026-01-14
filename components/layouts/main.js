import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  const isIndexPage = router.asPath === '/'
  const isMinimalPage = router.asPath === '/' || router.asPath === '/writings' || router.asPath === '/gallery'
  
  return (
    <Box as="main" pb={8} bg={isMinimalPage ? 'white' : undefined}>
      <Head>
        
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Maxi's homepage" />
        <meta name="author" content="Maxwell Guillermo" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Maxwell Guillermo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@astrofying" />
        <meta name="twitter:creator" content="@astrofying" />
        <meta name="twitter:image" content="/images/maxi-g-thumbnail.jpg" />
        <meta property="og:site_name" content="Maxi Guillermo" />
        <meta property="og:title" content="Maxi Guillermo" />
        <meta property="og:image" content="maxi-g-thumbnail.jpg" />
        <meta property="og:url" content="https://maxi-g.com/" />
        <meta property="og:type" content="website" />
        
        <title>Maxwell Guillermo</title>
      </Head>

      {!isMinimalPage && <NavBar path={router.asPath} />}

      <Container maxW={isMinimalPage ? '100%' : 'container.md'} pt={isMinimalPage ? 0 : 125} px={isMinimalPage ? 0 : undefined}>
        

        {children}
        {!isMinimalPage && <LazyVoxelDog />}
        {!isMinimalPage && <Footer />}
      </Container>
    </Box>
  )
}

export default Main;
