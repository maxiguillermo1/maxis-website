import { Container, Heading, Flex } from '@chakra-ui/react';
import Main from '../components/layouts/main';  // Import the Main layout component

const Gaming = () => (
  <Main title="Gaming" hideGraphic={true}>  {/* Set hideGraphic to true */}
    <Container>
      <Flex direction="column" align="center" justify="center" h="100vh">
        <Heading as="h3" fontSize={20} mb={4}>
          Welcome to the Gaming Page
        </Heading>
      </Flex>
    </Container>
  </Main>
);

export default Gaming;
export { getServerSideProps } from '../components/chakra';
