const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onShow: function() {
    var user_info = wx.getStorageSync("user_info")
    if (user_info) {
      console.log('user_info')
      console.log(user_info)
      this.setData({
        userInfo: user_info,
        hasUserInfo: true
      })
    } else {
      console.log('redirect....')
      wx.redirectTo({
        url: '/pages/gateway/gateway',
      })
    }
  },

  onReady: function() {
    var infoFull = wx.getStorageSync("e")
    var jscode = wx.getStorageSync("jscode")
    console.log('jscode & infoFull')
    console.log(infoFull)
    console.log(jscode)
    var mm_url = "https://m.falinwa.cn/wechat?code=" + jscode + "&info=" + encodeURIComponent(JSON.stringify(infoFull)) + "#wechat_redirect"
    console.log('mm_url')
    console.log(mm_url)
    wx.setStorageSync('mm_url', mm_url)
    // wx.login({
    //   success: function(data) {
    //     console.log('获取登录 Code：' + data.code)
    //     var mm_url = "https://m.falinwa.cn/wechat?code=" + data.code + "&info=" + encodeURIComponent(JSON.stringify(info_e)) + "#wechat_redirect"
    //     console.log(mm_url)
    //     wx.setStorageSync('mm_url', mm_url)
    //   },
    //   fail: function() {
    //     console('登录获取Code失败！');
    //   }
    // })
    this.setData({
      'out_mm_url': mm_url
    })
    console.log("out page data:" + JSON.stringify(this.data))
    wx.showShareMenu({
      withShareTicket: true
    })
  },
})