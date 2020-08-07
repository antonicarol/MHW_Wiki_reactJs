import React, { useState, useContext } from 'react';
import { Layout} from 'antd';
import PageHeader from './PageHeader';
import PageSider from './PageSider';
import Monsters from '../monsters/Monsters';
import { LayoutContext } from '../../contexts/LayoutContext';
import Home from '../intro/Home';
import HowItsDone from '../howitsdone/HowItsDone';

const {Header, Content, Sider} = Layout;

const PageLayout = () => {
    const {page, seeAs, module} = useContext(LayoutContext);
    console.log(page, seeAs)
    return ( 
        <>
        
        <Layout>
            <Header>
                <PageHeader></PageHeader>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                {(module === 'home' || module === '') && (
                    <Home></Home>
                )}
                {(module === 'seek') && (
                <Layout className="site-layout-background" style={{ padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}>
                        <PageSider></PageSider>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    {page === 'monsters' && <Monsters></Monsters>}
                    </Content>
                </Layout>
                )}

                {(module === 'how') && (
                    <HowItsDone></HowItsDone>
                )}
                
            </Content>
        </Layout>
        </>
     );
}
 
export default PageLayout;