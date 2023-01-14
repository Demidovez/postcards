import styled from 'styled-components';

import Preview from './components/Preview/Preview';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <Container>
      <Content>
        <Preview />
      </Content>
      <Settings />
    </Container>
  );
}

const Container = styled.div`
background-color: #F4F4F4;
min-height: 100vh;
display: flex;
justify-content: space-between;
`;

const Content = styled.div`
display: flex;
justify-content: center;
flex: 1;
padding: 40px 0;
`;

export default App;
