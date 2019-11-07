// components/lesson-show/lessonShow.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommonditions:{
      type:Array,
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
  print:function(){
    console.log(this.data)
  }
  }
})