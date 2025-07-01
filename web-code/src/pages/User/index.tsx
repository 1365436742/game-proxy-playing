import {
  ActionType,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import React, { useRef } from 'react';

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProDescriptionsItemProps[] = [
    {
      title: '用户id',
      dataIndex: 'openid',
    },
    {
      title: '用户昵称',
      dataIndex: 'nickName',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a>拉黑</a>
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        rowKey="id"
        request={async (params, sorter, filter) => {
          return {
            data: [
              {
                openid: 'xxxxx',
                nickName: '热情仔',
                phone: '15214586883',
                createTime: '2025-11-10',
              },
            ],
            success: true,
          };
        }}
        // @ts-ignore
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
