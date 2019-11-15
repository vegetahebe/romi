// pages/details/details.js
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
    BaseURL,
    userComment: [{
      username: "李二狗",
      time: "2019-09-09",
      usericon: "/static/images/usericon1.png",
      commentcontent: "老师上课非常仔细,快乐学习"
    }, {
      username: "张晨",
      time: "2019-10-08",
      usericon: "/static/images/usericon2.png",
      commentcontent: "非常详细的讲解,点赞!"
    }, {
      username: "权一舟",
      time: "2019-09-09",
      usericon: "/static/images/usericon3.png",
      commentcontent: "良心教学,强烈推荐"
    }, {
      username: "李二狗",
      time: "2019-09-09",
      usericon: "/static/images/usericon4.png",
      commentcontent: "'视频可以"
    }, {
      username: "蜜桃",
      time: "2019-09-09",
      usericon: "/static/images/usericon5.png",
      commentcontent: "讲的很好,每节课都是一个进步"
    }, {
      username: "多多",
      time: "2019-10-06",
      usericon: "/static/images/usericon6.png",
      commentcontent: "讲的很仔细"
    }],
    //视频参数 后期请求
    mylasttime: 0,
    videoComment: [],
    videoPaied: false,
    videoSection: 0,
    teacherTables: {},
    //弹框属性
    dialogShow: false,
    buttons: [{
      text: '立即购买'
    }, {
      text: '再想想'
    }],
    //简介评论切换属性
    profileComment: true,
    //相关视频 对象
    recommenditions: [],
  },
  //限时视频弹框 方法
  openConfirm: function() {
    this.setData({
      dialogShow: true
    })
  },
  goBuy: function(e) {
    var _this = getCurrentPages()[getCurrentPages.length-1]
    //停止正在播放的视频
    var videoContext = wx.createVideoContext("myVideo")
    console.log(videoContext)
    videoContext.stop();
    wx.navigateTo({
      url: `/pages/payment/payment?videoCode=${this.data.videoCode}`,
    })
  },
  tapDialogButton(e) {
    if (e.detail.index == 0) {
      wx.navigateTo({
        url: `/pages/payment/payment?videoCode=${this.data.videoCode}`,
      })
    }
    this.setData({
      dialogShow: false,
    })
  },
  // 简介评论切换
  toggleProfilecomment() {
    this.setData({
      profileComment: !this.data.profileComment
    })
  },
  //本章视频跳转页面
  jumplessonsection: function(e) {
    let {
      index
    } = e.target.dataset
    let _this = getCurrentPages()[getCurrentPages().length - 1]
    if (index != _this.data.videoSection) {
      //用index和本页数据去请求数据库跳转到本章另一个页面
      _this.setData({
        videoUrl: `${MediaURL}/${_this.data.videoComment[index].videoSite}`,
        videoSection: index
      })
    }
  },
  getVideoInfo() {
    let _this = getCurrentPages()[getCurrentPages().length - 1]
    wx.request({
      url: `${BaseURL}/getASuit`,
      method: 'POST',
      data: {
        "content": _this.data.videoCode,
        "parameter": "",
        "statusode": app.globalData.username,
      },
      success: res => {
        if (res.data.code == 230) {
          _this.setData({
            mylasttime: 140,
            videoPaied: true
          })
        }
        res.data.data.forEach((item) => {
          item.videoSite = MediaURL + "/" + item.videoSite
        })
        _this.setData({
          videoComment: res.data.data
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      videoCode
    } = options;
    if (!this.data.videoPaied) {
      this.setData({
        lasttime: 0
      })
    }
    var mylasttime = this.data.lasttime
    this.setData({
      videoCode: videoCode,
      mylasttime: mylasttime,
    })
    this.getVideoInfo()
    console.log(this.data.continueLearn)
    this.getSource('/getAllSuit').then(res => {
      res.forEach(item => {
        if (item.courseintroductionDistinction == this.data.videoCode) {
          item.teacherTables.teacherHeadportrait = `${MediaURL}/` + item.teacherTables.teacherHeadportrait
          this.setData({
            teacherTables: item.teacherTables
          })
        }
      });
      var recommenditions = []
      res.forEach(item => {
        if (item.teacherTables.teacherName == this.data.teacherTables.teacherName && item.courseintroductionDistinction != this.data.videoCode) {
          recommenditions.push(item)
        }
      })
      recommenditions.forEach(item => {
        item.courseintroductionBreviarypictyre = `${MediaURL}/` + item.courseintroductionBreviarypictyre

      })
      this.setData({
        recommenditions: recommenditions
      })
      console.log(this.data.recommenditions)
    });
  },
  //监听视频播放进度  判断未付费停止和 继续播放
  bindtimeupdate: res => {
    let _this = getCurrentPages()[getCurrentPages().length - 1]
    if (!_this.data.videoPaied && res.detail.currentTime >= 30) {
      var videoContext = wx.createVideoContext("myVideo")
      videoContext.stop()
      _this.openConfirm()
    }
    _this.setData({
      lasttime: parseInt(res.detail.currentTime)
    })
    // console.log(_this.data.lasttime)
  },
  addWishes: function() {
    // 加入心愿单
    wx.request({
      url: `${BaseURL}/insertSoppings`,
      method: "POST",
      data: {
        verification: app.globalData.username,
        commoditys: this.data.videoCode,
        commoditysSopping: []
      },
      success: res => {
        console.log(res)
        wx.showModal({
          title: '恭喜',
          content: '视频已经成功加入心愿单',
        })
      },
      fail: err => {

      }
    })
  },
  //请求数据函数
  getSource(url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${BaseURL}${url}`,
        method: "POST",
        data: {},
        success: res => {
          resolve(res.data.data);
        },
        fail: err => {
          console.log(err)
        }
      })
    })
  },
  //正则处理请求数据显示内容匹配项
  search() {
    let {
      searchsource,
      keywords,
      searchresults
    } = this.data;
    let reg = new RegExp(keywords, "i");
    console.log(reg)
    // 搜索数据
    searchresults = searchsource.filter(item => {
      return reg.test(JSON.stringify(item.courseintroductionNarrate)) || reg.test(JSON.stringify(item.courseintroductionTeacher));
    });
    if (searchresults.length == 0) {
      this.setData({
        nodata: true
      })
    } else {
      console.log(searchsource, keywords, searchresults)
      searchresults.forEach((item) => {
        item.courseintroductionBreviarypictyre = MediaURL + "/" + item.courseintroductionBreviarypictyre
      })
      console.log(searchresults[0].courseintroductionBreviarypictyre)
      this.setData({
        searchresults,
        nodata: false
      })
    }
    // 更新搜索结果
    // let noData = searchsource.length < 0;
    // this.setData({
    //   searchsource
    // });
  },
})