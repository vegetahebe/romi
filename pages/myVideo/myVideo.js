// pages/myVideo/myVideo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "Vegeta",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getSystemInfo({
      success(res) {
        console.log(res)
      }
    })
    wx.getStorage({
      key: 'key',
      success(res) {
        console.log(res)
      }
    })
    // app.enterMainPage(app.isNeedSearch())
  },
  isNeedSearch() {
    var needSearch = wx.getStorageSync("ble_deviceId");
    if (!needSearch) {
      return true;
    }
    return false;
  },

  enterMainPage(flag) {
    if (flag) {
      wx.redirectTo({
        url: '../bindingpage/bindingpage',
      });
    } else {
      wx.redirectTo({
        url: '/pages/index/index',
      });
    }
  },
  goBought: function() {
    wx.navigateTo({
      url: `/pages/bought/bought?username=${this.data.username}`,
    })
  },
  goWishes: function() {
    wx.navigateTo({
      url: `/pages/wishes/wishes?username=${this.data.username}`,
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