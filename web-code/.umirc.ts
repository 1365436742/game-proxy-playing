import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '陪玩平台',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '基本信息管理',
      path: '/home',
      component: './Home',
    },
    {
      name: '陪玩管理',
      path: 'playUser',
      component: './PlayUser',
    },
    {
      name: '订单信息',
      path: 'orderList',
      component: './OrderList',
    },
    {
      name: '投诉管理',
      path: '/complaint',
      component: './Complaint',
    },
    {
      name: '用户管理',
      path: '/user',
      component: './User',
    },
  ],
  npmClient: 'yarn',
});
