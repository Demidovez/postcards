import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as AlignCenterSVG } from '../../assets/icons/align_center.svg';
import { ReactComponent as AlignJustifySVG } from '../../assets/icons/align_justify.svg';
import { ReactComponent as AlignLeftSVG } from '../../assets/icons/align_left.svg';
import { ReactComponent as AlignRightSVG } from '../../assets/icons/align_right.svg';
import { ReactComponent as FontSizeSVG } from '../../assets/icons/font_size.svg';
import { ReactComponent as LetterSpacingSVG } from '../../assets/icons/letter_spacing.svg';
import { ReactComponent as LineHeightSVG } from '../../assets/icons/line_height.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setAlign, setColor, setFontFamily, setFontSize, setFontWeight, setLetterSpacing, setLineHeight } from '../../store/slices/settingsTextSlice';
import { TextAlign } from '../../types/types';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Dropdown from '../Dropdown/Dropdown';
import InputNumber from '../InputNumber/InputNumber';

const SettingsText = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector(state => state.settings);

  const [fonts] = useState<string[]>([
    'Fira Sans',
    'Merriweather',
    'Nunito',
    'Quicksand',
    'Roboto',
  ]);

  const [weights] = useState<string[]>([
    'Light',
    'Regular',
    'Bold',
  ]);

  const [colors] = useState<string[]>([
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#9b59b6',
    '#292929',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#ecf0f1',
    '#7f8c8d',
  ]);

  return (
    <Container>
      <Row>
        <Dropdown 
          items={fonts}
          value={settings.fontFamily} 
          onSelect={(font) => dispatch(setFontFamily(font))}
        />
      </Row>
      <Row>
        <Dropdown 
          items={weights} 
          value={settings.fontWeight} 
          onSelect={(weight) => dispatch(setFontWeight(weight))}
          flex={4}
        />
        <InputNumber 
          Icon={FontSizeSVG} 
          value={settings.fontSize} 
          onSelect={(size) => dispatch(setFontSize(size))}
          flex={2}
        />
      </Row>
      <Row>
        <Dropdown 
          items={colors} 
          colorPicker 
          value={settings.color} 
          onSelect={(color) => dispatch(setColor(color))}
        />
      </Row>
      <Row>
        <InputNumber 
          Icon={LineHeightSVG} 
          unit="%"
          value={settings.lineHeight} 
          onSelect={(height) => dispatch(setLineHeight(height))}
        />
        <InputNumber 
          Icon={LetterSpacingSVG} 
          unit="px"
          value={settings.letterSpacing} 
          onSelect={(spacing) => dispatch(setLetterSpacing(spacing))}
        />
      </Row>
      <Row>
        <ButtonIcon<TextAlign>
          Icon={AlignLeftSVG} 
          state={TextAlign.LEFT}
          value={settings.align} 
          onSelect={(align) => dispatch(setAlign(align))}
        />
        <ButtonIcon 
          Icon={AlignCenterSVG} 
          state={TextAlign.CENTER}
          value={settings.align} 
          onSelect={(align) => dispatch(setAlign(align))}
        />
        <ButtonIcon
          Icon={AlignRightSVG} 
          state={TextAlign.RIGHT}
          value={settings.align} 
          onSelect={(align) => dispatch(setAlign(align))}
        />
        <ButtonIcon  
          Icon={AlignJustifySVG} 
          state={TextAlign.JUSTIFY}
          value={settings.align} 
          onSelect={(align) => dispatch(setAlign(align))}
        />
      </Row>
    </Container>
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const Row = styled.div`
border: 1px solid #E8ECF0;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: space-between;

& > *:not(:last-child) {
  border-right: 1px solid #E8ECF0;
}
`;
  
export default SettingsText;