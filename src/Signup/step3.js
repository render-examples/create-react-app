import { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Flex, message, Upload, Button} from 'antd';
import { Logo } from '../common';
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const centeredDivStyle = {
    width: '100%',  // Adjust the width as needed
    border: '1px solid #ccc',
    padding: '100px',
    textAlign: 'center',
    margin: "0 100px"
  };

const StepThree = ({setCurrent, formData, setFormData}) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl] = useState();
    const handleChange = (info) => {
    if (info.file.status === 'uploading') {
        setLoading(true);
    return;
    }
    if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setFormData({
            ...formData,
            img: url
        });
    });
    }
    };
    const uploadButton = (
    <button
    style={{
        border: 0,
        background: 'none',
    }}
    type="button"
    >
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div
        style={{
        marginTop: 8,
        }}
    >
        Upload
    </div>
    </button>
    );
    return (
    <div style={centeredDivStyle}>
        <Logo />
    <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
    >
        {formData.img ? (
        <img
            src={formData.img}
            alt="avatar"
            style={{
            width: '100%',
            }}
        />
        ) : (
        uploadButton
        )}
    </Upload>
    <hr />
    <Button onClick={() => setCurrent(3) }> Continue </Button>
    </div>
    );
}
 
export default StepThree;