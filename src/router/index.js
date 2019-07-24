import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login';
import Chat from '../components/Chat';
import ResetPassword from '../components/ResetPassword';
import Register from '../components/Register';
import store from '../store'
import { GET_LOGINED } from '../store/storeGetterKey'

Vue.use(Router)

let r = new Router({
  routes: [
    {
      path: "/",
      redirect: "/chat"
    },
    {
      path: "/login",
      name: "Login",
      component: Login // 登录
    }, 
    {
      path: "/chat",
      name: "Chat",
      component: Chat  // 聊天
    },
     {
       path: "/resetPassword",
       name: "ResetPassword",
       component: ResetPassword // 忘记密码
     }, 
     {
       path: "/register",
       name: "Register",
       component: Register // 注册
     }
  ]
})

// 全局守卫 判断是否登录
r.beforeEach((to,from, next) => {
  if (~to.path.indexOf("/login")) {
    next()
    return
  }

  let isNeedLogin = ~to.path.indexOf("/chat")
  if (!isNeedLogin) { // 先判断to是否需要登录
    next()
    return
  }
  let isLogined = store.getters[GET_LOGINED]
  console.log("isLogined:" + isLogined)
  if (isLogined) { // 是否已经登录
    next()
    return
  }

  // 本地是否有token
  let tokenKey = "localStorageTokenKey"
  let token = localStorage.getItem(tokenKey)
  if (!token) {
    next("/login")
    return
  }

   // 去验证token是否有效
   let valiToken = true 
   if (valiToken) {
     next()
     return
   } else { // token验证不通过
     next("/login")
   }

}) 

export default r


