import React from 'react';
import { Steps } from 'antd';
const StepBar = ( {current} ) => (
    <Steps
      progressDot
      current={current}
      items={[
        {
          title: 'Username',
          description: 'Enter your new username',
        },
        {
          title: 'Info',
          description: 'Provide your basic info',
        },
        {
          title: 'Photo',
          description: 'Upload a photo',
        },
        {
          title: 'Finish Up',
          description: 'Enter your password'
        }
      ]}
    />
);
export default StepBar;