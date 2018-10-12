//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    itemData: [
      { itemImg:"../../img/hz_company.png",itemText:"合作公司"},
      { itemImg: "../../img/bank_card.png", itemText: "我的银行卡" },
      { itemImg: "../../img/help.png", itemText: "帮助中心" },
      { itemImg: "../../img/email.png", itemText: "意见反馈" },
      { itemImg: "../../img/setup.png", itemText: "设置" },
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh();
  },
  onReachBottom:function(){
    console.log("55566")
  },
  clickItem:function(e) {
    var a = e.currentTarget.dataset.no
    console.log(a);
    wx.navigateTo({
      url: '../detail/detail?a=1&b=2',
    })
  }
})
