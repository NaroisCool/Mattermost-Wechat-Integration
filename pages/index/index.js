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
    var info_e = wx.getStorageSync("e")
    console.log('e')
    console.log(info_e)
    wx.login({
      success: function(data) {
        console.log('获取登录 Code：' + data.code)
        var mm_url = "https://m.falinwa.cn/wechat?code=" + data.code + "&info=" + encodeURIComponent(JSON.stringify(info_e)) + "#wechat_redirect"
        console.log(mm_url)
        wx.setStorageSync('mm_url', mm_url)
      },
      fail: function() {
        console('登录获取Code失败！');
      }
    })
    var mm_url = wx.getStorageSync("mm_url")
    console.log('mm_url')
    console.log(mm_url)
    this.setData({
      'out_mm_url': mm_url
    })
    console.log("out page data:" + JSON.stringify(this.data))
    wx.showShareMenu({
      withShareTicket: true
    })
  },
})