// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //获取轮播图数据的列表
      swiperList:[],
      //存放九宫格数据的列表
      gridList:[],
      //本地图片
      localswiper:[
        {
          link:'../../codeseg/images/car.png',
          url: 'https://www.baidu.com/',
        },
        {
          link:'../../codeseg/images/home.png',
          url: 'https://www.baidu.com/',
        },
        {
          link:'../../codeseg/images/learn.png',
          url: 'https://www.baidu.com/',
        }
      ]
      // localswiper:["../../codeseg/images/car.png","../../codeseg/images/home.png","../../codeseg/images/learn.png"]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getSwiperList()
    //this.getGridList()
  },
  loadSwiperList(){

  },
  getSwiperList(){
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success:(res)=>{
        console.log(res)
        this.setData({swiperList:res.data})
      }
    })
  },

  getGridList(){
    wx.request({
      url: 'https://www.escook.cn/categories',
      method:'GET',
      success:(res)=>{
        console.log(res)
        this.setData({gridList:res.data})
      }
    })
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

  }
})