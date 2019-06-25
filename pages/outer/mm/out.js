// pages/out/out.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    out_mm_url: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ out_mm_url: app.globalData.mm_url})
    console.log("out page data:" + JSON.stringify(this.data))
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //显示顶部刷新图标
    wx.showNavigationBarLoading();
    //要刷新请求服务器的方法
    this.selectCar();
    //隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    //停止下拉事件
    wx.stopPullDownRefresh();
  },
  onWebViewError:function(){
    console.log('failed to load outer page...')
    wx.redirectTo({
      url: '../index/index',
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})