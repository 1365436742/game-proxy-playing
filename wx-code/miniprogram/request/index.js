import {
  getOpenId
} from "../utils/store"

export const baseUrl = "http://127.0.0.1:8000"

export const request = (params = {}) => {
  const {
    url,
    method,
    data = {}
  } = params
  const result = getOpenId() || {}
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: {
        ...result,
        ...data
      },
      method,
      success(res) {
        if (res.data.code !== 1) {
          wx.showToast({
            title: res.data.msg || '请重新尝试',
            icon: 'none'
          })
        }
        resolve(res.data)
      },
      fail(err) {
        wx.showToast({
          title: '请重新尝试',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}

export const uploadFile = (filePath) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: baseUrl + '/api/v1/upload',
      filePath: filePath,
      name: 'file', // 后端接收文件的字段名
      success: (res) => {
        if (res.statusCode === 200) {
          const result = JSON.parse(res.data)
          if (result.code !== 1) {
            wx.showToast({
              title: result.msg,
            })
          }
          resolve(result); // 上传成功，解析后端响应
        } else {
          wx.showToast({
            title: '上传失败，请重新尝试',
            icon: 'none'
          })
          reject(res); // 非 200 状态码视为失败
        }
      },
      fail: (err) => {
        reject(err); // 网络错误或上传失败
      }
    });
  });
};