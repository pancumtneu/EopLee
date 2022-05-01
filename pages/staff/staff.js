// pages/staff/staff.js
Page({

  /**
   * 页面的初始数据   navigation  不能跳转链接
   */
  data: {
    msg:"你好",
    staffpiclist:["../../codeseg/images/staffpiclist/五度圈.jpg"],
    imgUrls: [
      {
        link:'/pages/logs/logs',
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-81dcb196b25707d37994db5de61f58f4_r.jpg%3Fsource%3D1940ef5c&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646531518&t=5ee5710e6fcdd44454c71271cd9132ec',
      },
      {
        link: '../../codeseg/images/car.png',
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-81dcb196b25707d37994db5de61f58f4_r.jpg%3Fsource%3D1940ef5c&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646531518&t=5ee5710e6fcdd44454c71271cd9132ec',
      },
      {
        link: '../../codeseg/images/car.png',
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-211b1f67c9490485f32edb7c7d1aef93_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646531782&t=120d547c9c97cb2d85479afde154fb14',
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  iptHandler(e){
    this.setData({
      msg:e.detail.value
    })
  }
})