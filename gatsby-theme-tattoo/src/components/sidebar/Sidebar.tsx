import * as React from 'react';
import styled from '@emotion/styled';
import Section from './Section';
import Key from './Key';
import Letter from './Letter';


const Container = styled.div`
    grid-area: sidebar;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas: 
    "section section section" 
    "key key key";
`;

const Sidebar = () => (
    <Container>
        <Section>
            <div>
                <Letter letter="A"/>
                <Letter letter="R"/>
            </div>
            <div>
                <Letter letter="T"/>
                <Letter letter="I"/>
                <Letter letter="S"/>
            </div>
            <div>
                <Letter letter="T"/>
                <Letter letter="S"/>
            </div>
        </Section>
        <Key>
            
        </Key>
    </Container>
)

export default Sidebar;