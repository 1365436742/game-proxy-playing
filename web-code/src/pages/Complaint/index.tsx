import {
  ActionType,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Divider } from 'antd';
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
      title: '用户电话',
      dataIndex: 'phone',
    },
    {
      title: '处理状态',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '已解决' },
        1: { text: '无需解决' },
        2: { text: '未解决' },
      },
    },
    {
      title: '投诉订单',
      dataIndex: 'orderId',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a>投诉原因</a>
          <Divider type="vertical" />
          <a>订单信息</a>
          <Divider type="vertical" />
          <a>反馈</a>
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
