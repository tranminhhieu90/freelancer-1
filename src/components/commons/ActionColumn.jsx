import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';

import deleteImg from 'assets/images/delete.svg';

const ActionColumn = (props) => {
  const { onDelete } = props;
  return (
    <Space>
      {onDelete && (
        <Button
          type="link"
          className="btn-action"
          danger
          icon={<img src={deleteImg} alt="Delete" style={{ width: 20, height: 20 }} />}
          onClick={onDelete}
        />
      )}
    </Space>
  );
};

export default ActionColumn;
