// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotkeys: ["Java", "HTML", "IOS", "UI", "WEB", "Python"],
    swiperImages: ["/static/images/swiperImage1.png", "/static/images/swiperImage2.png", "/static/images/swiperImage3.png", "/static/images/swiperImage4.png"]
  },

  searchhotkeys: function(event) {
    let keywords = event.type == "confirm" ? event.detail.value : event.currentTarget.dataset.text
    
    wx.navigateTo({
      url: `/pages/search-res/search-res?keywords=${keywords}`
    })
  }
})