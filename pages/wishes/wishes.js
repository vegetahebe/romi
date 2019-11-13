// pages/wishes/wishes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice: 0,
    selLesson: [],
    selFalse: [],
    selTrue: [],
    selCheck: [],
    selectAll: false,
    lessoninfos: [{
      lessonName: "Java 大数据开发技术",
      lessonDesc: "本课程重在培养学生更好的理解与用户本课程重在培养学生更好的理解与用户",
      lessonPrice: "3200",
      lessonIcon: "/static/images/bought1.png"
    }, {
      lessonName: "网页设计基础",
      lessonDesc: "本课程重在培养学生更好的理解与用户本课程重在培养学生更好的理解与用户",
      lessonPrice: "4200",
      lessonIcon: "/static/images/bought2.png"
    }, {
      lessonName: "Web 前端工程师",
      lessonDesc: "本课程重在培养学生更好的理解与用户本课程重在培养学生更好的理解与用户",
      lessonPrice: "4200",
      lessonIcon: "/static/images/bought3.png"
    }, {
      lessonName: "Web 前端工程师",
      lessonDesc: "本课程重在培养学生更好的理解与用户本课程重在培养学生更好的理解与用户",
      lessonPrice: "4200",
      lessonIcon: "/static/images/bought3.png"
    }, {
      lessonName: "Web 前端工程师",
      lessonDesc: "本课程重在培养学生更好的理解与用户本课程重在培养学生更好的理解与用户",
      lessonPrice: "4200",
      lessonIcon: "/static/images/bought3.png"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var selFalse = []
    var selTrue = []
    for (let i = 0; i < this.data.lessoninfos.length; i++) {
      selFalse.push(false)
      selTrue.push(true)
    }
    this.setData({
      selFalse: selFalse,
      selTrue: selTrue
    })

  },
  calcPrice: function(e) {
    let _this = getCurrentPages()[getCurrentPages().length - 1]
    var selIndex = e.detail.value
    var selLesson = []
    var selPrice = 0
    var selCheck = [..._this.data.selFalse]
    selIndex.forEach(function(item, index) {
      selPrice += parseInt(_this.data.lessoninfos[item].lessonPrice)
      selLesson.push({
        "lessonName": _this.data.lessoninfos[item].lessonName
      })
      selCheck[item] = true
    })
    _this.setData({
      totalPrice: selPrice,
      selLesson: selLesson,
    })
    if (selCheck != _this.data.selTrue) {
      // var selCheck = _this.data.selCheck
      _this.setData({
        selectAll: false
      })

    }

  },
  selAll: function(e) {
    var _this = getCurrentPages()[getCurrentPages().length - 1]
    if (e.detail.value[0] == "all") {
      var selLesson = []
      var selPrice = 0
      _this.data.lessoninfos.forEach(function(item, index) {
        selPrice += parseInt(item.lessonPrice)
        selLesson.push({
          "lessonName": item.lessonName
        })
      })
      _this.setData({
        selCheck: [..._this.data.selTrue],
        totalPrice: selPrice,
        selLesson: selLesson
      })
    } else {
      _this.setData({
        selCheck: [..._this.data.selFalse],
        totalPrice: 0,
        selLesson: []
      })
    }
  },
  paybill: function(e) {
    //发送数据 
    wx.navigateTo({
      url: '/pages/payment/payment',
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