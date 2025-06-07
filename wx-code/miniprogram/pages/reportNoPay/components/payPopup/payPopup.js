// pages/reportNoPay/components/payPopup/payPopup.js
import { moneyValues, shopType } from "../../../../common/index"
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    moneyValues,
    shopType,
    type: shopType.team
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel() {
      this.triggerEvent('cancel')
    },
    onPay() {
      this.triggerEvent('pay', this.data.type)
    },
    onChangeType(e) {
      const { key } = e.currentTarget.dataset
      this.setData({
        type: key
      })
    }
  }
})