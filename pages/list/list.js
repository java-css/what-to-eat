// pages/list/list.js
const app = getApp()
let temp = null;
let isEdit = false
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    btns: [{
      name: '随 机',
      handler: 'getItem'
    }, {
      name: '编 辑',
      handler: 'edit'
    }, {
      name: '删 除',
      handler: 'del'
    }]
  },

  onLoad(options) {},
  onReady() {},
  onShow() {
    const list = app.getMenu();
    this.setData({
      list: list.length ? list : app.globalData.list,
    });
  },
  onHide() {
    app.setMenu(this.data.list);
  },
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {},
  add: function (e) {
    wx.navigateTo({
      url: `/pages/add/add?type=0`,
    })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
  edit: function (e) {
    const {
      id,
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/add/add?id=${id}&type=1`,
    })
  },
  getItem: function (e) {
    const {
      id
    } = e.currentTarget.dataset;
    app.globalData.idClassidy = id;
    wx.switchTab({
      url: "/pages/index/index",
    })
  },
  del: function (e) {
    const {
      id
    } = e.currentTarget.dataset;
  }
})