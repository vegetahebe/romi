// components/lesson-show2/lessonShow2.js
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
    lessonshow: [{
        name: "HTML5",
        info: [{
          lessonname: "HTML网页设计大解析",
          lessonicon: "/static/images/HTMLimage1.png",
          lessonteacher: "陈林"
        }, {
          lessonname: "CCS+DIV基础入门讲解",
            lessonicon: "/static/images/HTMLimage2.png",
          lessonteacher: "谭薇"
        }, {
          lessonname: "Banner设计规范原则",
            lessonicon: "/static/images/HTMLimage3.png",
          lessonteacher: "许冬"
        }, {
          lessonname: "电商网页设计案例分析",
            lessonicon: "/static/images/HTMLimage4.png",
          lessonteacher: "娜娜"
        }]

      }, {
        name: "JAVA",
        info: [{
          lessonname: "JAVA+大数据开发",
          lessonicon: "/static/images/JAVAimage1.png",
          lessonteacher: "文强"
        }, {
          lessonname: "JAVA从入门到放弃",
            lessonicon: "/static/images/JAVAimage2.png",
          lessonteacher: "文强"
        }, {
          lessonname: "JAVA语言实用开发技巧",
            lessonicon: "/static/images/JAVAimage3.png",
          lessonteacher: "二狗"
        }, {
          lessonname: "JAVA经典案例解析",
            lessonicon: "/static/images/JAVAimage4.png",
          lessonteacher: "大象"
        }]
      },
      {
        name: "UI",
        info: [{
          lessonname: "图形设计元素",
          lessonicon: "/static/images/UIimage1.png",
          lessonteacher: "海燕"
        }, {
          lessonname: "平面构成实战解析",
            lessonicon: "/static/images/UIimage2.png",
          lessonteacher: "燕南"
        }, {
          lessonname: "UI界面设计规范",
            lessonicon: "/static/images/UIimage3.png",
          lessonteacher: "王娜娜"
        }, {
          lessonname: "交互设计讲解",
            lessonicon: "/static/images/UIimage4.png",
          lessonteacher: "水许"
        }]
      }
    ]
  },


  /**
   * 组件的方法列表
   */
  methods: {

  }
})