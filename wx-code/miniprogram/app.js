import { initOpenInfo } from './utils/loginInfo'
import { updateService } from './utils/updateApp'
// app.js
App({
  onLaunch() {
    updateService.checkForUpdate()
    initOpenInfo()
  },
  globalData: {
    shareQuery: {}
  }
})
