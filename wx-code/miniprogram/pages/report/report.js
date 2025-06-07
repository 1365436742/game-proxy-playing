import { apiGetReportList } from "../../request/report"
import { shopType } from "../../common/index"
// pages/report/report.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    reportList: [],
    shopType,
    loading: false
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (this.data.loading) return
    this.setData({
      loading: true
    })
    apiGetReportList().then(res => {
      if (res.code === 1) {
        this.setData({
          reportList: res.data
        })
      }
    }).finally(() => {
      this.setData({
        loading: false
      })
    })
  },
})