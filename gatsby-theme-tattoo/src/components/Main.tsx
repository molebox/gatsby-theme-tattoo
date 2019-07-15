import * as React from 'react';
import styled from '@emotion/styled';

const Conatiner = styled.div`
    grid-area: main;
    background: tomato;
`; 

interface Props {
    children: React.ReactNode;
}

const Main = ({children}: Props) => (
    <Conatiner>
        {children}
    </Conatiner>
)

export default Main;