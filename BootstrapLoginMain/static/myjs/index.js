$(document).ready(function() {
   // alert($(".sidebar li").length)
    $(".sidebar li:not(.treeview) a").click(function (aaa) {
        var thisHref=$(this).attr("id");//URL
        if(thisHref!=null){//没有url的时候不加载
            $(".content-wrapper").mLoading("show"); //开始显示load效果
            $.ajax( {
                url: thisHref, //这里是静态页的地址
                type: "GET", //静态页用get方法，否则服务器会抛出405错误
                success: function(data){
                    $("#pageContent").html(data);//加载到div里面显示
                    //alert("加载完成！")
                    $(".content-wrapper").mLoading("hide"); //隐藏load效果
                }
            });
        }

    })
});