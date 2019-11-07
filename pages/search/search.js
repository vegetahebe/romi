// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotkeys: ["Java", "HTML", "IOS", "UI", "WEB", "Python"]
  },

  searchhotkeys: function(event) {
    let keywords = event.type == "confirm" ? event.detail.value : event.currentTarget.dataset.text
    
    wx.navigateTo({
      url: `/pages/search-res/search-res?keywords=${keywords}`
    })
  }
})