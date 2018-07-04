$(document).ready(function() {
    toastr.options = {
        closeButton: false,
        debug: false,
        progressBar: true,
        positionClass: "toast-bottom-right",
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

    $("#subMitBtn").click(function () {
        if($("#userName").val()!=""&&$("#inputPassword").val()!=""){
            toastr.success('登录成功！');
            // window.location.href='index2.html';
        }
        else{
            toastr.error('用户名密码错误！');
        }
    })
});