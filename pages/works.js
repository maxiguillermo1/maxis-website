import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import thumbResume from '../public/images/contents/resume-main.jpg';
import budgetbuddy from '../public/images/contents/budget-buddy-main.jpg';
import thumbGo     from '../public/images/contents/go-thumbnail.jpg'
import thumbPy     from '../public/images/contents/cubeworld-main.jpg'
import thumbSS     from '../public/images/contents/solarsystem-main.jpg'
import thumbTT     from '../public/images/contents/tictactoe-main.jpg'
import thumbCC     from '../public/images/contents/complex-cube.jpg'
import thumbGS     from '../public/images/contents/girl-scout-thumbnail.jpg'
const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title=""
            thumbnail={thumbResume}
            href="https://docs.google.com/document/d/1jN3h7MmL12K4CI8EvpddmChOS4TF5KMQlAXKkE6TO_4/edit?usp=sharing"
          />
           <GridItem
            title="Go! Learn Nihongo On The Go!"
            thumbnail={thumbGo}
            href="https://github.com/maxiguillermo1/Go"
          />
          <GridItem
            title="Budget Buddy !"
            thumbnail={budgetbuddy}
            href="https://github.com/maxiguillermo1/Budget-Buddy"
          />
          <GridItem
            title="PyCraft!"
            thumbnail={thumbPy }
            href="https://github.com/maxiguillermo1/PyCraft-A-3D-Interactive-Sandbox-Experience-Built-with-Python-PyGame-and-OpenGL.-"
          />
          <GridItem
            title="Solar System Animation!"
            thumbnail={thumbSS}
            href="https://github.com/maxiguillermo1/Solar-System"
          />
          
          <GridItem
            title="Complex Cube Program!"
            thumbnail={thumbCC}
            href="https://github.com/maxiguillermo1/Complex-Cube-Program-"
          />
          <GridItem
            title="How The Cookie Crumbles!"s
            thumbnail={thumbGS}
            href="https://github.com/maxiguillermo1/How-The-Cookie-Crumbles"
          />
          <GridItem
            title="Tic Tac Toe!"s
            thumbnail={thumbTT}
            href="https://github.com/maxiguillermo1/TIC-TAC-TOE-in-Python"
          />
          
        </SimpleGrid>
      
      </Section>
    
    </Container>
  
  </Layout>
);

export default Posts;
export { getServerSideProps } from '../components/chakra';
