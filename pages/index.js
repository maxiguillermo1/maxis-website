 import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
import { FaLinkedin, FaDiscord } from 'react-icons/fa';


import Image from 'next/image'
import { useState } from 'react';

// Define the list of photo URLs
const photos = [
  '/images/favphotos/1.jpg',
  '/images/favphotos/2.jpg',
  '/images/favphotos/3.jpg',
  '/images/favphotos/4.jpg',
  '/images/favphotos/5.jpg',
  '/images/favphotos/6.jpg',
  '/images/favphotos/7.jpg',
  '/images/favphotos/8.jpg',
  '/images/favphotos/9.jpg',
  '/images/favphotos/10.jpg',
  '/images/favphotos/11.jpg',
  '/images/favphotos/12.jpg',
  '/images/favphotos/13.jpg',
  '/images/favphotos/14.jpg',
  '/images/favphotos/15.jpg',
  '/images/favphotos/16.jpg',
  '/images/favphotos/17.jpg',
  '/images/favphotos/18.jpg',
  '/images/favphotos/19.jpg',
  '/images/favphotos/20.jpg',
  '/images/favphotos/21.jpg',
  '/images/favphotos/22.jpg',
  '/images/favphotos/23.jpg',
  '/images/favphotos/24.jpg',
  '/images/favphotos/25.jpg',
  '/images/favphotos/26.jpg',
  '/images/favphotos/27.jpg',
  '/images/favphotos/28.jpg',
  '/images/favphotos/29.jpg',
];

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const [shuffledPhotos, setShuffledPhotos] = useState(shuffleArray(photos));

  return (
    <Layout>
      <Container>
        

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Maxwell Guillermo 
            </Heading>
            <p textAlign="center">
              An aspiring software engineer and a passionate product designer, transforming problems into fun and approachable solutions for all.
            </p>
          </Box>

          
          </Box>
        

          <div className="gallery">
  {shuffledPhotos.slice(0, 8).map((src, index) => (
    <div key={index} className={`photo photo-${index}`}>
      <div className="image-container">
        <img src={src} alt={`Photo ${index + 1}`} />
      </div>
    </div>
  ))}
</div>

<style jsx>{`
  /* Styles for the photo gallery */
.gallery {
  position: relative;
  width: 100%; /* Full width of the container */
  height: 100vh; /* Adjust to your preference */
  padding: 16px;
  margin: -8px; /* Reduce the space between the images */
}

/* Styles for individual photos */
.photo {
  position: absolute;
  transition: transform 0.5s ease;
}

/* Adjust the positioning for each photo to create a staggered look */
.photo-0 { top: 15%; left: 0%; width: 35%; z-index: 1; }
.photo-1 { top: 18%; left: 35%; width: 25%; z-index: 2; }
.photo-2 { top: 21%; left: 60%; width: 25%; z-index: 3; }
.photo-3 { top: 24%; left: 85%; width: 35%; z-index: 4; }
.photo-4 { top: 61%; left: 0%; width: 30%; z-index: 5; }
.photo-5 { top: 64%; left: 30%; width: 25%; z-index: 6; }
.photo-6 { top: 67%; left: 55%; width: 30%; z-index: 7; }
.photo-7 { top: 70%; left: 85%; width: 20%; z-index: 8; }

/* Styles for the image container */
.image-container {
  width: 100%;
  height: auto; /* Keep the original aspect ratio */
  overflow: hidden; /* Clip the overflow */
}

/* Styles for the image */
.image-container img {
  width: 100%; /* Scale the image to fill the container */
  height: auto;
  display: block;
  border: 3px solid white; /* Assuming white borders as shown in the image */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
}

  
`}</style>


      </Container>
    </Layout>
  );
};

export default Home;

export { getServerSideProps } from '../components/chakra'


