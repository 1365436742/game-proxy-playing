/**
 * 小程序版本更新服务
 */
export const updateService = {
  /**
   * 检查小程序是否有新版本并处理更新
   * @param {boolean} showSuccessToast - 是否显示更新成功提示
   */
  checkForUpdate() {
    const updateManager = wx.getUpdateManager();
    // 监听小程序有版本更新事件
    updateManager.onCheckForUpdate((res) => {
      // 请求完新版本信息的回调
      if (res.hasUpdate) {
        console.log('发现新版本，准备下载更新');
        this.downloadAndApplyUpdate(updateManager);
      }
    });
  },

  /**
   * 下载并应用更新
   */
  downloadAndApplyUpdate(updateManager) {
    // 监听下载更新包进度
    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        }
      });
    });

    // 监听下载失败事件
    updateManager.onUpdateFailed(() => {
      // 新版本下载失败
      wx.showToast({
        title: '更新失败，请稍后重试',
        icon: 'none'
      });
    });
  },
};    