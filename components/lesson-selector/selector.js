import {
  BaseURL,
  MediaURL
} from "../../utils/util.js"
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    lessons: [{
        lesson: "Java",
        icon: `${MediaURL}/group1/M00/00/00/CgIFIl3MwI2AVkd8AAAYcvfGZag994.jpg`
      },
      {
        lesson: "HTML",
        icon: `${MediaURL}/group1/M00/00/00/CgIFIl3Mv0CAHNzsAAAI334TgUY229.png`
      },
      {
        lesson: "IOS",
        icon: `${MediaURL}/group1/M00/00/00/CgIFIl3MwHKAeC8kAAAHd8j1Oj0296.png`
      },
      {
        lesson: "UI",
        icon: `${MediaURL}/group1/M00/00/00/CgIFIl3MzsaABGCuAAAH2iNQmSU504.png`
      },
      {
        lesson: "WEB",
        icon: `${MediaURL}/group1/M00/00/00/CgIFIl3M0AWAOWMkAAALaffHy20621.png`
      },
      {
        lesson: "AR",
        icon: `${MediaURL}/group1/M00/00/00/CgIFIl3MvmSAKYYWAAAH4-2fXQM807.png`
      },
      {
        lesson: "Python",
        icon: `${MediaURL}/group1/M00/00/00/CgIFIl3MwgOADv3kAAAI6QME0q4123.png`
      },
      {
        lesson: "搜索",
        icon: `${MediaURL}/group1/M00/00/00/CgIFIl3MwX2AQD1TAAAIrFWbJqk138.png`
      },
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchhotkeysSel: function(event) {
      let keywords = event.currentTarget.dataset.text
      if (keywords == "搜索") {
        wx.switchTab({
          url: '/pages/search/search',
        })
      } else {
        wx.navigateTo({
          url: `/pages/search-res/search-res?keywords=${keywords}`,
        })
      }
    }
  }
})