import styled from 'styled-components';

import SettingsApplyChanges from '../SettingsApplyChanges/SettingsApplyChanges';
import SettingsLayoutItem from '../SettingsLayoutItem/SettingsLayoutItem';

type TSettingsLayout = {
  Item: typeof SettingsLayoutItem;
};

type SettingsProps = {
  children: React.ReactElement<typeof SettingsLayoutItem> | React.ReactElement<typeof SettingsLayoutItem>[];
};

const SettingsLayout: React.FC<SettingsProps> & TSettingsLayout = ({ children }) => {
  return (
    <Container>
      {children}
      <SettingsApplyChanges />
    </Container>
  );
};

const Container = styled.div`
background-color: #FFFFFF;
max-width: 240px;
width: 100%;
display: flex;
flex-direction: column;
padding: 0 15px 15px 15px;
gap: 10px;
`;
  
export default SettingsLayout;
SettingsLayout.Item = SettingsLayoutItem;
