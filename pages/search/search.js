// pages/search/search.js
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
    hotkeys: ["Java", "IOS", "UI", "WEB", "Python"],
    swiperImages: [`${MediaURL}/group1/M00/00/00/CgIFIl3Mwv6AF_L7AAHTLP0bJs4530.png`, `${MediaURL}/group1/M00/00/00/CgIFIl3MwxmAAX1jAAF8mxDMX7M557.png`, `${MediaURL}/group1/M00/00/00/CgIFIl3MwzGARp58AAFNq_K3PyU787.png`, `${MediaURL} /group1/M00/00/00/CgIFIl3Mw0aACya_AAGXbGXSOeY884.png`]
  },

  searchhotkeys: function(event) {
    let keywords = event.type == "confirm" ? event.detail.value : event.currentTarget.dataset.text

    wx.navigateTo({
      url: ` /pages/search-res/search-res?keyword=${keywords}`
    })
  }
})