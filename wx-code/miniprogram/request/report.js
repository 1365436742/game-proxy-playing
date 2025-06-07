import {
  request
} from "./index"

export function apiGetReportList() {
  return request({
    url: `/api/v1/reports`,
    method: "get",
  })
}

export function apiCreateReport(data = {}) {
  return request({
    url: `/api/v1/report`,
    method: "post",
    data
  })
}

export function apiGetReportDetails(data = {}) {
  return request({
    url: `/api/v1/report`,
    method: "get",
    data
  })
}