import React from 'react';
import { Button, Form, Input } from 'antd';
import { Logo } from '../common';

const StepTwo = ({ setCurrent, formData, setFormData }) => {
  const onFinish = () => {
    setFormData({ ...formData });
  };

  return (
    <Form
      name="basic"
      style={{ maxWidth: 600, margin: '0 auto', paddingTop: '10%' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
        <Form.Item style={{ textAlign: 'center' }}>
        <Logo />
      </Form.Item>
      <Form.Item
        label="Please provide your phone number"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Please enter your address info"
        required
      >
        <Form.Item
          label="Street name"
          name="street"
          rules={[
            {
              required: true,
              message: 'Please input your street name!',
            },
          ]}
          style={{ display: 'inline-block', width: 'calc(33% - 8px)', marginRight: '8px' }}
        >
          <Input
            placeholder="Street"
            value={formData.address.street}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, street: e.target.value },
              })
            }
          />
        </Form.Item>
        <Form.Item
          label="Number"
          name="number"
          rules={[
            {
              required: true,
              message: 'Please input your street number!',
            },
          ]}
          style={{ display: 'inline-block', width: 'calc(33% - 8px)', marginRight: '8px' }}
        >
          <Input
            placeholder="Number"
            value={formData.address.number}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, number: e.target.value },
              })
            }
          />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[
            {
              required: true,
              message: 'Please input your city!',
            },
          ]}
          style={{ display: 'inline-block', width: 'calc(33% - 8px)' }}
        >
          <Input
            placeholder="City"
            value={formData.address.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, city: e.target.value },
              })
            }
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        label="Provide sentences describing what kind of DEEDZ you are able to provide"
        name="helps"
        rules={[
          {
            required: true,
            message: 'Please input your help!',
          },
        ]}
      >
        {formData.help.map((help, index) => (
          <Input
            key={index}
            placeholder="Enter your help"
            value={formData.help[index]}
            onChange={(e) => {
              const updatedHelpArray = [...formData.help];
              updatedHelpArray[index] = e.target.value;
              setFormData({ ...formData, help: updatedHelpArray });
            }}
            style={{ marginBottom: '8px' }}
          />
        ))}
        <Button
          type="dashed"
          onClick={() => {
            setFormData({
              ...formData,
              help: [...formData.help, ''],
            });
          }}
          style={{ width: '100%' }}
        >
          Add Help
        </Button>
      </Form.Item>
      <Form.Item style={{ textAlign: 'center' }}>
        <Button type="primary" onClick={() => setCurrent(2)}>
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StepTwo;
