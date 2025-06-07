import { storage } from "./storageUtils"
const loginKey = 'openIdKeyStorage'
export function setOpenId(info) {
  const time = 60 * 60 * 24 * 2
  storage.set(loginKey, info, time);
}
export function getOpenId() {
  return storage.get(loginKey)
}
