import styled from 'styled-components';

type TItemProps = {
    label?: string;
    Block: React.FC;
}

const SettingsLayoutItem = ({ label, Block }: TItemProps) => {
  return (
    <Container>
      <Header>{label}</Header>
      <Block />
    </Container>
  );
};  

const Container = styled.div`

`;

const Header = styled.h4`
font-family: inherit;
font-weight: 600;
font-size: 11px;
line-height: 13px;
letter-spacing: 0.6px;
text-transform: uppercase;
color: #788994;
`;
  
export default SettingsLayoutItem;

