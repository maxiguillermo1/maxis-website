import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'



import thumbComingSoon from '../public/images/contents/coming-soon-thumb.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title=""
            thumbnail={thumbComingSoon}
            href="http://localhost:3000/"
          />
          <GridItem
            title=""
            thumbnail={thumbComingSoon}
            href="http://localhost:3000/"
          />
          <GridItem
            title=""
            thumbnail={thumbComingSoon}
            href="http://localhost:3000/"
          />
          <GridItem
            title=""
            thumbnail={thumbComingSoon}
            href="http://localhost:3000/"
          />
        </SimpleGrid>
      
      </Section>
    
    </Container>
  
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
