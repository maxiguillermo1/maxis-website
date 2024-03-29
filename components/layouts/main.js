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
  return (
    <Box as="main" pb={8}>
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

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={125}>
        

        {children}
        <LazyVoxelDog />
        <Footer />
      </Container>
    </Box>
  )
}

export default Main;
