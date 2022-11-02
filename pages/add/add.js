/*
 * @Author: Jason Jason
 * @Date: 2022-10-31 15:44:41
 * @LastEditors: Jason Jason
 * @LastEditTime: 2022-11-02 09:04:29
 * @FilePath: \what-to-eat\pages\add\add.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// pages/add/add.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: 1,
    id: null,
    obj: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id,
      obj: app.getMenu().find((item) => item.id === options.id)
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},
  formInputChange(e) {
    const {
      pos
    } = e.currentTarget.dataset;
    const temp = this.data.obj.children;
    temp[pos] = e.detail.value;
    console.log(555555555555555,temp);
    this.setData({
      // [`obj.children.${pos}`]: e.detail.value,
      [`obj.children`]: temp,
    });
  },
  save: function (e) {
    const {
      obj,
      id,
      type
    } = this.data;
    let list = app.getMenu();
    if (type === 1) {
      //编辑
    } else {
      //新增
    }
  },
});