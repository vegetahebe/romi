// pages/payment/payment.js
import {
  BaseURL,
  MediaURL
} from '../../utils/util.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alipay: "/static/images/alipay.png",
    wechat: "/static/images/wechat.png",
    selArr: [],
    selLesson: [],
    selstrin: "",
    telShow: "",
    emailShow: "",
    agreement: false,
    payWay: false,
    canPay: false,
    oneButton: [{
      text: '确定'
    }],
    warning: "",
    user: {
      username: "Vegeta",
      tel: "18628327727",
      email: "vegeta1213@126.com"
    },
    lessoninfos: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      videoCode
    } = options
    var selArr = videoCode.split(",")
    this.getVideoInfo(selArr)
    var telShow = this.data.user.tel.slice(0, 3) + "****" + this.data.user.tel.slice(7)
    var i = this.data.user.email.indexOf("@")
    var emailShow = this.data.user.email[0] + "*****" + this.data.user.email.slice(i)
    this.setData({
      selArr: selArr,
      telShow: telShow,
      emailShow: emailShow,
    })
  },
  getVideoInfo(selArr) {
    let _this = getCurrentPages()[getCurrentPages().length - 1]
    var lessoninfos = []
    wx.request({
      url: `${BaseURL}/getAllSuit`,
      method: 'POST',
      data: {
        "content": _this.data.videoCode,
        "parameter": "",
        "statusode": app.globalData.username,
      },
      success: res => {
        res.data.data.forEach(item => {
          if (_this.data.selArr.indexOf(item.courseintroductionDistinction) != -1) {
            item.courseintroductionBreviarypictyre = `${MediaURL}/` + item.courseintroductionBreviarypictyre
            lessoninfos.push(item)
          }
        })
        console.log(lessoninfos)
        var totalPrice = 0
        lessoninfos.forEach(function(item) {
          totalPrice += parseInt(item.courseintroductionPrice)
          console.log(item.courseintroductionPrice)
        })
        this.setData({
          totalPrice: totalPrice,
          lessoninfos: lessoninfos
        })

        _this.setData({
          
        })
      },
      fail: err => {
        console.log(err)
      }
    })

  },
  isAgreement: function(e) {
    var _this = getCurrentPages()[getCurrentPages().length - 1]
    _this.setData({
      agreement: (e.detail.value[0] == "agree"),
      canPay: (e.detail.value[0] == "agree" && _this.data.payWay)
    })
  },
  myPayway: function(e) {
    var _this = getCurrentPages()[getCurrentPages().length - 1]
    var payWay = e.detail.value
    this.setData({
      payWay: payWay,
      canPay: (_this.data.agreement && payWay)
    })
  },
  confirmPay: function() {
    var _this = getCurrentPages()[getCurrentPages().length - 1]
    if (!_this.data.agreement) {
      _this.setData({
        warning: "请阅读支付服务条款并同意",
      })
      _this.tapOneDialogButton()
    } else if (!_this.data.payWay) {
      _this.setData({
        warning: "请选择支付方式",
      })
      _this.tapOneDialogButton()
    } else {
      if (_this.data.payWay = "alipay") {
        wx.navigateTo({
          url: '/pages/alipay/alipay',
        })
      } else if (_this.data.payWay = "wechat") {
        wx.navigateTo({
          url: '/pages/wechatpay/wechatpay',
        })
      }
    }

  },
  tapOneDialogButton(e) {
    this.setData({
      showOneButtonDialog: true
    })
  },
  tapDialogButton(e) {
    this.setData({
      showOneButtonDialog: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})