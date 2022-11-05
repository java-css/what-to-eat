// app.js
App({
  globalData: {
    idClassidy: null,
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
      noDel: true,
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
      noDel: true,
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
      noDel: true,
    }],
  },
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    const arr = this.getMenu();
    this.setMenu(arr.length ? arr : this.globalData.list)
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    this.checkUpdateVersion();
  },
  checkUpdateVersion: function () {
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
      console.log(res.hasUpdate);
    });
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        },
      });
    });
    updateManager.onUpdateFailed(function () {});
  },
  setMenu: function (m) {
    let menus;
    if (m instanceof Array) {
      menus = m;
    } else {
      menus = this.getMenu();
      if (!menus) menus = [];
      menus.push(m);
    }
    wx.setStorageSync("menuList", menus);
  },
  getMenu: function () {
    return wx.getStorageSync("menuList");
  },
  random: function () {
    return Math.random().toString(36).substr(2);
  },
  showToast: function (title = '', icon = 'none') {
    wx.showToast({
      title: title,
      icon: icon,
      duration: 1000
    })
  }
})