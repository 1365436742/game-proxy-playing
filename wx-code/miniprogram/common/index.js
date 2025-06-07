export const subjectList = [
  {
    name: "物理",
    icon: "wuli"
  },
  {
    name: "化学",
    icon: "flask-full"
  },
  {
    name: "生物",
    icon: "shengwujishu"
  },
  {
    name: "历史",
    icon: "zhengzhi"
  },
  {
    name: "地理",
    icon: "earth-full"
  },
  {
    name: "政治",
    icon: "zhengzhi1"
  },
]
export const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

export const moneyValues = {
  single: "19.90",
  team: "9.90"
}

//1普通类型 2拼团类型
export const shopType = {
  single: 1,
  team: 2
}

// 1创建订单 / 发起拼团
// 2个人支付成功 / 发起人支付成功
// 3接受拼团
// 4接受人支付成功
// 5生成中
// 6订单结束
export const reportType = {
  noPay: 1,
  aiGenerate: 2,
  teaming: 3,
  finish: 4
}
