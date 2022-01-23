import React from 'react';
import { Spin } from 'antd';
import { AiOutlineLoading } from 'react-icons/ai';

const Loading = ({ label = 'Loading...' }) => {
  return (
    <div className="loading-container">
      <Spin tip={label} indicator={<AiOutlineLoading style={{ fontSize: 28 }} />} />
    </div>
  );
};

export default Loading;
