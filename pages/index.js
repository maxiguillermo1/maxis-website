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


/* Base styles for the gallery */
.gallery {
  margin-top: 20%;
  margin-bottom: -25%;
  left: 10%;
  position: relative;
  width: auto;
  height: auto; /* Height should adjust to content */
  display: grid;
  grid-template-columns: repeat(6, 15%); /* Creates a 4-column grid */
  grid-auto-rows: minmax(100px, auto); /* Adjust row height to fit content */
  gap: 4px; /* Spacing between photos */
}

/* Styles for photos */
.photo {
  position: relative;
  transition: transform 1s ease;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
}
/* Adjust the grid layout to fit like puzzle pieces */
.photo-7 { grid-column: span 2; grid-row: span 4; } /* Large block at the top-left corner */
.photo-0 { grid-column: span 3; grid-row: span 2; } /* Large block at the top-left corner */
.photo-1 { grid-column: span 2; grid-row: span 3; } /* Large block spanning three columns and three rows */
.photo-2 { grid-column: 4 / 6; grid-row: 1 / 3; } /* Vertical block fitting to the side of photo-1 */
.photo-3 { grid-column: 1 / 3; grid-row: 3 / 5; } /* Large block under photo-0 */
.photo-4 { grid-column: 3 / 5; grid-row: 3 / 4; } /* Horizontal block next to photo-3 */
.photo-5 { grid-column: 5 / 6; grid-row: 3 / 5; } /* Vertical block fitting to the side of photo-4 */
.photo-6 { grid-column: 3 / 6; grid-row: 4 / 5; } /* Horizontal block fitting under photo-4 and photo-5 */
/* Added .photo-6 for a complete puzzle fit */

/* You can continue the pattern for more photos if necessary */


@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(3, 50%); /* Adjust to 2-column grid for smaller screens */
  }
  .photo-0, .photo-1, .photo-4, .photo-5 {
    grid-column: span 2; /* Each image takes full width on smaller screens */
  }
}



  /* Styles for the image container */
  .image-container {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  
  /* Styles for the image */
  .image-container img {
    width: 100%;
    height: auto;
    display: block;
    border: 4px solid lightgrey;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }
  

  
`}</style>


      </Container>
    </Layout>
  );
};

export default Home;

export { getServerSideProps } from '../components/chakra'


