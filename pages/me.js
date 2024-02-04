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
    

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        Seeking a Summer 2024 Internship!
        </Heading>
        <Paragraph>
       
        I am an enthusiastic software engineer with a passion for creating captivating user experiences. My early passion to video games opened my curiosity to programming languages and how building code impacts users' experiences. My creativity and background in the world of code have equipped me with the skills and mindset necessary to develop software applications that resonate with users and meet their needs effectively.



        Motivated by the aspiration to help build software that makes the world a better place, I am heavily invested in the future of Machine Learning and Artificial Intelligence and how this new paradigm can help solve real-world problems. 

        As a computer scientist, I'm positioned at this crucial turning point, and I am committed to crafting solutions that address real-world challenges while enhancing our daily lives as humans. I believe that technology has the power to profoundly transform the lives of every individual. 

        Let's connect and seek avenues to help make the world a better place through code!

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
        I am currently a full-time student at California State University, Long Beach pursuing a degree in Computer Science. Concurrently, I am a self-employed full-stack developer. 

        As much as I enjoy building, I love meeting new people and experiencing new things.

        My dream is to travel around the world and gain a deeper understanding of different cultures and lifestyles. Outside the world of Computer Science, I have a strong passion for food, video-games, fashion, photography, and music.


       
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
          Pursuing a Bachelor of Science in Computer Science @ Cal State University Long Beach.
        </BioSection>

      </Section>


      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Research 🔬
        </Heading>
        <Paragraph>
          UI/UX, SWE, Data Science, A-I, ML, Quant Trading
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
                <Link href="https://www.instagram.com/maxiiiguillermo/" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    leftIcon={<IoLogoInstagram />}
                  >
                    @maxiiiguillermo
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

