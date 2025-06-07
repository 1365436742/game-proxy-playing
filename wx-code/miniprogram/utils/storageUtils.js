/**
 * 带有效期的Storage工具函数
 */
export const storage = {
  /**
   * 设置存储值（带有效期）
   * @param {string} key - 存储键名
   * @param {any} value - 存储值
   * @param {number} expire - 有效期（秒），默认7天
   */
  set(key, value, expire = 7 * 24 * 60 * 60) {
    const data = {
      value,
      expireAt: Date.now() + expire * 1000
    };
    wx.setStorageSync(key, data);
  },

  /**
   * 获取存储值（自动处理过期）
   * @param {string} key - 存储键名
   * @param {any} defaultValue - 默认值（可选）
   * @returns {any} - 存储值或默认值
   */
  get(key, defaultValue = null) {
    try {
      const data = wx.getStorageSync(key);
      if (!data) return defaultValue;
      
      // 检查是否过期
      if (data.expireAt && Date.now() > data.expireAt) {
        wx.removeStorageSync(key); // 自动清除过期数据
        return defaultValue;
      }
      
      return data.value;
    } catch (e) {
      console.error('获取Storage失败:', e);
      return defaultValue;
    }
  },

  /**
   * 移除存储值
   * @param {string} key - 存储键名
   */
  remove(key) {
    wx.removeStorageSync(key);
  },

  /**
   * 清空所有存储
   */
  clear() {
    wx.clearStorageSync();
  }
};