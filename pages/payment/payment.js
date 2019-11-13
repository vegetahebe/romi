// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telShow: "",
    emailShow: "",
    user: {
      username: "Vegeta",
      tel: "18628327727",
      email: "vegeta1213"
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
    this.setData({
      telShow: telShow,
      emailShow: emailShow
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