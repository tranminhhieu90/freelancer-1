import { getAllUsers, removeUser } from 'app/services/admin/user';
import ActionColumn from 'components/commons/ActionColumn';
import ModalConfirm from 'components/commons/ModalConfirm';
import Table from 'components/commons/Table';
import React, { useEffect, useState } from 'react';
import { getIndex, notify } from 'utils';
import deleteImg from 'assets/images/delete.svg';
import './styles.scss';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [deleteUser, setDeleteUser] = useState({
    visible: false,
    id: null,
  });
  const columns = [
    {
      title: 'ID',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      width: 70,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      align: 'center',
    },
    {
      title: 'Action',
      dataIndex: '_id',
      key: 'action',
      align: 'right',
      width: 150,
      render: (value, row) => (
        <ActionColumn
          value={value}
          row={row}
          onDelete={() => {
            setDeleteUser({ visible: true, id: row.id });
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.current, pagination.pageSize]);

  const fetchUsers = async () => {
    try {
      const { data } = await getAllUsers(pagination);
      setUsers(
        data.items.map((item, index) => ({
          index: getIndex(index, pagination),
          ...item,
        }))
      );
      setPagination({ ...pagination, total: data.meta.totalItems });
    } catch (error) {
      setUsers([]);
    }
  };

  const onPageChange = (current) => {
    pagination.current = current;
    setPagination({ ...pagination });
  };

  const onPageSizeChange = (current, pageSize) => {
    pagination.pageSize = pageSize;
    setPagination({ ...pagination });
  };

  const onDelete = async () => {
    try {
      await removeUser(deleteUser.id);
      await fetchUsers();
      notify('success', 'User deleted  successfully');
    } finally {
      setDeleteUser({ visible: false, id: null });
    }
  };

  return (
    <div>
      <Table
        dataSource={users}
        scroll={{
          x: 'max-content',
        }}
        // loading={loading}
        columns={columns}
        pagination={pagination}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
      <ModalConfirm
        width={450}
        title="Delete User"
        visible={deleteUser.visible}
        okText="OK"
        cancelText="キャンセル"
        onCancel={() => setDeleteUser({ visible: false, id: null })}
        onOk={onDelete}
      >
        <div className="ant-modal-body-delete">
          <div className="ant-modal-body-delete-icon">
            <img src={deleteImg} alt="Delete" style={{ width: 34, height: 34 }} />
          </div>
          <p className="text-center">Are you sure you want to delete it?</p>
        </div>
      </ModalConfirm>
    </div>
  );
};

export default UserList;
