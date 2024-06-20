import { Button, Form, Input } from "antd";
import {useState} from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { getApiUrl } from "../api/common";
import { Logo } from "../common";
import FormItem from "antd/es/form/FormItem";

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10%',

  };
const formStyle = {
    maxWidth: 600,
    width: '100%',
  };

  const formItemStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

const StepFour = (formData, setFormData) => {
    const onFinish = () => {
        setFormData({...formData})
    }

    const sendNewUser = ({formData: data}) => {
        console.log(JSON.stringify(data))
        async function _send() {
            const formData = new FormData();
            formData.append('username', data.name);
            formData.append('phone_number', data.phone);
            formData.append('suggestion', data.help);
            formData.append('photo', data.imageUrl)
            formData.append('street', data['address']['street'])
            formData.append('number', data['address']['number'])
            formData.append('city', data['address']['city'])
            const resp = await fetch(`${getApiUrl()}/register`, {
                method: "POST",
                body: formData
            });
            const respJson = await resp.json();
            console.log(respJson);
        };

        _send();
    };
    
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div style={containerStyle}>
        <Form name="basic" labelCol={{span: 8}} wrapperCol={{span: 16}} style={formStyle} initialValues={{remember: true}} onFinish={onFinish} autoComplete="off">
            <FormItem style={formItemStyle}>
                <Logo />
            </FormItem>
            <Form.Item
            label="Please choose a password"
            name="password"
            layout="vertical"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
                <Input.Password 
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

      />
            </Form.Item>
            <Form.Item style={formItemStyle}>
                <Button onClick={() => sendNewUser(formData)} > Submit </Button>
            </Form.Item>
        </Form>
        </div>
     );
}
 
export default StepFour;