//将接口请求功能保存
var user={
    //登录请求参数
login:function(obj){
    $.ajax({
        type:'post',
        url:LOGIN,
        data:{
            user_name:obj.data.username,
            password:obj.data.password
        },
        success:function (res) {
            if (res.code===200) {
                obj.success();
            }else{
                obj.fail();
            }
        }
    })
},
    //退出请求参数
logout:function (obj) {
    $.ajax({
        type:'post',
        url:LOGOUT,
        success:function(res) {
            if (res.code===200) {
                obj.success();
            }else{
                obj.fail();
            }
        }
    })


}

};