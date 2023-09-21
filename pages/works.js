import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import thumbResume from '../public/images/contents/resume-main.jpg';
import thumbWhite from '../public/images/contents/white.jpg';
import thumbPortfolio from '../public/images/contents/youtube-how-to-build-portfolio.jpg';
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg';
import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg';
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg';
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg';
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png';
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg';
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg';
import budgetbuddy from '../public/images/contents/budget-buddy-main.jpg';
import thumbGo     from '../public/images/contents/go-thumbnail.jpg'
import thumbPy     from '../public/images/contents/cubeworld-main.jpg'
import thumbSS     from '../public/images/contents/solarsystem-main.jpg'
import thumbTT     from '../public/images/contents/tictactoe-main.jpg'
import thumbCC     from '../public/images/contents/complex-cube.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Resume !"
            thumbnail={thumbResume}
            href="https://docs.google.com/document/d/1fKbVC_nXCJ6ddob5jcxOTgt95ynjGZOr3grLjNiBaG0/edit?usp=sharing"
          />
          <GridItem
            title="Budget Buddy !"
            thumbnail={budgetbuddy}
            href="https://github.com/maxiguillermo1/Budget-Buddy"
          />
          <GridItem
            title="Go! Learn Nihongo On The Go!"
            thumbnail={thumbGo}
            href="https://github.com/maxiguillermo1/Go"
          />
          <GridItem
            title="Solar System Animation !"
            thumbnail={thumbSS}
            href="https://github.com/maxiguillermo1/Solar-System"
          />
          <GridItem
            title="PyCraft !"
            thumbnail={thumbPy }
            href="https://github.com/maxiguillermo1/PyCraft-A-3D-Interactive-Sandbox-Experience-Built-with-Python-PyGame-and-OpenGL.-"
          />
          <GridItem
            title="Complex Cube Program !"
            thumbnail={thumbCC}
            href="https://github.com/maxiguillermo1/Complex-Cube-Program-"
          />
          <GridItem
            title="Tic Tac Toe !"s
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
