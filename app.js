//app.js
import {
  BaseURL,
  MediaURL
} from './utils/util.js'
App({
  onLaunch: function() {
    wx.getSetting({
      success(res) {
        // 没有授权
        if (!res.authSetting["scope.userInfo"]) {
          // 跳转至授权页
          wx.showModal({
            title: '温馨提示',
            content: '请求用户授权',
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
    username: "",
    userInfo: null,
    data: {},
  }
})