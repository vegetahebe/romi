// components/primer/primer.js
import {
  BaseURL,
  MediaURL
} from '../../utils/util.js'
const app = getApp()
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
    hotlesson: "A301C3651657",
    src: `${MediaURL}/group1/M00/00/00/CgIFIl3MvnaASCR9AACWYzNy29o229.png`
  },

  /**
   * 组件的方法列表
   */
  methods: {

    goHotlesson: function() {
      wx.navigateTo({
        url: `/pages/details/details?videoCode=${this.data.hotlesson}`,
      })
    }
  }
})