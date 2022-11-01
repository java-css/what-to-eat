// app.js
App({
  globalData: {
    idClassidy: null
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
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
    wx.setStorageSync("menu", menus);
  },
  getMenu: function () {
    return wx.getStorageSync("menu");
  },
  random: function () {
    return Math.random().toString(36).substr(2);
  }
})