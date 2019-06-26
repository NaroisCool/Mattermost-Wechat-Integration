// pages/out/out.js
const app = getApp()

Page({
  data: {
    out_mm_url: {},
  },
  onLoad: function(options) {
    var mm_url = wx.getStorageSync("mm_url")
    this.setData({
      'out_mm_url': mm_url
    })
  },
  onReady: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },
  onWebViewError: function() {
    console.log('failed to load outer page...')
    wx.redirectTo({
      url: '../index/index',
    })
  },
})