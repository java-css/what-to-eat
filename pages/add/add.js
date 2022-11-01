// pages/add/add.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    obj: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id,
      obj: app.getMenu().find(item => item.id === options.id),
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
    console.log(666666, e);
    const {
      pos
    } = e.currentTarget.dataset;
    const temp = this.data.obj.children;
    temp[pos] = e.detail.value;
    this.setData({
      // [`obj.children.${pos}`]: e.detail.value,
      [`obj.children`]: temp
    });
  },
  save: function (e) {
    const {
      typeName,
      children
    } = this.data.obj;
  }


})