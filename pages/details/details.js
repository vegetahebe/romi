// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频参数 后期请求
    videoCode: '98k',
    videoUrl: '',
    lessonUnit: "UI设计师基础篇",
    lessonStudied: 25858,
    videoComment: [{
      username: "李二狗",
      time: "2019-09-09",
      usericon: "/static/images/usericon1.png",
      commentcontent: "老师上课非常仔细,快乐学习"
    }, {
      username: "张晨",
      time: "2019-10-08",
      usericon: "/static/images/usericon2.png",
      commentcontent: "非常详细的讲解,点赞!"
    }, {
      username: "权一舟",
      time: "2019-09-09",
      usericon: "/static/images/usericon3.png",
      commentcontent: "良心教学,强烈推荐"
    }, {
      username: "李二狗",
      time: "2019-09-09",
      usericon: "/static/images/usericon4.png",
      commentcontent: "'视频可以"
    }, {
      username: "蜜桃",
      time: "2019-09-09",
      usericon: "/static/images/usericon5.png",
      commentcontent: "讲的很好,每节课都是一个进步"
    }, {
      username: "多多",
      time: "2019-10-06",
      usericon: "/static/images/usericon6.png",
      commentcontent: "讲的很仔细"
    }],
    videoTeacher: {
      teachericon: "/static/images/usericon1",
      teachername: "陈林",
      teachersubject: "UI设计特级讲师",
      teacherinfo: "拥有7年研发经验,4年教学经验,熟悉排版设计及包装设计"
    },
    videoLesson: [{
      lessonSection: 12,
      lessonname: "排版设计的通用准则"
    }, {
      lessonSection: 13,
      lessonname: "排版设计的色彩使用"
      }, {
        lessonSection: 14,
        lessonname: "排版设计的网格"
      }, {
        lessonSection: 15,
        lessonname: "排版设计的通用准则"
      }],
    videoPlayed: 25550,
    videoPaied: false,
    videoSection: "1,2",
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
    wx.navigateTo({
      url: `/pages/shopping-cart/shopping-cart?videoCode=${this.data.videoCode}`,
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
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      videoCode
    } = options;
    console.log(videoCode)
    this.setData({
      videoCode: videoCode,
      videoUrl: `/static/videos/${videoCode}.mp4`
    })
  },
  bindtimeupdate: res => {
    let _this = getCurrentPages()[1]
    if (!_this.data.videoPaied && res.detail.currentTime >= 30) {
      var videoContext = wx.createVideoContext("myVideo")
      videoContext.stop()
      _this.openConfirm()

    }
    _this.setData({
      lasttime: parseInt(res.detail.currentTime)
    })
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