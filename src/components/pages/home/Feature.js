import React ,{ Component }from 'react';
import { Card,Col,Row} from 'antd'; 

import morden from '../../assets/modern-design.jpg';
import clean from '../../assets/clean-design.jpg';
import great from '../../assets/great-support.jpg';
import easy from '../../assets/easy-customise.jpg';
import unlimited from '../../assets/unlimited-features.jpg';
import advanced from '../../assets/advanced-option.jpg';   
import Indispar from './Indispar';
   
const { Meta } = Card;
 

const Feature = () => {
  return (
    <>
    <div id="features" className='block featureBlock bgGray'>
        <div className='container-fluid'>  
            <div className='titleHolder'> 
                <h2>Key Features and Benefits</h2>
                <p></p> 
            </div>
            
            <Row gutter={[16, 16]}>
                <Col md={{ span:8}} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={morden} />}
                >
                    <Meta title="Morden Design"/>
                </Card>
                </Col>
                <Col md={{ span:8}} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={clean} />}
                >
                    <Meta title="Clean and Elegant"/>
                </Card>
                </Col>
                <Col md={{ span:8}} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={great} />}
                >
                    <Meta title="Great Support"/>
                </Card>
                </Col>
                <Col md={{ span:8}} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={easy} />}
                >
                    <Meta title="Easy to customise"/>
                </Card>
                </Col>
                <Col md={{ span:8}} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={unlimited} />}
                >
                    <Meta title="Unlimited Features"/>
                </Card>
                </Col>
                <Col md={{ span:8}} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={advanced} />}
                >
                    <Meta title="Advanced Options"/>
                </Card>
                </Col> 
            </Row> 
        </div> 
     </div>  
     <Indispar/>
    </>
  )
}

export default Feature; 


