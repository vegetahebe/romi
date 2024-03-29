// components/lesson-show/lessonShow.js
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
    showitems:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetail(event) {
      let videoCode = event.currentTarget.dataset.text
      wx.navigateTo({
        url: `/pages/details/details?videoCode=${videoCode}`,
      })
    },
    show(){
      this.data.showitems
    }
  }
})