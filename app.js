//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      }),
      wx.getSetting({
        success(res) {
          // 没有授权
          if (!res.authSetting["scope.userInfo"]) {
            // 跳转至授权页
            wx.showModal({
              title: '温馨提示',
              content: '教学Org获取用户信息需要您的授权！',
              showCancel: false,
              confirmText: '去设置',
              success: function(res) {
                wx.navigateTo({
                  url: '../auth/auth'
                });
              }
            })
          } 
          // else {
          //   wx.showLoading({
          //     title: '加载中...',
          //     mask: true
          //   })
          // }
        }
      })
  },
  globalData: {
    userInfo: null
  }
})