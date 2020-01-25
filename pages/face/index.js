
Page({
    data: {
    tempFilePaths: ''
  },
  onLoad: function () {
  },
  upload_face: function () {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://127.0.0.1:5000/', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
          }
        })
      }
    })
  },
  ok3: function () {
    wx.navigateTo({
      url: '/pages/choose/index',
    })
  }
})