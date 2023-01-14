import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../hooks/hooks';
import { initialSettingsTextState, SettingsTextState } from '../../store/slices/settingsTextSlice';
import { SettingsTextStatus, TextAlign, TextWeight } from '../../types/types';

type TPreviewSettings = Omit<SettingsTextState, 'status'>

const Preview = () => {
  const [ text, setText ] = useState('Type Here...');
  const [ settings, setSettings ] = useState<TPreviewSettings>(initialSettingsTextState);

  const { status, ...editingSettings } = useAppSelector(state => state.settings);

  useEffect(() => {
    if (status === SettingsTextStatus.APPLIED) {
      setSettings(editingSettings);
    }
  }, [status]);

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Container>
      <Textarea 
        onChange={onChangeText} 
        value={text} 
        settings={settings}
      />
    </Container>
  );
};

const Container = styled.div`
background-color: #FFFFFF;
min-width: 500px;
width: 45%;
padding: 30px;
display: flex;
`;

const Textarea = styled.textarea<{settings: TPreviewSettings}>`
font-family: ${({ settings }) => settings.fontFamily};
font-weight: ${({ settings }) => TextWeight[settings.fontWeight]};
font-size: ${({ settings }) => settings.fontSize}pt;
color: ${({ settings }) => settings.color};
line-height: ${({ settings }) => settings.lineHeight}%;
letter-spacing: ${({ settings }) => settings.letterSpacing}px;
text-align: ${({ settings }) => TextAlign[settings.align]};
width: 100%;
resize: none;
outline: none;
border: none;
`;

export default Preview;