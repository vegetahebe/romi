// pages/wishes/wishes.js
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
    totalPrice: 0,
    nodata: true,
    selLesson: [],
    selFalse: [],
    selTrue: [],
    selCheck: [],
    selectAll: false,
    lessoninfos: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //新学会的写法,提高性能
    // for (let i = 0; i < this.data.lessoninfos.length; i++) {
    //   selFalse.push(false)
    //   selTrue.push(true)
    // }
    console.log(app.globalData.username)
    this.getWishes("/getUserSopping", {
      verification: app.globalData.username,
      commoditys: '',
      commoditysSopping: []
    }).then(res => {
      this.handleWishes(res)
    })
  },

  //计算总价
  calcPrice: function(e) {
    let _this = getCurrentPages()[getCurrentPages().length - 1]
    var selIndex = e.detail.value
    var selLesson = []
    var selPrice = 0
    var selCheck = [..._this.data.selFalse]
    selIndex.forEach(function(item, index) {
      console.log(_this.data.lessoninfos)
      console.log(_this.data.lessoninfos[item].courseintroductionPrice)
      selPrice += parseInt(_this.data.lessoninfos[item].courseintroductionPrice)
      console.log(selPrice)
      selLesson.push({
        "courseintroductionDistinction": _this.data.lessoninfos[item].courseintroductionDistinction
      })
      console.log(selCheck)
      selCheck[item] = true
      console.log(selCheck)
    })
    _this.setData({
      totalPrice: selPrice,
      selLesson: selLesson,
    })
    if (selCheck != _this.data.selTrue) {
      // var selCheck = _this.data.selCheck
      _this.setData({
        selectAll: false
      })

    }

  },
  //全选
  selAll: function(e) {
    var _this = getCurrentPages()[getCurrentPages().length - 1]
    if (e.detail.value[0] == "all") {
      var selLesson = []
      var selPrice = 0
      _this.data.lessoninfos.forEach(function(item, index) {
        selPrice += parseInt(item.courseintroductionPrice)
        selLesson.push({
          "courseintroductionDistinction": item.courseintroductionDistinction
        })
      })
      _this.setData({
        selCheck: [..._this.data.selTrue],
        totalPrice: selPrice,
        selLesson: selLesson
      })
    } else {
      _this.setData({
        selCheck: [..._this.data.selFalse],
        totalPrice: 0,
        selLesson: []
      })
    }
  },

  //删除
  deleteSel: function(e) {
    var _this = getCurrentPages()[getCurrentPages().length - 1]
    console.log(_this.data)
    var selitems = Array.from(_this.data.selLesson, ({
      courseintroductionDistinction
    }) => courseintroductionDistinction)
    console.log(app.globalData.username)
    wx.request({
      url: `${BaseURL}/deleteByOrderid`,
      method: "POST",
      data: {
        verification: app.globalData.username,
        commoditys: '',
        commoditysSopping: selitems
      },
      success: res => {
        _this.getWishes("/getUserSopping", {
          verification: app.globalData.username,
          commoditys: '',
          commoditysSopping: []
        }).then(res => {
          _this.handleWishes(res)
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  //结算
  paybill: function(e) {
    var _this = getCurrentPages()[getCurrentPages().length - 1]
    var selitems = Array.from(_this.data.courseintroductionPrice, ({
      courseintroductionDistinction
    }) => courseintroductionDistinction)
    var selstring = String(...[selitems])
    console.log(selstring)
    //发送数据 
    wx.navigateTo({
      url: `/pages/payment/payment?${selstring}`,
    })
  },

  //发送请求 接受数据
  getWishes(url, data) {
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
  //处理数据
  handleWishes(res) {
    if (res) {
      res.forEach((item) => {
        item.courseintroductionBreviarypictyre = MediaURL + "/" + item.courseintroductionBreviarypictyre
      })
      var selFalse = new Array(res.length).fill(false)
      var selTrue = new Array(res.length).fill(true)
      this.setData({
        selFalse: selFalse,
        selTrue: selTrue,
        nodata:false
      })
      this.setData({
        lessoninfos: res
      })
    } else {
      this.setData({
        nodata: true
      })
    }
  },
})