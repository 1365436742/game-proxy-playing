// pages/index/components/area/area.js

import {
  cityArea
} from "../../../../common/cityArea"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    errorMessage: {
      type: String,
      value: ''
    },
    cityValue: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cityVisible: false,
    citys: cityArea
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onAreaPicker() {
      wx.hideTabBar()
      this.setData({
        cityVisible: true
      });
    },
    onPickerChange(e) {
      const {
        value
      } = e.detail;
      this.triggerEvent('change', value[0])
    },
    onPickerCancel() {
      wx.showTabBar({
        animation: true
      })
    }
  }
})
