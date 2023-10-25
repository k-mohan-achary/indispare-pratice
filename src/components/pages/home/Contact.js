import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;


const Contact = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <>
    <div>
        <div id="contact" className='block contactBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Get In Touch</h2>
                    <p>Contact them by writing to them or phoning them. If you are, keep, or stay in touch with them, you write, phone, or visit each other regularly.</p>

                </div>
            </div>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                // onFinish={onFinish}
                >
                <Form.Item
                    name="Full Name "
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Full Name !',
                    },
                    ]}
                >
                    <Input placeholder="Full Name " />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                    { required: true, message: 'Please input your email!', }, ]}
                >
                    <Input type="email"  placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                    name="telephone "
                    rules={[
                    { required: true, message: 'Please input your telephone !', }, ]}
                >
                    <Input placeholder="Telephone " /> 
                </Form.Item> 
                <Form.Item
                    name="subject "
                    rules={[
                    { required: true, message: 'Please input your subject !',} ]}
                >
                    <Input placeholder="Subject " />
                </Form.Item> 
                <Form.Item
                    name="message "
                    rules={[
                    { required: true, message: 'Please input your message !',} ]}
                >
                    <TextArea placeholder="Message " />
                </Form.Item> 


                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                    ]}
                    // {...tailFormItemLayout} 
                >
                    <Checkbox>
                    I Agree With Terms and Conditions 
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Submit
                    </Button>
                    {/* Or <a href="">register now!</a> */}
                </Form.Item>
            </Form>

        </div>
        
    </div> 
    
    </>
  )
}

export default Contact;
