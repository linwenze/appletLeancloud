//app.js
import AV from 'libs/av-weapp-min.js';
App({
  onLaunch: function () {
    console.log(AV)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    AV.init({
      appId: "ocM10xPmOt0SY9f9iinPawAK-gzGzoHsz",
      appKey: "QKcfkkiI7dzzbeWHnKUYBro8",
      serverURLs: "https://ocm10xpm.lc-cn-n1-shared.com",
    });
    // // 声明 class
    // var Todo = AV.Object.extend('test');

    // // 构建对象
    // var todo = new Todo();

    // // 为属性赋值
    // todo.set('title', '工程师周会');
    // todo.set('content', '周二两点，全体成员');

    // // 将对象保存到云端
    // todo.save().then(function (todo) {
    //   // 成功保存之后，执行其他逻辑
    //   console.log('保存成功。objectId：' + todo.id);
    // }, function (error) {
    //   // 异常处理
    // });
  },
  globalData: {
    userInfo: null
  }
})