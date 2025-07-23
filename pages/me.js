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


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
    <Box
          borderRadius="lg"
          mb={10}
          p={2.5}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I am a Computer Scientist Based in California!
        </Box>
        <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={4}
              borderStyle="solid"
              w="130px"
              h="130px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/maxi.jpg"
                alt="Profile image"
                borderRadius="full"
                width="130"
                height="130"
              />
            </Box>
          </Box>
    

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" fontSize="smg">
        Seeking entry-level roles in Software Engineering, IT, or Cybersecurity.
        </Heading>
        <Paragraph>
       
        I am an aspiring software engineer passionate about building thoughtful, user-centered experiences that blend creativity with impact. What started as a love for video games became a deep curiosity about how technology can shape people’s lives.

With a foundation in full-stack development, machine learning, and cybersecurity, I specialize in creating scalable, real-world solutions. I'm especially excited about the future of AI and how it can be used to solve meaningful challenges.

I’m eager to join a team where I can learn, contribute, and help create products that matter.
        </Paragraph>
        
        <Box align="center" my={12}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="blue"
          >
            My portfolio
          </Button>
        </Box>

      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        I recently earned my B.S. in Computer Science with a minor in Cybersecurity from California State University, Long Beach, while working independently as a full-stack developer.

Outside of tech, I’m passionate about exploring different cultures, cuisines, and creative outlets—from photography and fashion to music and gaming. My dream is to travel the world, gain new perspectives, and bring that inspiration into the software I build.


       
        </Paragraph>
      
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Palo Alto (🌲), California.
        </BioSection>

        <BioSection>
          <BioYear>2020 to 2024</BioYear>
          B.S. in Computer Science, Minor in Cybersecurity — CSU Long Beach
        </BioSection>

      </Section>


      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Research 🔬
        </Heading>
        <Paragraph>
          UI/UX, SWE, Data Science, A-I, ML, Quant Trading, Blockchain
        </Paragraph>
      </Section>
      
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Traveling, Food, Video Games, Music,{' '}
          <Link href="https://drive.google.com/drive/folders/1Iz1wIQlNB4aXdOU74a4AjWEge-pbG_3v?usp=sharing" target="_blank">
            Photography
          </Link>

         , Fashion
        </Paragraph>
      </Section>

      <Section delay={0.6}>
      <Heading as="h3" variant="section-title">
        On the web
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/maxiguillermo1" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    leftIcon={<IoLogoGithub />}
                  >
                    @maxiguillermo1
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.linkedin.com/in/maxwell-guillermo-67395520b" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    leftIcon={<FaLinkedin />}
                  >
                    @maxwell-guillermo
                  </Button>
                </Link>
              </ListItem>
              
              <ListItem>
                <Link href="https://discord.com/users/astrofy" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    leftIcon={<FaDiscord />}
                  >
                    @astrofy
                  </Button>
                </Link>
              </ListItem>

          
            </List>

            <Box align="center" my={4}>
              <Button
                as={NextLink}
                href="https://mail.google.com/mail/?view=cm&source=mailto&to=maxiguillermo1@gmail.com"
                scroll={false}
                leftIcon={<EmailIcon />}
                colorScheme="blue"
              >
                Send me an email!
              </Button>
            </Box>
          </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

