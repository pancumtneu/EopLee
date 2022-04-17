// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:{
      age:20,
      height:145,
      name:"富婆"
    },
    number:0
    ,
    list:[
      {
        id:0,
        name:"猪八戒"
      },
      {
        id:1,
        name:"孙悟空"
      },
      {
        id:2,
        name:"沙僧"
      }
    ]
  },

  fakeCallback:function(e){
    //console.log(e.detail.value)
    this.setData({
      number :e.detail.value
      }
      )
  },
  handletap(e){
    const operation=e.currentTarget.dataset.operation
    this.setData({number:this.data.number + operation})  //不能使用this.number=this.data.number
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("跳转到:"+options)

    wx.navigateTo({

      url: '/pages/home/home',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
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