import React from 'react'; 
import '../stylesheet/style.css';
import { Breadcrumb, Layout, Menu } from 'antd'; 
import AppHeader from './common/AppHeader';
import AppHome from './views/AppHome';


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
        </Layout>
        
     </div>    
    </>
  )
}

export default Home