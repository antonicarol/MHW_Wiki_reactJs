import React, { useContext } from 'react';
import { Menu } from 'antd';
import { LayoutContext } from '../../contexts/LayoutContext';

const PageHeader = () => {
  const{handleSetModule} = useContext(LayoutContext)
    return ( 
      <>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item onClick={()=>handleSetModule('home')} key="1">Home</Menu.Item>
          <Menu.Item onClick={()=>handleSetModule('seek')} key="2">Seek Information</Menu.Item>
          <Menu.Item onClick={()=>handleSetModule('how')}key="3">How its this done?</Menu.Item>
        </Menu>
        </>
     );
}
 
export default PageHeader;