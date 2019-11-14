import {
  BaseURL,
  MediaURL
} from "../../utils/util.js"
const app = getApp();
Page({
  // => events
  getUserInfo(event) {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.login({
            success: function(res) {
              if (res.code) {
                wx.request({
                  url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx642d0eeb25f00004&secret=c0351f8e6c1367f4d1e3f56fb2901c89&js_code=${res.code}&grant_type=authorization_code`,
                  success(response) {
                    console.log(response.data)
                    wx.request({
                      url: `${BaseURL}/minLogin`,
                      method: "POST",
                      data: response.data,
                      success(res) {
                        app.globalData.username = res.data.data[0]
                        wx.navigateBack({
                          delta: 1,})
                      },
                      fail(err) {
                        console.log(err)
                      }
                    })
                  }
                })
              } else {
                console.log("登录失败", res.errMsg);
              }
            }
          })
        } else {
          wx.showModal({
            title: '温馨提示',
            content: '您需授权才能继续！',
            confirmText: '去设置',
            showCancel: false
          })
        }
      }
    })
  }
})