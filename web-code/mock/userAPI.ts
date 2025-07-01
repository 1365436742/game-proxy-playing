const users = [
  {
    id: 0,
    name: '张卓',
    gender: 0,
    workStatus: 0,
    phone: '15214586883',
    cardId: '230702199810220318',
    workerTime: '18:00:00-20:00:00',
    monthNumber: 50,
    monthWorkTime: 8,
    complaintNumber: 2,
    monthMoney: 5000,
  },
  { id: 1, name: 'Fish', gender: 'FEMALE' },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
