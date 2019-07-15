import * as React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Layout from '../components/Layout';
import Main from '../components/Main';

export const Index = () => (
    <Layout>
        <Sidebar/>
        <Main>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <h1>Main content here</h1>
            </div>
        </Main>
    </Layout>
)

export default Index;