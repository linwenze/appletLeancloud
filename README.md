### 下载小程序SDK的av-weapp-min.js文件
1.  小程序SDK下载地址[https://leancloud.cn/docs/sdk_setup-js.html#hash1620893804](https://leancloud.cn/docs/sdk_setup-js.html#hash1620893804 "https://leancloud.cn/docs/sdk_setup-js.html#hash1620893804")

2.  把av-weapp-min.js放到libs文件夹下
3. 配置应用的APPID（存储-设置-应用Keys下）

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
        })    
		},globalData: {userInfo: null }
		})

