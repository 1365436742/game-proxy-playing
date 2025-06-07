import {
  request
} from "./index"

export function wechatLogin(data = {}) {
  return request({
    url: `/api/v1/login`,
    method: 'post',
    data,
  })
}

export function getUserInfo() {
  return request({
    url: `/api/v1/user`,
    method: 'get',
  })
}

export function setUserInfo(data = {}) {
  return request({
    url: `/api/v1/user`,
    method: 'patch',
    data,
  })
}
