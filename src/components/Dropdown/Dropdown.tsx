import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowDownSVG } from '../../assets/icons/arrow_down.svg';

interface IProps {
    items: string[];
    colorPicker?: boolean;
    onSelect: (value: string) => void;
    value: string;
    flex?: number;
}

const Dropdown = ({ items, colorPicker = false, onSelect, value, flex = 1 }: IProps) => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <Container onClick={() => setIsOpen(state => !state)} flex={flex}>
      <Content>
        {
          colorPicker ? <ColorSquere color={value} /> : null
        }
        <Value>{value}</Value>
      </Content>
      <Icon><ArrowDownSVG stroke='#AAB2BB'/></Icon>
      {
        isOpen && (
          <Data>
            {items.map((item, index) => (
              <DataItem key={index} onClick={() => onSelect(item)}>
                {colorPicker ? <ColorSquere color={item} /> : null}
                <span>{item}</span>
              </DataItem>
            ))}
          </Data>
        )
      }
    </Container>
  );
};

const Container = styled.div<{flex: number}>`
display: flex;
align-items: center;
justify-content: space-between;
transition: all 0.2s;
cursor: pointer;
flex: ${({ flex }) => flex};
position: relative;
height: 100%;

&:hover {
    border-color: #d8dce0; 
}
`;

const Content = styled.div`
display: flex;
`;

const Value = styled.span`
font-family: inherit;
font-weight: 400;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
color: #2D3A41;
padding-left: 15px;
`;

const ColorSquere = styled.div<{color: string}>`
width: 18px;
height: 18px;
background: ${({ color }) => color};
border-radius: 3px;
margin-left: 11px;
`;

const Icon = styled.span`
display: flex;
padding-right: 9px;
margin-top: -2px;
`;

const Data = styled.div`
position: absolute;
top: 45px;
background: white;
border-radius: 4px;
z-index: 10;
box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.2);
width: 100%;
max-height: 150px;
overflow: scroll;
`;

const DataItem = styled.div`
display: flex;
align-items: center;
gap: 10px;
padding: 7px 10px;
font-size: 14px;
cursor: pointer;
transition: all 0.3s;

&:hover {
    background-color: #F4F4F4;
}
`;
  
export default Dropdown;