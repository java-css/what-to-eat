/*
 * @Author: Jason Jason
 * @Date: 2022-10-25 14:23:03
 * @LastEditors: Jason Jason
 * @LastEditTime: 2022-11-04 16:03:38
 * @FilePath: \what-to-eat\pages\list\list.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// pages/list/list.js
const app = getApp();
let temp = null;
let isEdit = false;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
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
      url: `/pages/add/add`,
    });
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
  edit: function (e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/add/add?id=${id}`,
    });
  },
  getItem: function (e) {
    const { id } = e.currentTarget.dataset;
    app.globalData.idClassidy = id;
    wx.switchTab({
      url: "/pages/index/index",
    });
  },
  del: function (e) {
    const { pos } = e.currentTarget.dataset;
    const arr = this.data.list;
    arr.splice(pos, 1);
    this.setData({
      list: arr,
    });
    app.setMenu(arr);
  },
});
