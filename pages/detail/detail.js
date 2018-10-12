// pages/detail/detail.js
import api from "../../utils/api.js"
import { articleCategorys } from "../../utils/conf.js"
const app = getApp()
6217001210076500741
Page({
  data: {
    a:"",
    b:"",
    article:[]
  },
  onLoad:function(options) {
    // var  a = options.a
    // var  b = options.b
    // this.setData({a:a,b:b})
    api.gets(articleCategorys + "?key=cc0853c943c31bc3ed3b08c0b11f83a3&id=2", { data: {}}).then(res=>{
      console.log(res.result)
      var result = res.result
      this.setData({article:result})
    }).catch(err=>{
      console.log("出现错误")
    })
  }
})

