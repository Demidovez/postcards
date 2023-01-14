import styled from 'styled-components';

type TItemProps = {
    label?: string;
    Block: React.FC;
}

const SettingsLayoutItem = ({ label, Block }: TItemProps) => {
  return (
    <div>
      <Header>{label}</Header>
      <Block />
    </div>
  );
};  

const Header = styled.h4`
font-family: inherit;
font-weight: 600;
font-size: 11px;
line-height: 16px;
letter-spacing: 0.6px;
padding-left: 1px;
text-transform: uppercase;
color: #788994;
margin-bottom: 8px;
margin-top: 16px;
`;
  
export default SettingsLayoutItem;

