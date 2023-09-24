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
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Computer Scientist based in California!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Maxwell Guillermo
          </Heading>
          <p>Aspring Computer Scientist ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/maxi.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        Seeking a Summer 2024 Internship!
        </Heading>
        <Paragraph>
        I believe that technology has the power to revolutionize our lives in a meaningful way.
        As a computer scientist, I strive to be at the forefront of this change, seeking to
        develop solutions that not only solve real-world problems but also enrich our daily lives as humans.

        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>

      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        Maxi Guillermo is a driven computer science student and a passionate full-stack developer, 
        actively advancing his skills in programming languages and the foundational concepts of Computer Science. 
        Inspired by a desire to build innovative software solutions, he's branching into 
        Machine Learning and Artificial Intelligence to elevate his real-world problem-solving capabilities.
        </Paragraph>
      
      </Section>

      <Section delay={0.2}>
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests 🔬
        </Heading>
        <Paragraph>
          UI/UX, SWE, Data Science, A-I, ML, Quant Trading
        </Paragraph>
      </Section>
      
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Video Games, Music,{' '}
          <Link href="https://drive.google.com/drive/folders/1Iz1wIQlNB4aXdOU74a4AjWEge-pbG_3v?usp=sharing" target="_blank">
            Photography
          </Link>

         , Fashion
        </Paragraph>
      </Section>

      <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        On the web
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/maxiguillermo1" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
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
                    colorScheme="teal"
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
                    colorScheme="teal"
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
                    colorScheme="teal"
                    leftIcon={<FaDiscord />}
                  >
                    @astrofy
                  </Button>
                </Link>
              </ListItem>

              <ListItem>
                <Link href="https://twitter.com/astrofying" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoTwitter />}
                  >
                    @astrofying
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
                colorScheme="teal"
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