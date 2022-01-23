import React from 'react';
import { PaginationProps, Table as ANTTable } from 'antd';

const Table = (props) => {
  const {
    className,
    scroll = 'max-content',
    dataSource,
    columns,
    pagination,
    onPageChange,
    onPageSizeChange,
    loading,
    onRow,
    rowClassName,
  } = props;

  return (
    <ANTTable
      className={className}
      dataSource={dataSource}
      columns={columns}
      loading={loading}
      onRow={onRow}
      rowClassName={rowClassName}
      pagination={
        pagination && {
          ...pagination,
          position: ['bottomCenter'],
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50', '100'],
          onChange: onPageChange,
          onShowSizeChange: onPageSizeChange,
          locale: {
            items_per_page: '',
          },
        }
      }
      locale={{
        emptyText: 'データがありません。',
      }}
      scroll={scroll}
    />
  );
};

export default Table;
