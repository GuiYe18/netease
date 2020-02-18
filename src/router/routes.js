import Cart from '../pages/Cart/Cart'
import Home from '../pages/Home/Home'
import Item from '../pages/Item/Item'
import Personal from '../pages/Personal/Personal'
import Topic from '../pages/Topic/Topic'
export default[
    // {
    //     path:'路由路径',
    //     component:'路由组件'
    // }
    {
        path: '/cart',
        component: Cart
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/item',
        component: Item
      },
      {
        path: '/personal',
        component: Personal
      },
      {
        path: '/topic',
        component: Topic
      },
      {
        path: '/',
        redirect: '/home' //路由重定向
      },
]