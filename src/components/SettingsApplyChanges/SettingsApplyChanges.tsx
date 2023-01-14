import styled from 'styled-components';

import { useAppDispatch } from '../../hooks/hooks';
import { setSettingsStatus } from '../../store/slices/settingsTextSlice';
import { SettingsTextStatus } from '../../types/types';

const SettingsApplyChanges = () => {
  const dispatch = useAppDispatch();

  const onApply = () => {
    dispatch(setSettingsStatus(SettingsTextStatus.APPLIED));
  };

  return (
    <Container onClick={onApply}>
      Apply Changes
    </Container>
  );
};

const Container = styled.button`
background: #27AE60;
border-radius: 4px;
border: none;

font-family: inherit;
font-weight: 600;
font-size: 13px;
line-height: 16px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 40px;
cursor: pointer;
transition: all 0.3s;

&:hover {
    background: #229853;
}
`;
  
export default SettingsApplyChanges;