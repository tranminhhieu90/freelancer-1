import React from 'react';
import { Button, Modal } from 'antd';
import classNames from 'classnames';
import { RiCloseLine } from 'react-icons/ri';

const ModalConfirm = (props) => {
  const { className, okText, cancelText, onOk, onCancel, children, ...rest } = props;

  return (
    <Modal
      closeIcon={<RiCloseLine size={24} />}
      className={classNames(className, 'modal-confirm')}
      onCancel={onCancel}
      footer={[
        cancelText && (
          <Button onClick={onCancel} key={2} type="link" className="flex-1 modal-confirm-cancel">
            {cancelText}
          </Button>
        ),
        okText && (
          <Button onClick={onOk} key={1} type="link" className="flex-1 modal-confirm-ok">
            {okText}
          </Button>
        ),
      ]}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default ModalConfirm;
