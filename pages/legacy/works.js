import { Container, Heading, SimpleGrid, Box, List, ListItem } from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';
import { GridItem } from '../../components/grid-item';

import budgetbuddy from '../../public/images/contents/budget-buddy-main.jpg';
import thumbGo     from '../../public/images/contents/go-thumbnail.jpg';
import thumbPy     from '../../public/images/contents/cubeworld-main.jpg';
import thumbSS     from '../../public/images/contents/solarsystem-main.jpg';
import thumbTT     from '../../public/images/contents/tictactoe-main.jpg';
import thumbCC     from '../../public/images/contents/complex-cube.jpg';
import thumbGS     from '../../public/images/contents/girl-scout-thumbnail.jpg';

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
      {/* Projects Section */}
      <Section delay={0.1}>
      <Heading as="h2" variant="section-title">
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

      {/* Coursework Section */}
      <Section delay={0.15}>
      <Heading as="h4" variant="section-title">
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
export { getServerSideProps } from '../../components/chakra';
