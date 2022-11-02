// index.js
// 获取应用实例
const app = getApp();
let timer = null;
Page({
  data: {
    btnName: '开始',
    current: '',
    list: [],
    eatList: {},
    currentId: null,
    tempMenu: [],
    title: ''
  },

  onLoad() {

  },
  onShow() {
    const list = app.getMenu();
    const arr = list.length ? list : app.globalData.list;
    const rand = this.randomIndex(arr.length);
    const obj = arr[rand];
    const {
      typeName,
      children
    } = obj;
    this.setData({
      title: typeName,
      list: children
    });
  },
  onHide() {
    this.end(true);
    this.setEat(this.data.eatList);
  },
  randomIndex: function (num) {
    return Math.floor(Math.random() * num)
  },
  randomItem: function () {
    tempMenu
    const {
      list,
      tempMenu
    } = this.data
    const arr = list.length ? list : tempMenu
    const newArr = arr.sort(this.randomSort);
    this.start(newArr)
  },

  start: function (newArr) {
    this.setData({
      btnName: '停止'
    })
    timer = null;
    clearInterval(timer);
    let i = 0;
    this.setData({
      current: newArr[i]
    })
    timer = setInterval(() => {
      i++;
      i >= newArr.length && (i = 0);
      this.setData({
        current: newArr[i]
      })
    }, 50)
  },
  end: function (isJump = false) {
    clearInterval(timer);
    const id = this.data.currentId;
    if (!isJump && id != null) {
      const {
        current
      } = this.data
      this.setData({
        [`eatList.${id}`]: current,
      })
    }
    this.setData({
      btnName: '开始'
    })
  },
  randomSort: function (a, b) {
    return Math.random() > 0.5 ? -1 : 1
  },
  startOrEnd: function (e) {
    const type = e.currentTarget.dataset.status
    if (this.data.list.length == 1) {
      wx.showToast({
        title: '就一个，就吃它吧！',
        icon: 'error',
        duration: 2000
      })
      return false;
    }
    if (type == '开始') {
      this.randomItem()
    } else {
      this.end();
    }
  },
  currentHandler: function (e) {
    if (this.data.btnName == '停止') return false;
    const i = e.currentTarget.dataset.id;
    this.setData({
      currentId: i
    })
  },
  clear: function () {
    if (this.data.btnName == '停止') {
      wx.showToast({
        title: "请先停止!",
        icon: "none",
      });
      return false;
    }
    wx.showModal({
      title: "提示",
      content: "确定要清空？",
      success: (res) => {
        if (res.confirm) {
          this.setData({
            eatList: {}
          })
        }
      },
    });

  },
  setEat: function (arr) {
    wx.setStorageSync("eat", arr);
  },
  getEat: function () {
    return wx.getStorageSync("eat");
  },
})