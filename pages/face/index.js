
Page({
    data: {
    userface: ''
  },
  onLoad: function () {
  },
  //选择图片或拍照
  upload_face: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
      that.setData({
        userface : res.tempFilePaths
      })
      }
    })
  },
  //删除图片
  deleteImg: function (e) {
    var imgs = this.data.userface;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      userface: imgs
    });
  },
  // 预览图片
  previewImg: function (e) {
    //所有图片
    var imgs = this.data.userface;
    wx.previewImage({
      //当前显示图片
      current: imgs,
      //所有图片
      urls: imgs
    })
  },
  ok3: function () {

    wx.request({
      url: 'http://127.0.0.1:5000/userface',
      method: 'get',
      success(res) {
        console.log(res.data)
      }
    })

    // wx.chooseImage({
    //   success(res) {
    //     const tempFilePaths = res.tempFilePaths
    //     wx.uploadFile({
    //       url: 'http://127.0.0.1:5000/', //仅为示例，非真实的接口地址
    //       filePath: tempFilePaths[0],
    //       name: 'file',
    //       formData: {
    //         'user': 'test'
    //       },
    //       success(res) {
    //         const data = res.data
    //         //do something
    //       }
    //     })
    //   }
    // })
    /*
    wx.navigateTo({
      url: '/pages/choose/index',
    })
    */
  }
})