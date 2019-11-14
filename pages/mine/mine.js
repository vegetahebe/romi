// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"Vegeta",
    lastlogintime:"2019-10-08",
    userimg: '/static/images/usericon.png',
    nickname: '',
    wishesUrl:"/static/images/wishes.png",
    intentUrl: "/static/images/intent.png",
    cardsUrl: "/static/images/cards.png"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },
  goSecurity: function(e) {
    wx.navigateTo({
      url: '/pages/security/security',
    })
  },
  goAboutus: function(e) {
    wx.navigateTo({
      url: '/pages/aboutus/aboutus',
    })
  },
  goWishes: function(e) {
    wx.navigateTo({
      url: '/pages/wishes/wishes',
    })
  },
  upShopLogo: function() {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImageShop('album'); //从相册中选择
          } else if (res.tapIndex == 1) {
            that.chooseWxImageShop('camera'); //手机拍照
          }
        }
      }
    })
  },
  chooseWxImageShop: function(type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function(res) {
        that.data.userimg = res.tempFilePaths[0],
          that.upload_file(urldate.upimg + 'shop/shopIcon', res.tempFilePaths[0])
        userimg = res.tempFilePaths[0];
        that.setData({
          userimg: userimg
        })
      }
    })

  },
  upload_file: function(url, filePath) {
    var that = this;
    var signature = signa.signaturetik('token=' + token, 'userAccessToken=' + userAccessToken, 'studentAccessToken=' + studentAccessToken);
    wx.uploadFile({
      url: urldate.upimg, //后台处理接口
      filePath: filePath,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      }, // 设置请求的 header
      formData: { //需要的参数
        'token': token,
        'signature': signature,
        'userAccessToken': userAccessToken,
        'studentAccessToken': studentAccessToken
      }, // HTTP 请求中其他额外的 form data
      success: function(res) {
        var data = JSON.parse(res.data);
        that.setData({
          userimg: data.path,
        });
        that.showMessage('上传成功');
      },
      fail: function(res) {}
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成F
   */
  onReady: function() {

  },

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