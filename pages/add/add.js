// pages/add/add.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    obj: null
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
    console.log(666666,e);
    const {
      index
    } = e.currentTarget.dataset;

    this.setData({
      [`obj.children.${index}`]: e.detail.value,
    });
  },
  save:function(e){
    console.log(5555555,this.data.obj);
  }


})