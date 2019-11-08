// pages/search-res/search-res.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchsource: [], // 搜索数据源
    searchresults: [{
      name: "HTML",
      lessonname: "HTML5全栈进阶视频教程",
      lessonteacher: "陈林",
      lessonstudied: 25858,
      lessonicon: "../../static/images/lessonHTML.png",
      price: 1500,
      videoUrl: "/static/video/Ka98k.mp4",
      videoCode: "Ka98k"
    }, {
      name: "JAVA",
      lessonname: "JAVA高级视频课程",
      lessonteacher: "许文强",
      lessonstudied: 25858,
      lessonicon: "../../static/images/lessonJAVA.png",
      price: 1500,
      videoUrl: "/static/video/M24.mp4",
      videoCode: "M24"
    }, {
      name: "UI",
      lessonname: "UI/UE从入门到精通",
      lessonteacher: "海燕",
      lessonstudied: 48503,
      lessonicon: "../../static/images/lessonUI.png",
      price: 1500,
      videoUrl: "/static/video/M24.mp4",
      videoCode: "M24"
    }, {
      name: "PYTHON",
      lessonname: "PYTHON实战经验大解析",
      lessonteacher: "云兵",
      lessonstudied: 12325,
      lessonicon: "../../static/images/lessonPYTHON.png",
      price: 1500,
      videoUrl: "/static/video/M24.mp4",
      videoCode: "M24"
    }], // 搜索结果
    keywords: "", // 搜索关键字
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      keywords
    } = options
    this.setData({
      keywords
    })
    // 用keywords 请求数据
  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

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