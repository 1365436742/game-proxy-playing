// pages/my/my.js
import { getUserInfo, setUserInfo } from "../../request/user"
import { uploadFile } from "../../request/index"
import { defaultAvatarUrl } from "../../common/index"
Page({
  data: {
    defaultAvatarUrl,
    userInfo: {},
    loading: false,
    loadingUsername: false,
    loadingAvatar: false
  },
  onShow() {
    if (this.data.loading) return
    this.setData({
      loading: true
    })
    getUserInfo().then(res => {
      if (res.code === 1) {
        this.setData({
          userInfo: res.data
        })
      }
    }).finally(() => {
      this.setData({
        loading: false
      })
    })
  },
  async onChooseAvatar(e) {
    if (this.data.loadingAvatar) return
    this.setData({
      loadingAvatar: true
    })
    const { avatarUrl } = e.detail
    try {
      const resFile = await uploadFile(avatarUrl);
      if (resFile.code === 1) {
        const avatar = resFile.data.url
        const resUser = await setUserInfo({
          avatar
        })
        if (resUser.code === 1) {
          this.setData({
            ["userInfo.avatar"]: avatar,
          })
        }
      }
    } catch (error) {
      console.log(error, "上传失败")
    }
  },
  onChangeNickName(e) {
    if (this.data.loadingUsername) return
    this.setData({
      loadingUsername: true
    })
    const { value } = e.detail
    if (value !== this.data.userInfo.username) {
      setUserInfo({
        username: value
      }).then(res => {
        if (res.code === 1) {
          this.setData({
            ["userInfo.username"]: value,
          })
        }
      }).finally(() => {
        this.setData({
          loadingUsername: false
        })
      })
    }
  },
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: "17349867493"
    });
  },
  onHelpPage() {
    wx.navigateTo({
      url: '/pages/help/help',
    })
  }
})