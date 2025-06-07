// pages/report/components/listItem/listItem.js
import { shopType, reportType } from "../../../../common/index"
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: ''
    },
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    shopType,
    reportType
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onDetailPage() {
      let url = '';
      const item = this.properties.item
      switch (this.properties.item.report_status) {
        case reportType.noPay:
          url = "/pages/reportNoPay/reportNoPay"
          break;
        case reportType.teaming:
          url = "/pages/share/share"
          break;
        case reportType.finish:
          url = "/pages/reportDetails/reportDetails"
          break;
        case reportType.aiGenerate:
          wx.showToast({
            title: '报告生成中请耐心等待',
            icon: 'none'
          })
          return
        default:
          break;
      }
      if (url) {
        wx.navigateTo({
          url: `${url}?report_id=${item.report_id}`,
        })
      } else {
        wx.showToast({
          title: `报告id为${item.report_id}生成失败，请联系我们`,
          icon: 'none'
        })
      }
    }
  }
})