//这个文件中保存一些网络中的配置
//我用来放置所有的接口地址


//基地址变量保存
var BASE_URL='http://localhost:8000/';
// 后续接口拼接即可
var LOGIN=BASE_URL+'admin/login';//登录url
var LOGOUT=BASE_URL+'admin/logout';//退出url
var GETUSER=BASE_URL+'admin/getuser';//用户信息url
var GET_USER=BASE_URL+'admin/userinfo_get';//个人中心获取用户信息url
var GETEDIT=BASE_URL+'admin/userinfo_edit';//个人中心编辑信息url
var SEARCH=BASE_URL+'admin/category_search';//文章分类获取url
var EDIT=BASE_URL+'admin/category_edit';//文章分类提交编辑url
var DELETE=BASE_URL+'admin/category_delete';//文章分类删除按钮url

