// pages/bought/bought.js
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
    totalPrice: 0,
    username: "Vegeta",
    userimg: '/static/images/usericon.png',
    lessoninfos: [{
      lessonName: "Java 大数据开发技术",
      lessonOrdernumber: "2019110213",
      lessonBoughttime: "2019-05-11",
      lessonPrice: "3200",
      lessonIcon: "/static/images/bought1.png"
    }, {
      lessonName: "网页设计基础",
      lessonOrdernumber: "2019115513",
      lessonBoughttime: "2019-06-11",
      lessonPrice: "4200",
      lessonIcon: "/static/images/bought2.png"
    }, {
      lessonName: "Web 前端工程师",
      lessonOrdernumber: "2019115001",
      lessonBoughttime: "2019-06-11",
      lessonPrice: "4200",
      lessonIcon: "/static/images/bought3.png"
    }, {
      lessonName: "Java 大数据开发技术",
      lessonOrdernumber: "2019110213",
      lessonBoughttime: "2019-05-11",
      lessonPrice: "3200",
      lessonIcon: "/static/images/bought1.png"
    }, {
      lessonName: "网页设计基础",
      lessonOrdernumber: "2019115513",
      lessonBoughttime: "2019-06-11",
      lessonPrice: "4200",
      lessonIcon: "/static/images/bought2.png"
    }, {
      lessonName: "Web 前端工程师",
      lessonOrdernumber: "2019115001",
      lessonBoughttime: "2019-06-11",
      lessonPrice: "4200",
      lessonIcon: "/static/images/bought3.png"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      username
    } = options
    this.setData({
      username: username
    })
    var totalPrice = 0
    this.data.lessoninfos.forEach(function(item, index) {
      totalPrice += parseInt(item.lessonPrice)
    })
    this.setData({
      totalPrice: totalPrice
    })
  },
  goDetail(event) {
    let videoCode = event.currentTarget.dataset.text
    wx.navigateTo({
      url: `/pages/details/details?videoCode=${videoCode}`,
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