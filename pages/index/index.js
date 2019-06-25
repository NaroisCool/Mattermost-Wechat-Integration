//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onGotUserInfo: function (e) {
    wx.login({
      success: function (data) {
        console.log('获取登录 Code：' + data.code)
        
        app.globalData.mm_url = "https://m.falinwa.cn/wechat?code=" + data.code + "&info=" + encodeURIComponent(JSON.stringify(e)) +"#wechat_redirect";
        console.log(app.globalData.mm_url)
        wx.navigateTo({
          url: '../outer/mm/out',
          success: function() {
          },      
        fail: function() {},        
        complete: function() {}
        })
      },
      fail: function () {
        console('登录获取Code失败！');
      }
    });
    console.log(e.detail.errMsg);
    console.log(e.detail.userInfo);
    console.log(e.detail.rawData);

  },
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toFalinwa:function(){
      wx.redirectTo({
        url: '../outer/falinwa/falinwa',
      })
  },
  onPullDownRefresh: function () {
    //显示顶部刷新图标
    wx.showNavigationBarLoading();
    this.onLoad();
    //隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    //停止下拉事件
    wx.stopPullDownRefresh();
  }
})
