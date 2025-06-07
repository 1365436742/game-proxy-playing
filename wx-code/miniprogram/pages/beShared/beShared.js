import {
  moneyValues
} from "../../common/index"
import { getBeShare } from "../../request/share"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    moneyValues,
    beShareInfo: {},
    pageQuery: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const { share_id } = options;
    this.setData({
      pageQuery: options
    })
    wx.hideHomeButton()
    const res = await getBeShare({
      share_id
    })
    if (res.code === 1) {
      this.setData({
        beShareInfo: res.data
      })
    }
  },
  onToCreatReport() {

    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})
