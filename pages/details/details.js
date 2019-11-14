// pages/details/details.js
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
    BaseURL,
    //视频参数 后期请求
    lasttime: 10,
    lessonStudied: 25858,
    videoComment: [],
    videoPlayed: 25550,
    videoPaied: false,
    videoSection: 2,
    //弹框属性
    dialogShow: false,
    buttons: [{
      text: '立即购买'
    }, {
      text: '再想想'
    }],
    //简介评论切换属性
    profileComment: true,
    //相关视频 对象
    recommenditions: [{
      name: "HTML",
      dec: "HTML5全栈进阶视频教程",
      teacher: "陈林",
      studied: 25858,
      icon: "../../static/images/lessonHTML.png",
      price: 1500,
      videoUrl: "/static/video/Ka98k.mp4",
      videoCode: "Ka98k"
    }, {
      name: "HTML",
      dec: "HTML5全栈进阶视频教程",
      teacher: "陈林",
      studied: 25858,
      icon: "../../static/images/lessonHTML.png",
      price: 1500,
      videoUrl: "/static/video/M24.mp4",
      videoCode: "M24"
    }],
  },
  //限时视频弹框 方法
  openConfirm: function() {
    this.setData({
      dialogShow: true
    })
  },
  goBuy: function() {
    //用videoCode 请求数据
    //  this.wxajax(){

    //  }
    wx.navigateTo({
      url: `/pages/payment/payment?videoCode=${this.data.videoCode}`,
    })
  },
  tapDialogButton(e) {
    if (e.detail.index == 0) {
      wx.navigateTo({
        url: `/pages/shopping-cart/shopping-cart?videoCode=${this.data.videoCode}`,
      })
    }
    this.setData({
      dialogShow: false,
    })
  },
  // 简介评论切换
  toggleProfilecomment() {
    this.setData({
      profileComment: !this.data.profileComment
    })
  },
  //本章视频跳转页面
  jumplessonsection: function(e) {
    let {
      index
    } = e.target.dataset
    let _this = getCurrentPages()[getCurrentPages().length - 1]
    if (index != _this.data.videoSection) {
      //用index和本页数据去请求数据库跳转到本章另一个页面
      _this.setData({
        videoUrl: `/static/videos/M24.mp4?${{ index }}`
      })
    }
  },
  getVideoInfo() {
    let _this = getCurrentPages()[getCurrentPages().length - 1]
    console.log(_this.data)
    wx.request({
      url: `${BaseURL}/getASuit`,
      method: 'POST',
      data: {
        "content": _this.data.videoCode,
        "parameter": "",
        "statusode": app.globalData.username,
      },
      success:res=>{
        console.log(res)
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      videoCode
    } = options;
    console.log(videoCode)
    var mylasttime = this.data.lasttime
    let continueLearn = this.data.videoPaied && mylasttime > 0
    this.setData({
      videoCode: videoCode,
      videoUrl: `/static/videos/${this.data.videoCode}.mp4`,
      mylasttime: mylasttime,
      continueLearn: continueLearn
    })
    this.getVideoInfo()
  },
  //监听视频播放进度  判断未付费停止和 继续播放
  bindtimeupdate: res => {
    let _this = getCurrentPages()[getCurrentPages().length - 1]
    if (!_this.data.videoPaied && res.detail.currentTime >= 10) {
      var videoContext = wx.createVideoContext("myVideo")
      videoContext.stop()
      _this.openConfirm()
    }
    _this.setData({
      lasttime: parseInt(res.detail.currentTime)
    })
    // console.log(_this.data.lasttime)
  },
  addWishes: function() {
    // 加入心愿单
  },

  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log(this.data.lasttime)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log(this.data.lasttime)
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