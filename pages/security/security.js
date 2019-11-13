// pages/security/security.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telShow: "",
    emailShow: "",
    changeItems: {
      password: "vegeta1213",
      passwordIcon: "/static/images/password.png",
      iftel: true,
      tel: "18628327727",
      telIcon: "/static/images/tel.png",
      ifemail: true,
      connection: {
        "QQ": "151209036",
        "WeChat": "vegeta1213"
      },
      connectionIcon: "/static/images/connection.png",
      email: "vegeta1213@126.com",
      emailIcon: "/static/images/email.png"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var telShow = this.data.changeItems.tel.slice(0, 3) + "****" + this.data.changeItems.tel.slice(7)
    var i = this.data.changeItems.email.indexOf("@")
    var emailShow = this.data.changeItems.email[0] + "*****" + this.data.changeItems.email.slice(i)
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