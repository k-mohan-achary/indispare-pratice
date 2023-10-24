import React ,{ Component }from 'react';
import { Card,Col, Row, Slider,Avatar,Button} from 'antd'; 

import morden from '../../assets/modern-design.jpg';
import clean from '../../assets/clean-design.jpg';
import great from '../../assets/great-support.jpg';
import easy from '../../assets/easy-customise.jpg';
import unlimited from '../../assets/unlimited-features.jpg';
import advanced from '../../assets/advanced-option.jpg';  
import bearing from '../../assets/categories/bearing.jpg'; 

import product from './products.json';

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
      title: 'Lubricants', 
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
    {
      key: '7',
      image: 'https://backend.indispare.com/cache/small/category/8916/hiAygXUiYCBL2cy6DxCUz1vRLw3oCUy1ukN7GVKU.jpg',
      title: 'Saftey Wear', 
    }, 
    {
      key: '8',
      image: 'https://backend.indispare.com/cache/small/category/8924/wzlg69KWcKmExitejyNSY949M3n8gihLLibfFHzW.jpg',
      title: 'Computers', 
    }, 
    {
      key: '9',
      image: 'https://backend.indispare.com/cache/small/category/8929/YQODEmsnCCzhB9SdHrnnADnlAtmlq2CLMJzuabYr.jpg',
      title: 'Switch Gear', 
    }, 
    {
      key: '10',
      image: 'https://backend.indispare.com/cache/small/category/8968/UGGrjoRoRfEXFkIBMzYBzQ1WA2fFNzTdKRZ3iZOF.jpg',
      title: 'Pipes', 
    }, 
    {
      key: '11',
      image: 'https://backend.indispare.com/cache/small/category/9147/TAKtTHuVsGIjN17FLJrc6b9oVWjmqxGdhyYQWXwO.jpg',
      title: 'Hand Tools', 
    }, 
    {
      key: '12',
      image: 'https://backend.indispare.com/cache/small/category/9158/sMz20BliH9CWN5dH02xNV1oKhS99xqQPclse5zTk.jpg',
      title: 'Power Tools', 
    }, 
  ]

const products = [
    {
      key: '1',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/141506/1.jpg',
      title: 'Fenner BX70 | Powerflex Plus Raw Edge Cogged Section BX V Belts',
      offer:'45%',
      price:'374',
      gst:'Exc. of GST', 
    },
    {
      key: '2',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/137003/1.jpg' ,
      title: 'Fenner | PB-C240 PB Classical Belts Section C - Pitch Length 6150mm', 
      offer:'45%',
      price:'1741.85',
      gst:'Exc. of GST', 
    },
    {
      key: '3',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/58253/1.jpg',
      title: 'Bosch | 4 Inch Full Rim Diamond Cutting Blades For Tile Cutting',  
      offer:'10%',
      price:'112.50',
      gst:'Exc. of GST',   },
    {
      key: '4',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/207078/1.jpg',
      title: 'De Neers  CPH-680 | COPPER HAMMER',  
      offer:'20%',
      price:'2976.00',
      gst:'Exc. of GST', },
    {
      key: '5',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/339136/1.jpg',
      title: 'ABB 1SYS272012R0011 | 1SYS272012R0011 Miniature Circuit Breaker Series SB202 M D - Rated Current 1A',  
      offer:'40%',
      price:'1122.00',
      gst:'Exc. of GST',     
    },
    {
      key: '6',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/174636/1.jpg',
      title: 'L & T CM94179OOOOX1 | Moulded Case Circuit Breaker',  
      offer:'40%',
      price:'47418.00',
      gst:'Exc. of GST',  
    }, 
    {
      key: '7', 
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/343051/1.jpg', 
      title: 'PolyCab  PINFC-LDC-0.75 | PINFC-LDC-0.75 Industrial Flexible Cable Rate per 100m Coils 1100VAC -  0.75mm2', 
      offer:'45%', 
      price:'19195.00',
      gst:'Exc. of GST',  
    }, 
    {
      key: '8',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/210248/1.jpg',
      title: 'PolyCab  PINFC-LDC-2.5 | PINFC-LDC-2.5 Industrial Flexible Cable Rate per 100m Coils 1100VAC -  2.5mm2',  
      offer:'45%',
      price:'8937.50',
      gst:'Exc. of GST',    
    }, 
    {
      key: '9',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/210248/1.jpg',
      title: 'Fag 6016-2Z-L140-C3 | DeepGroove Ball Bearings',
      offer:'40%',
      price:'1316.40',
      gst:'Exc. of GST',  
    }, 
    {
      key: '10',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/270564/1.jpg',
      title: 'Fag Fag-UCF215-J7 | Four-bolt flanged housing units',  
      offer:'40%',
      price:'6029.40',
      gst:'Exc. of GST', 
    }, 
    {
      key: '11',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/266424/1.jpg',
      title: 'SKF 4303 ATN9 | Deep Groove Bearing', 
      offer:'40%',
      price:'2202.60',
      gst:'Exc. of GST', 
    }, 
    {
      key: '12',
      image: 'https://indisparedev.s3.ap-south-1.amazonaws.com/product/267517/1.jpg',
      title: 'SKF SKF-7307 BE-2RZP | Single row angular contact ball Bearing',
      offer:'45%',
      price:'2354.40',
      gst:'Exc. of GST',  
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
  
        <br/>
        <br/>
        <br/>
            <div>
            <div className='titleHolderr'>
                <h3>Key Features and Benefits</h3> 
            </div>
            <Row gutter={[16, 16]}>  

                {items.map(item => {
                    return (
                     <Col md={{span:4}}  className='categori'> 
                        <Card
                          width={180}
                          hoverable  
                        > 
                          <div className='categoria-div'>
                            <img src={item.image} /> 
                            <h2  className='cat-heading'> {item.title} </h2>  
                            <Button  className='cat-btn'>  View All Products </Button> 
                          </div>  
                        </Card> 
                    </Col>
                    );
                })}
            </Row> 
            </div> 

            

        </div>
    </div>
      
    <div> 
        <div className='block featureBlock'>
            <div className='container-fluid'> 
                <div className='titleHolderr'>
                 <h3>Best Selling Products</h3> 
                </div>
                <div> 
                    <Row gutter={[16, 16]}>  
 
                        {product.map(product => {
                        return ( 
                          <Col md={{span:4}}>  
                            <Card  
                              hoverable  
                            >  
                              <div className='sell-product'>
                                  <Button className='sell-btn'>{product.offer}  OFF </Button> 
                                  <img src={product.image} /> 
                                  <p>{product.title}</p> 
                                  <h6> ₹ {product.price} <span className='spa'>Exc. of GST</span></h6>  
                              </div> 
                            </Card>  
                          </Col> 
                        );
                        })}  
                    </Row>
                </div>
               
            </div> 
        </div> 
    </div> 
            
    
    </>
  )
}

export default Feature;


