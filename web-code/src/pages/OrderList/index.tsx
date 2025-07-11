import {
  ActionType,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Divider } from 'antd';
import React, { useRef } from 'react';

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProDescriptionsItemProps[] = [
    {
      title: '订单id',
      dataIndex: 'id',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '金额',
      dataIndex: 'money',
    },
    {
      title: '用户昵称',
      dataIndex: 'nickName',
    },
    {
      title: '用户id',
      dataIndex: 'openid',
    },
    {
      title: '接单人',
      dataIndex: 'name',
    },
    {
      title: '接单人手机号',
      dataIndex: 'phone',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a>退款</a>
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
                status: 0,
                orderId: 'xxx4557ddd',
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
