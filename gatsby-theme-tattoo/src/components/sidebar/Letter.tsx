import * as React from 'react';
import styled from '@emotion/styled';

const Conatiner = styled.div`
    grid-area: letter;
`; 

interface Props {
    letter: string
}

const Letter = ({letter}: Props) => (
    <Conatiner>
        {letter}
    </Conatiner>
)

export default Letter;