import {
  request
} from "./index"

export function getShare(data) {
  return request({
    url: `/api/v1/team/share`,
    method: "get",
    data
  })
}

export function getBeShare(data = {}) {
  return request({
    url: `/api/v1/team/share`,
    method: "get",
    data
  })
}