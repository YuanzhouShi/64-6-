"use strict";

$(function () {
  $(window).on("resize", function () {
    /* 获取窗口的宽度 */
    var clientW = $(window).width();
    /* 设置临界点 */

    var isShowBigImg = clientW >= 768; //获取所有的item

    var allItem = $(".carousel-inner>.item"); //遍历

    allItem.each(function (index, item) {
      // console.log(item)
      //取出图片路径
      var src = isShowBigImg ? $(item).data("lg-img") : $(item).data("sm-img");
      var imgUrl = "url(".concat(src, ")"); //设置背景

      $(item).css({
        backgroundImage: imgUrl
      }); //创建img标签

      if (!isShowBigImg) {
        var imgEle = "<img src=\"".concat(src, "\">");
        $(item).empty().append(imgEle);
      } else {
        $(item).empty();
      }
    });
  }).trigger("resize");
});