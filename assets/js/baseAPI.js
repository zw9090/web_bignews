
$.ajaxPrefilter(function(options) {

 options.url = 'http://127.0.0.1:3007' + options.url
 
if ( options.url.indexOf('/my/') !== -1) {
     options.headers = {
          "Authorization":localStorage.getItem('token') || ''
      }
}

options.complete = function(res){
     // console.log('执行了 complete回调');
     // console.log(res);
     const {status,message} = res.responseJSON
     if (status === 1 && message === '身份认证失败') {
          // clearToken()
          localStorage.removeItem('token')
          location.href = '/login.html'
     }
}

})
