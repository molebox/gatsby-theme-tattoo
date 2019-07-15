import * as React from 'react';
import styled from '@emotion/styled';

const Conatiner = styled.div`
    grid-area: section;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
    "letter letter letter" 
    "letter letter letter" 
    "letter letter letter";
`;

interface Props {
    children: React.ReactNode;
}

const Section = ({children}: Props) => (
    <Conatiner>
        {children}
    </Conatiner>
)

export default Section;