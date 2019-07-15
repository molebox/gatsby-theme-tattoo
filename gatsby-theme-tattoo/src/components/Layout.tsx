import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "sidebar main";
`;

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => (
    <Container>
        {children}
    </Container>
)

export default Layout;