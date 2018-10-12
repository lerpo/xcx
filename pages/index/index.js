//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items:[
      { name: "电动车租赁" },
      { name: "劳保用品" },
      { name: "保险购买" },
      { name: "消费借款" }
    ],
    condition:Math.floor(Math.random()*3+1),
    receveWaybillNumber:56,
    receveMoney:1255.00
  },
  tapclick:function(){
    console.log("今天啥也不吃")
  },
  locationClick:function(){
    wx.navigateTo({
      url: '../location/map',
    })
  }
})
