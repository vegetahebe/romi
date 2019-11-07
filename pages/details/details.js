// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频参数 后期请求
    videoCode: '98k',
    videoUrl: '',
    videoProfile: '这是一个UI视频:',
    videoComment: '视频可以',
    videoTeacher: '陈林',
    videoTeacherinfo: "拥有7年研发经验,4年教学经验,熟悉排版设计及包装设计",
    videoPlayed: 25550,
    videoPaied: false,
    videoSection: "1,2,3",
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