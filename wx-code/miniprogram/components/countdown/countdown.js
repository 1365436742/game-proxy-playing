import {
  countdown,
  convertMillisecondsToHMS
} from "../../utils/countdown"
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    remainingTime: {
      type: Number,
      value: 0
    }
  },
  lifetimes: {
    attached() {
      this.data.timer = countdown(this.data.remainingTime, (time) => {
        const {
          hours,
          minutes,
          seconds
        } = convertMillisecondsToHMS(time)
        this.setData({
          hours,
          minutes,
          seconds
        })
      })
    },
    detached() {
      if (this.data.timer) {
        this.data.timer()
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    hours: '-',
    minutes: '-',
    seconds: '-',
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
