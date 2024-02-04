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
          {shuffledPhotos.map((src, index) => (
            <div key={index} className="photo">
              <div className="image-container">
                <img src={src} alt={`Photo ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          /* Styles for the photo gallery */
          .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 16px;
            justify-items: center;
            padding: 16px;
          }

          /* Styles for individual photos */
          .photo {
            border: 1px solid transparent;
          }

          /* Styles for the image container */
          .image-container {
            border: 1px solid transparent;
            padding: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 100%;
            height: auto;
          }

          /* Styles for the image inside the container */
          .image-container img {
            max-width: 100%;
            max-height: 100%;
            border: 3px solid #ccc;
          }
        `}</style>
      </Container>
    </Layout>
  );
};

export default Home;

export { getServerSideProps } from '../components/chakra'

