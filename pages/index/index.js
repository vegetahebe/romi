//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    recommenditions: [{
      name: "HTML",
      lessonname: "HTML5全栈进阶视频教程",
      lessonteacher: "陈林",
      lessonstudied: 25858,
      lessonicon: "../../static/images/lessonHTML.png",
      price: 1500,
      videoUrl: "/static/video/Ka98k.mp4",
      videoCode: "Ka98k"
    }, {
      name: "JAVA",
      lessonname: "JAVA高级视频课程",
      lessonteacher: "许文强",
      lessonstudied: 25858,
      lessonicon: "../../static/images/lessonJAVA.png",
      price: 1500,
      videoUrl: "/static/video/M24.mp4",
      videoCode: "M24"
      }, {
        name: "UI",
        lessonname: "UI/UE从入门到精通",
        lessonteacher: "海燕",
        lessonstudied: 48503,
        lessonicon: "../../static/images/lessonUI.png",
        price: 1500,
        videoUrl: "/static/video/M24.mp4",
        videoCode: "M24"
      }, {
        name: "PYTHON",
        lessonname: "PYTHON实战经验大解析",
        lessonteacher: "云兵",
        lessonstudied: 12325,
        lessonicon: "../../static/images/lessonPYTHON.png",
        price: 1500,
        videoUrl: "/static/video/M24.mp4",
        videoCode: "M24"
      }],
  },
  onLaunch: function() {
    let _this = this;
    // 判断是否授权
    /*
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
            success: function (res) {
              wx.navigateTo({
                url: '../auth/auth'
              });
            }
          })
        } else {
          wx.showLoading({
            title: '加载中...',
            mask: true
          })
          // wx.login({
          //   success: function (res) {
          //     if (res.code) {
          //       // 获取临时登录凭证
          //       // 将code传入后台获取用户的openid/session_key
          //       wx.request({
          //         url: `${url}/login`,
          //         data: {
          //           code: res.code
          //         },
          //         method: 'POST',
          //         success: function (res) {
          //           // 记录登录用户
          //           _this.globalData.loginUser = res.data.data;
          //           // 获取购物车数据
          //           wx.request({
          //             url: `${url}/shopping_cart?username=${res.data.data.username}`,
          //             success: function (response) {
          //               // 赋值购物车数据
          //               _this.globalData.shoppingCart = response.data.data;
          //               wx.hideLoading();
          //             }
          //           })
          //         },
          //       })
          //     } else {
          //       console.log("登录失败", res.errMsg);
          //     }
          //   }
          // })
        }
      }
    })
    */
  },
  //事件处理函数

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


})