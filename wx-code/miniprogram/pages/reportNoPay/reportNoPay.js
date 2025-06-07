// pages/reportNoPay/reportNoPay.js
import {
  moneyValues,
  shopType
} from "../../common/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moneyValues
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onPay(e) {
    this.setData({
      show: false
    });
    if (e.detail === shopType.team) {
      wx.redirectTo({
        url: '/pages/share/share',
      })
    }
  },
  showPopup() {
    this.setData({
      show: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
})
