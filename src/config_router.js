export function configRouter(router){
  router.map({
    '/login':{
      name:'login',
      title:'登录',
      component:(resolve)=>require(['./components/login/login.vue'],resolve)
    }
  }
  )
}

