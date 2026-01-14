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
import Paragraph from '../../components/paragraph'
import { BioSection, BioYear } from '../../components/bio'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { GridItem } from '../../components/grid-item'
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
            as="a"
            href="https://docs.google.com/document/d/1jN3h7MmL12K4CI8EvpddmChOS4TF5KMQlAXKkE6TO_4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            rightIcon={<ChevronRightIcon />}
            colorScheme="blue"
          >
            Resume
          </Button>
        </Box>

      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        I built this website during my sophomore year at California State University, Long Beach as a way to demonstrate my capabilities in web development. It served as an early showcase of my skills, projects, and coursework while I was developing my foundation in computer science. This site remains as a snapshot of my growth and learning during that stage of my academic journey.
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
          Traveling, Food, Video Games, Music, Photography, Fashion
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
                as="a"
                href="mailto:maxiguillermo1@gmail.com"
                leftIcon={<EmailIcon />}
                colorScheme={useColorModeValue('purple', 'orange')}
              >
                Send me an email!
              </Button>
            </Box>
          </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../../components/chakra'

