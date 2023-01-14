import { useState } from 'react';
import styled from 'styled-components';

const Preview = () => {
  const [ text, setText ] = useState('');

  console.log(text);

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Container>
      <Textarea onChange={onChangeText} placeholder="Type Here..." value={text}/>
    </Container>
  );
};

const Container = styled.div`
background-color: #FFFFFF;
min-width: 600px;
width: 50%;
padding: 30px;
display: flex;
`;

const Textarea = styled.textarea`
width: 100%;
resize: none;
outline: none;
border: none;

&::placeholder {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: black
}
`;

export default Preview;