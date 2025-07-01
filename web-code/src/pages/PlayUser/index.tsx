import services from '@/services/demo';
import {
  ActionType,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Divider } from 'antd';
import React, { useRef } from 'react';

const { queryUserList } = services.UserController;

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProDescriptionsItemProps<API.UserInfo>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      hideInSearch: true,
      valueEnum: {
        0: { text: '男' },
        1: { text: '女' },
      },
    },
    {
      title: '当前状态',
      dataIndex: 'workStatus',
      valueEnum: {
        0: { text: '下线中' },
        1: { text: '在线' },
        2: { text: '接单中' },
        3: { text: '冻结中' },
      },
    },
    {
      title: '电话',
      dataIndex: 'phone',
    },
    {
      title: '身份证号',
      dataIndex: 'cardId',
    },
    {
      title: '本月接单数量',
      dataIndex: 'monthNumber',
      hideInSearch: true,
    },
    {
      title: '本月接单平均工作时长',
      dataIndex: 'monthWorkTime',
      hideInSearch: true,
    },
    {
      title: '本月流水',
      dataIndex: 'monthMoney',
      hideInSearch: true,
    },
    {
      title: '本月投诉数量',
      dataIndex: 'complaintNumber',
      hideInSearch: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a>签约文件</a>
          <Divider type="vertical" />
          <a>游戏介绍</a>
          <Divider type="vertical" />
          <a>冻结账户</a>
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.UserInfo>
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={() => [
          <Button key="1">新建</Button>,
          <Button key="2" type="primary">
            工资导出
          </Button>,
        ]}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryUserList({
            ...params,
            // FIXME: remove @ts-ignore
            // @ts-ignore
            sorter,
            filter,
          });
          return {
            data: data?.list || [],
            success,
          };
        }}
        // @ts-ignore
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
