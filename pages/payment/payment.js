// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alipay: "/static/images/alipay.png",
    wechat: "/static/images/wechat.png",
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
    lessoninfos: [{
      lessonName: "Photoshop平面设计",
      lessonDesc: "本课基于校企合作,依据岗位标准,采用项目教学模式针对广大转行及新入门同学量身定做",
      lessonImage: "/static/images/paymentlesson.png",
      lessonPrice: 3500
    }, {
      lessonName: "Photoshop平面设计",
      lessonDesc: "本课基于校企合作,依据岗位标准,采用项目教学模式针对广大转行及新入门同学量身定做",
      lessonImage: "/static/images/paymentlesson.png",
      lessonPrice: 3500
    }, {
      lessonName: "Photoshop平面设计",
      lessonDesc: "本课基于校企合作,依据岗位标准,采用项目教学模式针对广大转行及新入门同学量身定做",
      lessonImage: "/static/images/paymentlesson.png",
      lessonPrice: 3500
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var telShow = this.data.user.tel.slice(0, 3) + "****" + this.data.user.tel.slice(7)
    var i = this.data.user.email.indexOf("@")
    var emailShow = this.data.user.email[0] + "*****" + this.data.user.email.slice(i)
    var totalPrice = 0
    this.data.lessoninfos.forEach(function(item, index) {
      totalPrice += parseInt(item.lessonPrice)
    })
    this.setData({
      telShow: telShow,
      emailShow: emailShow,
      totalPrice: totalPrice
    })
  },
  isAgreement: function(e) {
    var _this = getCurrentPages()[1]
    _this.setData({
      agreement: (e.detail.value[0] == "agree"),
      canPay: (e.detail.value[0] == "agree" && _this.data.payWay)
    })
  },
  myPayway: function(e) {
    var _this = getCurrentPages()[1]
    var payWay = e.detail.value
    this.setData({
      payWay: payWay,
      canPay: (_this.data.agreement && payWay)
    })
  },
  confirmPay: function() {
    var _this = getCurrentPages()[1]
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