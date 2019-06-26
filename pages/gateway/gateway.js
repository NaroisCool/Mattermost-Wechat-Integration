const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    var user_info = wx.getStorageSync("user_info")
    if (user_info) {
      wx.redirectTo({
        url: '../index/index',
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    wx.setStorageSync('user_info', e.detail.userInfo);
    wx.setStorageSync('e', e);
    var user_info = wx.getStorageSync("user_info")
    if (e.detail.userInfo){
      app.globalData.userInfo = e.detail.userInfo;
      console.log('app.globalData.userInfo') 
      console.log(app.globalData.userInfo) 
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      });
      wx.redirectTo({
        url: '../index/index',
        success: function () { },
        fail: function () { },
        complete: function () { }
      });
    }
  }
})