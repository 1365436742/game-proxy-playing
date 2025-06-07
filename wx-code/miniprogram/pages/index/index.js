import { baseFormList, hobbyFormList, validateForm } from "./form.js"
import { subjectList } from "../../common/index"
import { apiCreateReport } from "../../request/report"
Page({
  data: {
    cardList: [
      {
        title: '考生信息',
        iconName: 'boshihouchuzhanshenqing',
        formList: baseFormList
      },
      {
        title: '考生偏好',
        iconName: 'xihaopianhao',
        formList: hobbyFormList
      }
    ],
    formData: {
      province: "",
      score: "",
      subject: [],
      rank: "",
      major: "",
      hobby: "",
      postion: "",
    },
    errorInfo: {},
    loading: false
  },
  onShow(options) {
    console.log(options, 'xzxx')
  },
  onChangeForm(e) {
    const value = e.detail;
    const key = e.target?.dataset?.item
    if (key) {
      this.setData({
        ['formData.' + key]: value
      })
      const { errors: errorInfo } = validateForm(this.data.formData);
      if (this.data.errorInfo[key] && !errorInfo[key]) {
        this.setData({
          errorInfo: {
            ...this.data.errorInfo,
            [key]: ''
          }
        })
      }
    }
  },
  onNoPayPage() {
    // TODO: 如果存在未支付的直接让他跳到支付页面
    const formData = this.data.formData;
    const { errors: errorInfo, errorId } = validateForm(formData);
    if (Object.keys(errorInfo).length) {
      wx.pageScrollTo({
        selector: `#${errorId}`
      })
      this.setData({
        errorInfo
      })
      return
    }
    if (this.data.loading) return
    this.setData({
      loading: true
    })
    wx.showLoading({
      title: '加载中',
    })
    const subject = subjectList.filter((_, index) => this.data.formData.subject.includes(index)).map(item => item.name)
    apiCreateReport({
      ...formData,
      subject
    }).then(res => {
      if (res.code === 1) {
        wx.navigateTo({
          url: `/pages/reportNoPay/reportNoPay?report_id=${res.data.report_id}`,
        })
      }
    }).finally(() => {
      wx.hideLoading()
      this.setData({
        loading: false
      })
    })

  }
})