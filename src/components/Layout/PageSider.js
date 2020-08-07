import React, { useContext } from 'react';
import {Layout, Menu } from 'antd';
import { LayoutContext } from '../../contexts/LayoutContext';
import { Icon } from 'evergreen-ui';
const {SubMenu} = Menu;


const PageSider = () => {
    const{handleSetPage, handleSetSeeAs} = useContext(LayoutContext)
    return ( 
    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        
        <SubMenu key="sub1" title="Monsters">
        <i src="/img/monster-icon.png"></i>
          <Menu.Item onClick={()=>{
              handleSetPage('monsters');
              handleSetSeeAs('cards');
              }} key="1">See as cards</Menu.Item>
          <Menu.Item onClick={()=>{
              handleSetPage('monsters');
              handleSetSeeAs('table');
              }} key="2">See as table</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2"  title="Weapons">
          <Menu.Item key="3">option5</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="Foods">
          <Menu.Item key="4">option9</Menu.Item>
        </SubMenu>
      </Menu> );
}
 
export default PageSider;