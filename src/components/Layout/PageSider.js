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
        
      <Menu.Item onClick={()=>{
              handleSetPage('monsters');
              }} key="1">Monsters</Menu.Item>
       {/*  <SubMenu key="sub2"  title="Weapons">
          <Menu.Item key="3">option5</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="Foods">
          <Menu.Item key="4">option9</Menu.Item>
        </SubMenu> */}
      </Menu> );
}
 
export default PageSider;