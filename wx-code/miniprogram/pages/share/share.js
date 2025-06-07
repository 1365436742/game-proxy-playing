import {
  moneyValues,
  defaultAvatarUrl
} from "../../common/index"
import { getShare } from "../../request/share"
Page({
  data: {
    moneyValues,
    defaultAvatarUrl,
    shareInfo: {
      remaining_time: 0
    },
  },
  async onLoad(options) {
    const { report_id } = options;
    if (report_id) {
      const res = await getShare({ report_id })
      if (res.code === 1) {
        this.setData({
          shareInfo: res.data
        })
        wx.showShareMenu({
          withShareTicket: true,
          menus: ['shareAppMessage', 'shareTimeline'],
        })
      }
    }
  },
  onNoShare() {
    if (this.data.shareInfo.share_id) return
    wx.showToast({
      title: '请从报告中重新进入分享页面',
      icon: 'none'
    })
  },
  onShareAppMessage() {
    return {
      path: `/pages/beShared/beShared?share_id=${this.data.shareInfo.share_id}`
    }
  }
})
