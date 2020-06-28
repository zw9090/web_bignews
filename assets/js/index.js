$(function(){
     getUserinfo()
})
function getUserinfo(){
     $.ajax({
          method:'GET',
          url :'/my/userinfo',
          // headers:{
          //      "Authorization":localStorage.getItem('token') || ''
          // },
          success:function(res){
               if (res.status !== 0) {
                    return layui.layer.msg('用户获取信息失败')
               }
            renderAvatar(res.data);   
          },
          // complete:function(res){
          //      // console.log('执行了 complete回调');
          //      // console.log(res);
          //      const {status,message} = res.responseJSON
          //      if (status === 1 && message === '身份认证失败') {
          //           // clearToken()
          //           localStorage.removeItem('token')
          //           location.href = '/login.html'
          //      }
          // }
          
     })
}
function renderAvatar(user){

     const {nickname,username} = user
     const name = nickname || username
     $('#welcome').html('欢迎&nbsp;&nbsp;'+name)
     if (user.user_pic !== null) {
          $('.layui-nav-img').attr('src',user.user_pic).show()
          $('.text-avatar').hide()
     } else {
          $('.layui-nav-img').hide()
          const first = name[0].toUpperCase()
          $('.text-avatar').html(first).show()
     }
}
const layer = layui.layer
$('#btnLogout').on('click',()=>{
     // console.log('ok');
     layer.confirm('确定退出登录', {icon: 3, title:'提示'}, function(index){
          // 1.清空本地储存的token
          localStorage.removeItem('token')
          // 2.返回登录页面 
          location.href = './login.html'

          layer.close(index);
        });
     
})
