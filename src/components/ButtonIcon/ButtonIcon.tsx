import { useState } from 'react';
import styled from 'styled-components';

interface IProps<T> {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    onSelect: (value: T) => void;
    value: T;
    state: T;
}

function ButtonIcon<T>({ Icon, onSelect, value, state }: IProps<T>) {
  const [ size, setSize ] = useState(14);

  const onClick = () => {
    onSelect(state);
  };

  return (
    <Container onClick={onClick}>
      <Icon fill={value === state ? '#2198ED' : '#AAB2BB88'}/>
    </Container>
  );
};

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 40px;
flex: 1;
cursor: pointer;
`;

export default ButtonIcon;