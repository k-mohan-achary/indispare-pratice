import React from 'react';
import { Card,Col, Row, Slider,Avatar,Button} from 'antd'; 

import morden from '../../assets/modern-design.jpg';
import clean from '../../assets/clean-design.jpg';
import great from '../../assets/great-support.jpg';
import easy from '../../assets/easy-customise.jpg';
import unlimited from '../../assets/unlimited-features.jpg';
import advanced from '../../assets/advanced-option.jpg'; 

import bearing from '../../assets/categories/bearing.jpg'; 
const lubricant ='https://backend.indispare.com/cache/small/category/942/Og8rKoQ2Sq2iZyeMoZlXzNDOPgMJm4D1fUZzqPE3.jpg'; 
const belt ='https://backend.indispare.com/cache/small/category/1192/DHUqgYstuaJcCf8LGapBmfo6nrqt0zF07QpemL3v.jpg'; 
const pumps ='https://backend.indispare.com/cache/small/category/1255/2yEuG1Ti3qBivl93ldQAKm9hbPQad3DxS9av1vyV.jpg'; 
const oil ='https://backend.indispare.com/cache/small/category/1307/6p7WowxSOheu7YhnxGt0UgHYVDdxdyYMTmvbLab2.jpg'; 
const motor ='https://backend.indispare.com/cache/small/category/8910/yncbsKauHTDjp8Lom1CU1nXCy5ymfkPBdEt6bbg5.jpg';  

 
const { Meta } = Card;

const items = [
    {
      key: '1',
      image: bearing,
      title: 'Bearings', 
    },
    {
      key: '2',
      image: lubricant ,
      title: 'Lubricants & Adhesives', 
    },
    {
      key: '3',
      image: belt,
      title: 'V Belts', 
    },
    {
      key: '4',
      image: pumps,
      title: 'Pumps', 
    },
    {
      key: '5',
      image: oil,
      title: 'Oil Seals', 
    },
    {
      key: '6',
      image: motor,
      title: 'Motors', 
    }, 
  ]


const Feature = () => {
  return (
    <>
    <div className='block featureBlock bgGray'>
        <div className='container-fluid'>  
            <div className='titleHolder'>
                <h2>Key Features and Benefits</h2>
                <p></p>

            </div>
            
            <Row gutter={[16, 16]}>
                <Col md={{ span: 8 }} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={morden} />}
                >
                    <Meta title="Morden Design"/>
                </Card>
                </Col>
                <Col md={{ span: 8 }} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={clean} />}
                >
                    <Meta title="Clean and Elegant"/>
                </Card>
                </Col>
                <Col md={{ span: 8 }} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={great} />}
                >
                    <Meta title="Great Support"/>
                </Card>
                </Col>
                <Col md={{ span: 8 }} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={easy} />}
                >
                    <Meta title="Easy to customise"/>
                </Card>
                </Col>
                <Col md={{ span: 8 }} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={unlimited} />}
                >
                    <Meta title="Unlimited Features"/>
                </Card>
                </Col>
                <Col md={{ span: 8 }} >
                <Card
                    hoverable 
                    cover={<img alt="example" src={advanced} />}
                >
                    <Meta title="Advanced Options"/>
                </Card>
                </Col>
                 
            </Row>
  
  <br/>
  <br/>
  <br/>
            <Row gutter={[16, 16]}> 

 
                {items.map(item => {
                    return (
                     <Col md={{ span: 4 }} className='categori'> 
                        <Card
                            hoverable  
                        > 
                          <div className='categori-div'>
                          <img src={item.image} />
                          <h2  className='cat-heading'> {item.title} </h2>  
                          <Button type="primary">  View All Products </Button>
                        </div>  
                        </Card> 
                    </Col>
                    );
                })} 
            </Row>
        </div>
    </div>
    
    </>
  )
}

export default Feature