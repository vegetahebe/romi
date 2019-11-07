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
        icon: "../../static/images/java.png"
      },
      {
        lesson: "HTML",
        icon: "../../static/images/html.png"
      },
      {
        lesson: "IOS",
        icon: "../../static/images/ios.png"
      },
      {
        lesson: "UI",
        icon: "../../static/images/ui.png"
      },
      {
        lesson: "WEB",
        icon: "../../static/images/web.png"
      },
      {
        lesson: "AR",
        icon: "../../static/images/ar.png"
      },
      {
        lesson: "Python",
        icon: "../../static/images/python.png"
      },
      {
        lesson: "更多",
        icon: "../../static/images/more.png"
      },
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchhotkeysSel: function(event) {
      let keywords = event.currentTarget.dataset.text
      wx.navigateTo({
        url: `/pages/search-res/search-res?keywords=${keywords}`,
      })
    }
  }
})