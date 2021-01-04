
import store from 'src/store/store'

const routes = [
  {
    path: '/',
    
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/dashboard', component: () => import('pages/DashBoard.vue'),
        beforeEnter:(to,from,next)=>{
         if(store.state.userDetails=={})
          next('')
         else
          next()
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
