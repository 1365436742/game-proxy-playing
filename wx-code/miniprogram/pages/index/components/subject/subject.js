// pages/index/components/subject/subject.js
import { subjectList } from "../../../../common/index"
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    subjectValue: {
      type: Array,
      value: []
    },
    errorMessage: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    subjectList
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      if (e.detail.value.length > 3) {
        return
      }
      this.triggerEvent('change', e.detail.value)
    },
  }
})