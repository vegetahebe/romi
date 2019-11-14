// pages/search-res/search-res.js
import {
  BaseURL,
  MediaURL
} from '../../utils/util.js'
const app = getApp()
Page({

  /*
   * 页面的初始数据
   */
  data: {
    BaseURL,
    nodata: false,
    searchsource: [], // 搜索数据源
    searchresults: [],
    keywords: "", // 搜索关键字
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      keywords
    } = options
    this.setData({
      keywords,
    })

    // // 获取搜索数据源
    // getApp().wxajax('/getAllsuit',"POST",this.data.data).then(res=>{
    //   this.setData({
    //     searchsource: res
    //   });
    //   //开始搜索
    //   this.search();
    // })
    this.getSource('/getAllSuit').then(res => {

      this.setData({
        searchsource: res
      });
      // 开始搜索
      this.search();
    });

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
        nodata:false
      })
    }
    // 更新搜索结果
    // let noData = searchsource.length < 0;
    // this.setData({
    //   searchsource
    // });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})