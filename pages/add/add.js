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
    id: null,
    name: '',
    list: [],
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      id
    } = options;
    if (id) {
      const obj = app.getMenu().find((item) => item.id === options.id);
      const {
        typeName,
        children
      } = obj;
      this.setData({
        id: id,
        name: typeName,
        list: children
      });
    }
    this.setData({
      id: id ? id : app.random()
    })
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
  inputName: function (e) {
    this.setData({
      name: e.detail.value
    });
  },
  formInputChange(e) {
    const {
      pos
    } = e.currentTarget.dataset;
    // const temp = this.data.list;
    // temp[pos] = e.detail.value;
    this.setData({
      // [`obj.children.${pos}`]: e.detail.value,
      ['list[' + pos + ']']: e.detail.value
      // list: temp,
    });
  },
  save: function (e) {
    const {
      name,
      id,
      list
    } = this.data;
    let arr = app.getMenu();
    if (this.verify()) {
      this.setData({
        loading: true
      })
      const idx = arr.find(item => item.id === id);
      if (idx) {
        arr.map(item => item.id === id && (item.typeName = name, item.children = list));
      } else {
        arr.push({
          id: id,
          typeName: name,
          children: list
        });
      }
      // if (type == '1') {
      //   //编辑
      //   arr.map(item => item.id === id && (item.typeName = name, item.children = list));
      // } else {
      //   //新增
      //   arr.push({
      //     id: app.random(),
      //     typeName: name,
      //     children: list
      //   });
      // }
      app.setMenu(arr);
      app.showToast('保存成功', 'success')
      this.setData({
        loading: false
      })
      app.globalData.idClassidy = id;
      wx.switchTab({
        url: "/pages/index/index",
      });
    }
  },
  verify: function (e) {
    const {
      name,
      list
    } = this.data;
    const empty = list.find(r => r === '') === '';
    if (!name) return app.showToast('名称不能为空');
    if (empty) return app.showToast('选项不能为空');
    if (list.length < 2) return app.showToast('至少添加两个选项');
    return true;
  },
  del: function (e) {
    const {
      pos
    } = e.currentTarget.dataset;
    const arr = this.data.list;
    arr.splice(pos, 1);
    this.setData({
      list: arr
    })
  },
  add: function (e) {
    const arr = this.data.list;
    arr.push('');
    this.setData({
      list: arr
    })
  }
});