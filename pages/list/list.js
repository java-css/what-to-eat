// pages/list/list.js
const app = getApp()
let temp = null;
let isEdit = false
Page({
  /**
   * 页面的初始数据
   */
  data: {
    slideButtons: [{
      text: '编辑',
      data: 'edit'
    }, {
      text: '删除',
      data: 'del'
    }],
    arr: [],
    show: false,
    value: '',
    list: [{
      id: 'xxxxx01',
      typeName: '中午吃什么?',
      children: [
        "热干面",
        '宫保鸡丁',
        '回锅肉',
        "黄焖鸡",
        '麻婆豆腐',
        '锅巴肉片',
        "香干回锅肉",
        "酸辣粉",
        "鱼香/肉末茄子 ",
        "螺蛳粉",
        '重庆小面',
        "五香脆皮鸡",
        "水煮牛肉",
        "水饺",
        "回锅鱼片",
        "炒面",
        '米线'
      ],
      canDel: false,
    }, {
      id: 'xxxxx02',
      typeName: '晚饭吃什么?',
      children: [
        "热干面",
        '宫保鸡丁',
        '回锅肉',
        "黄焖鸡",
        '麻婆豆腐',
        '锅巴肉片',
        "香干回锅肉",
        "酸辣粉",
        "鱼香/肉末茄子 ",
        "螺蛳粉",
        '重庆小面',
        "五香脆皮鸡",
        "水煮牛肉",
        "水饺",
        "回锅鱼片",
        "炒面",
        '米线'
      ],
      canDel: false,
    }, {
      id: 'xxxxx03',
      typeName: '聚餐吃什么?',
      children: [
        "海底捞",
        '火锅',
        '烤鱼',
        "烧烤",
        '海鲜',
        '自助餐',
        "本地特色菜",
        '早茶'
      ],
      canDel: false,
    }],
    activeNames: ['1'],
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
    this.setData({
      arr: app.getMenu(),
    });
  },
  onHide() {
    app.setMenu(this.data.list);
  },
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {},
  // slideButtonTap(e) {
  //   const type = e.detail.data;
  //   const {
  //     idx,
  //     value
  //   } = e.currentTarget.dataset;
  //   if (type === 'edit') {
  //     temp = idx;
  //     isEdit = true;
  //     this.setData({
  //       value: value,
  //       show: true
  //     })
  //   } else if (type === 'del') {
  //     const arr = this.data.arr;
  //     arr.splice(idx, 1);
  //     this.setData({
  //       arr: arr
  //     })
  //   } else {}
  // },
  add: function (e) {
    wx.navigateTo({
      url: "/pages/add/add",
    })
    // this.setData({
    //   show: true
    // })
  },
  // input: function (e) {
  //   this.setData({
  //     value: e.detail.value,
  //   });
  // },
  // confirm: function () {
  //   const {
  //     value,
  //     arr
  //   } = this.data
  //   let subArr = arr || [];
  //   if (isEdit) {
  //     value && (subArr[temp] = value);
  //   } else {
  //     value && subArr.push(value);
  //   }
  //   this.setData({
  //     arr: subArr,
  //     show: false,
  //     value: ''
  //   });
  //   isEdit = false
  // },
  // blur: function () {},
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
    console.log(5555555555555555);
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