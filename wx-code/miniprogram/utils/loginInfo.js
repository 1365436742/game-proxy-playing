import { getOpenId, setOpenId } from "./store"
import { wechatLogin } from "../request/user"
let openInfo = null;
const wxLogin = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: resolve,
      fail: reject
    })
  })
}

export const initOpenInfo = async () => {
  const curOpenInfo = getOpenId();
  openInfo = curOpenInfo
  if (!openInfo) {
    const wxLoginRes = await wxLogin();
    const res = await wechatLogin({ code: wxLoginRes.code })
    if (res.code === 1) {
      openInfo = res.data
      setOpenId(res.data)
    }
  }
}

export const getOpenInfo = () => openInfo