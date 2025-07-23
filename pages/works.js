import { Container, Heading, SimpleGrid, Box, Button, Image, Stack, Tag, List, ListItem, useColorModeValue, Icon, Text } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub, FaMobileAlt, FaDatabase, FaGlobe, FaCamera, FaUserTie } from 'react-icons/fa';

import thumbResume from '../public/images/contents/resume-main.jpg';
import budgetbuddy from '../public/images/contents/budget-buddy-main.jpg';
import thumbGo     from '../public/images/contents/go-thumbnail.jpg';
import thumbPy     from '../public/images/contents/cubeworld-main.jpg';
import thumbSS     from '../public/images/contents/solarsystem-main.jpg';
import thumbTT     from '../public/images/contents/tictactoe-main.jpg';
import thumbCC     from '../public/images/contents/complex-cube.jpg';
import thumbGS     from '../public/images/contents/girl-scout-thumbnail.jpg';

const resumeUrl = "https://docs.google.com/document/d/1jN3h7MmL12K4CI8EvpddmChOS4TF5KMQlAXKkE6TO_4/edit?usp=sharing";

const projects = [
  {
    title: 'Go! Learn Nihongo On The Go!',
    thumbnail: thumbGo,
    href: 'https://github.com/maxiguillermo1/Go',
  },
  {
    title: 'Budget Buddy!',
    thumbnail: budgetbuddy,
    href: 'https://github.com/maxiguillermo1/Budget-Buddy',
  },
  {
    title: 'PyCraft!',
    thumbnail: thumbPy,
    href: 'https://github.com/maxiguillermo1/PyCraft-A-3D-Interactive-Sandbox-Experience-Built-with-Python-PyGame-and-OpenGL.-',
  },
  {
    title: 'Solar System Animation!',
    thumbnail: thumbSS,
    href: 'https://github.com/maxiguillermo1/Solar-System',
  },
  {
    title: 'Complex Cube Program!',
    thumbnail: thumbCC,
    href: 'https://github.com/maxiguillermo1/Complex-Cube-Program-',
  },
  {
    title: 'How The Cookie Crumbles!',
    thumbnail: thumbGS,
    href: 'https://github.com/maxiguillermo1/How-The-Cookie-Crumbles',
  },
  {
    title: 'Tic Tac Toe!',
    thumbnail: thumbTT,
    href: 'https://github.com/maxiguillermo1/TIC-TAC-TOE-in-Python',
  },
];

const languageSkills = [
  'Python', 'JavaScript', 'SQL', 'Java', 'C++', 'TypeScript', 'HTML', 'CSS', 'C', 'Bash', 'Assembly', 'Kotlin', 'Swift', 'Objective-C',
];
const softwareSkills = [
  'Linux', 'Kali Linux', 'Git', 'Docker', 'AWS', 'Google Cloud Platform', 'Postgres', 'VS Code', 'PyCharm', 'IntelliJ', 'Eclipse', 'Figma',
];

const skillCards = [
  {
    icon: FaGithub,
    title: 'Git Version Control',
    description: 'Proficient in using Git for version control and collaboration on software projects.',
  },
  {
    icon: FaMobileAlt,
    title: 'App Design',
    description: 'Experienced in designing and prototyping mobile applications with modern UI/UX principles.',
  },
  {
    icon: FaDatabase,
    title: 'Back-end Development',
    description: 'Skilled in building robust and scalable backend systems and APIs.',
  },
  {
    icon: FaGlobe,
    title: 'Web Development',
    description: 'Full-stack web development using modern frameworks and best practices.',
  },

];

// Grouped coursework for better readability
const courseworkGroups = [
  {
    title: 'Math',
    courses: [
      'MATH 122 - Calculus I',
      'MATH 123 - Calculus II',
      'MATH 247 - Introduction to Linear Algebra',
    ],
  },
  {
    title: 'CECS',
    courses: [
      'CECS 225 - Digital Logic and Assembly Programming',
      'CECS 228 - Discrete Structures with Computing Applications',
      'CECS 229 - Discrete Structures with Computing Applications II',
      'CECS 274 - Data Structures',
      'CECS 277 - Object Oriented Application Development',
      'CECS 278 - Cyber Security Principles',
      'CECS 282 - Advanced C++',
      'CECS 302 - Introduction to Computer Forensics',
      'CECS 303 - Networks and Network Security',
      'CECS 323 - Database Fundamentals',
      'CECS 326 - Operating Systems',
      'CECS 327 - Introduction to Networks and Distributed Computing',
      'CECS 328 - Algorithms',
      'CECS 329 - Concepts of Computer Science Theory',
      'CECS 341 - Computer Architecture and Organization',
      'CECS 342 - Principles of Programming Languages',
      'CECS 343 - Introduction to Software Engineering',
      'CECS 378 - Introduction to Computer Security Principles',
      'CECS 449 - Computer Graphics',
      'CECS 453 - Mobile Application Development',
      'CECS 475 - Software Development with Frameworks',
      'CECS 491A - Computer Science Senior Project I',
      'CECS 491B - Computer Science Senior Project II',
    ],
  },
  {
    title: 'E E',
    courses: [
      'E E 381 - Probability and Statistics with Applications to Computing',
    ],
  },
  {
    title: 'ENGR',
    courses: [
      'ENGR 350 - Computers, Ethics and Society',
      'ENGR 361 - Scientific Research Communication',
    ],
  },
  {
    title: 'I S',
    courses: [
      'I S 360 - Cybersecurity in Business',
    ],
  },
  {
    title: 'JOUR',
    courses: [
      'JOUR 360 - Culture and Politics of the Internet',
    ],
  },
];

const Works = () => (
  <Layout title="Portfolio">
    <Container maxW="container.md" py={8}>
      {/* Resume Preview Section */}
      <Section delay={0.05}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={12}>
          <Box
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            mb={4}
            maxW={{ base: '100%', md: '700px' }}
            width="100%"
            height={{ base: '320px', md: '540px' }}
            bg={useColorModeValue('whiteAlpha.900', 'gray.900')}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={2}
          >
            <iframe
              src="https://docs.google.com/document/d/1jN3h7MmL12K4CI8EvpddmChOS4TF5KMQlAXKkE6TO_4/preview"
              title="Resume Preview"
              width="100%"
              height="500px"
              style={{ border: 'none', minHeight: '300px', width: '100%', overflowX: 'hidden', borderRadius: '12px', background: 'transparent' }}
              allowFullScreen
              scrolling="yes"
            />
          </Box>
          <Button
            as="a"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="blue"
            rightIcon={<ExternalLinkIcon />}
            size="md"
            variant="solid"
          >
            View Full Resume
          </Button>
        </Box>
      </Section>

      {/* Projects Section */}
      <Section delay={0.1}>
        <Heading as="h3" size="md" mb={6} textAlign="center">
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={8} mb={12}>
          {projects.map((project, idx) => (
            <GridItem
              key={project.title}
              title={project.title}
              thumbnail={project.thumbnail}
              href={project.href}
            />
          ))}
        </SimpleGrid>
      </Section>

      {/* Skills Section */}
      <Section delay={0.15}>
        <Box mb={2}>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} fontWeight="medium" letterSpacing="wide">
            Services
          </Text>
          <Heading as="h2" size="xl" color={useColorModeValue('grassTeal', 'skyBlue')} fontWeight="bold" mb={1}>
            Skill-Set
          </Heading>
          <Box w={12} h={1} bg={useColorModeValue('grassTeal', 'skyBlue')} borderRadius="full" mb={8} />
        </Box>
        <SimpleGrid columns={[1, 1, 3]} spacing={8}>
          {skillCards.map(card => (
            <Box
              key={card.title}
              bg={useColorModeValue('#E5E5E5', '#202023')}
              borderRadius="xl"
              boxShadow="lg"
              p={8}
              textAlign="left"
              transition="box-shadow 0.2s"
              _hover={{ boxShadow: 'xl' }}
            >
              <Icon as={card.icon} w={8} h={8} color={useColorModeValue('secondaryBlue', 'skyBlue')} mb={4} />
              <Text fontWeight="bold" fontSize="lg" color={useColorModeValue('secondaryBlue', 'skyBlue')} mb={2}>
                {card.title}
              </Text>
              <Text color={useColorModeValue('gray.700', 'gray.200')} fontSize="sm">
                {card.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      {/* Coursework Section */}
      <Section delay={0.2}>
        <Heading as="h3" size="md" mb={4} textAlign="center">
          Relevant Coursework
        </Heading>
        <Box maxW="500px" mx="auto" fontSize="md" opacity={0.9}>
          {courseworkGroups.map(group => (
            <Box key={group.title} mb={5}>
              <Box fontWeight="bold" fontSize="lg" mb={2} color="blue.400">
                {group.title}
              </Box>
              <List spacing={2} pl={4} borderLeft="2px solid" borderColor="blue.200">
                {group.courses.map(course => (
                  <ListItem key={course} pl={2}>
                    {course}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from '../components/chakra';
