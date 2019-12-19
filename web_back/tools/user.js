//将接口请求功能保存
var user={
    //登录请求参数
login:function(obj){
    $.ajax({
        type:'post',//请求方式
        url:LOGIN,//url地址
        data:{//发给服务器的请求参数
            //请求的参数名:obj传入的对象.属性.属性名
            user_name:obj.data.username,
            password:obj.data.password
        },
        // 响应回来的数据
        success:function (res) {
            // 判断是否响应成功code=200
            if (res.code===200) {
                // 成功则调用形参里面的成功函数
                obj.success();
            }else{
                // 不成功则调用形参里面的失败函数
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
},
    //主页用户信息请求参数
getUser:function (obj) {
    $.ajax({
        type:'get',
        url:GETUSER,
        success:function (res) {
            if (res.code===200) {
                obj.success(res);
            }
        }
    })
},
    //个人中心获取用户信息请求参数
get_User:function (obj) {
    $.ajax({
        type:'get',
        url:GET_USER,
        success:function(res){
            if (res.code===200) {
                obj.success(res);
            }  
        }
    })
},
    //个人中心编辑用户信息请求参数
get_Edit:function (obj) {
    $.ajax({
        type:'post',
        url:GETEDIT,
        data:obj.data,
        contentType:false,
        processData:false,
        success:function(res){
            if (res.code===200) {
                obj.success();
            }
        }
    })
},
    //文章分类获取请求参数
search:function (obj) {
    $.ajax({
        url:SEARCH,
        success:function(res){
            if (res.code===200) {
                obj.success(res);
            }
        }
    })
},
    //文章分类提交编辑请求参数
edit:function (obj) {
    $.ajax({
        type:'post',
        url:EDIT,
        data:obj.data,
        success:function(res){
            if (res.code===200) {
                obj.success();
            }else{
                obj.fail();
            }
        }
    })
},
    //文章分类删除按钮请求参数
delete:function (obj) {
    $.ajax({
        type:'post',
        url:DELETE,
        data:{id:obj.data},
        success:function(res){
            if (res.code===200) {
                obj.success();
            }
        }
    })
},
publish:function (obj) {
    $.ajax({
        type:'post',
        url:PUBLISH,
        data:obj.data,
        contentType:false,
        processData:false,
        success:function (res) {
            if(res.code===201){
                obj.success();
            }else{
               obj.fail();
            }
        }
    })
}
};
