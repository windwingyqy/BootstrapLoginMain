--
1：使用ajax加载主页的内容框，加载动画使用jquery.mloading.js
使用方法，指定对应的元素show和hide
$(".content-wrapper").mLoading("show"); //开始显示load效果
$(".content-wrapper").mLoading("hide"); //隐藏load效果

2:通知插件使用 toastr,官网http://codeseven.github.io/toastr/
1 //常规消息提示，默认背景为浅蓝色
 toastr.info("你有新消息了!");
 2 //成功消息提示，默认背景为浅绿色
 toastr.success("你有新消息了!");
 3 //警告消息提示，默认背景为橘黄色
 toastr.warning("你有新消息了!");
 4 //错误消息提示，默认背景为浅红色
 toastr.error("你有新消息了!");
 5 //带标题的消息框
 toastr.success("你有新消息了!","消息提示");
 6 //另一种调用方法
 toastr["info"]("你有新消息了!","消息提示");

toastr.options = {
        closeButton: false,
        debug: false,
        progressBar: true,
        positionClass: "toast-bottom-center",
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "2000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };

 onclick，点击消息框自定义事件
 showDuration: “300”，显示动作时间
 hideDuration: “1000”，隐藏动作时间
 timeOut: “2000”，自动关闭超时时间
 extendedTimeOut: “1000”
 showEasing: “swing”,
 hideEasing: “linear”,
 showMethod: “fadeIn” 显示的方式，和jquery相同
 hideMethod: “fadeOut” 隐藏的方式，和jquery相同

 toast-top-left  顶端左边
 toast-top-right    顶端右边
 toast-top-center  顶端中间
 toast-top-full-width 顶端，宽度铺满整个屏幕
 toast-botton-right
 toast-bottom-left
 toast-bottom-center
 toast-bottom-full-width