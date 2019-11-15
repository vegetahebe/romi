//index.js
//获取应用实例
import {
  BaseURL,
  MediaURL
} from '../../utils/util.js'
const app = getApp()

Page({
  data: {
    BaseURL,
    MediaURL,
    recommenditions: [],
    lessonShow: [],
    subject: ["java", "ui", "web"]
  },
  onLaunch: function() {
   
  },
  //事件处理函数

  onLoad: function() {
    this.getSource("/loginData", {
      verification: "",
      courseintroductionType: '精品'
    }).then(res => {
      res[0].forEach((item) => {
        item.courseintroductionBreviarypictyre = MediaURL + "/" + item.courseintroductionBreviarypictyre
      })
      this.setData({
        recommenditions: res[0]
      })
    });

    this.handlelearninglesson(this.data.subject)

  },

  getSource(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${BaseURL}${url}`,
        method: "POST",
        data: data,
        success: res => {
          resolve(res.data.data);
        },
        fail: err => {
          console.log(err)
        }
      })
    })
  },

  handlelearninglesson(lesson) {
    var _this = getCurrentPages()[getCurrentPages().length - 1]
    _this.data.subject.forEach(item => {
      _this.getSource("/getLearningType", {
        statusode: "",
        content: item,
        parameter: ""
      }).then(res => {
        res.forEach((item) => {
          item.courseintroductionBreviarypictyre = MediaURL + "/" + item.courseintroductionBreviarypictyre
        })
        var lessonShow = this.data.lessonShow
        lessonShow.push({
          "name": item.toUpperCase(),
          "info": res
        })
        this.setData({
          lessonShow: lessonShow
        })
      });
    })
  }
})