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
}
};