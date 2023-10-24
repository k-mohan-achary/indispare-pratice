import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd'; 
import logo from '../../assets/logo.svg'; 

const AppHeader = () => {
  return (
    <div>
        {/* <h1>Header</h1> */}
        <div className='container-fluid'>
          <div className='header'>
          <div className="logo">
            <img src={logo}/>
          </div>
          <div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{width:"600px"}} >
              <Menu.Item key='home'> Home</Menu.Item>
              <Menu.Item key='about'> About</Menu.Item>
              <Menu.Item key='features'> Features</Menu.Item>
              <Menu.Item key='howitwork'> How It Work</Menu.Item>
              <Menu.Item key='faq'> FAQ </Menu.Item>
              <Menu.Item key='pricing'> Pricing</Menu.Item>
              <Menu.Item key='contact'> Contact</Menu.Item>
            </Menu>
          </div>
            
          </div>
        </div>
            
    </div>
  )
}

export default AppHeader;