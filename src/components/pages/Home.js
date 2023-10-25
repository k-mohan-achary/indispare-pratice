import React from 'react'; 
import '../stylesheet/style.css';
import { Breadcrumb, Layout, Menu } from 'antd'; 
import AppHeader from './common/AppHeader';
import AppHome from './views/AppHome';
import Footter from './common/Footter';

const { Header, Content, Footer } = Layout;

const Home = () => {

  return (
    <>
      <div>  
        <Layout className="mainLayout">
            <Header>
              <AppHeader/>            
            </Header>
            <Content>
              <AppHome/>
            </Content>
            <Footer>
              <Footter/> 
            </Footer> 
        </Layout> 
      </div>    
    </>
  )
}
export default Home; 