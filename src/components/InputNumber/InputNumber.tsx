import { useState } from 'react';
import styled from 'styled-components';

interface IProps {
    unit?: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    onSelect: (value: number) => void;
    value: number;
    flex?: number;
}

const InputNumber = ({ Icon, unit, onSelect, value, flex = 1  }: IProps) => {
  const onChangeFontSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(+event.target.value);
  };

  return (
    <Container flex={flex}>
      <Icon />
      <Input value={value} onChange={onChangeFontSize} type="number" />
      {unit ? <Unit>{unit}</Unit> : null}
    </Container>
  );
};

const Container = styled.div<{flex: number}>`
display: flex;
align-items: center;
justify-content: space-between;
height: 40px;
padding-left: 10px;
flex: ${({ flex }) => flex};
`;

const Input = styled.input`
border: none;
flex: 1;
text-indent: 10px;
width: 100%;
outline: none;
font-size: 12px;
font-family: inherit;

&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

&[type=number] {
  -moz-appearance: textfield;
}
`;

const Unit = styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #AAB2BB;
padding-right: 10px;
`;

export default InputNumber;