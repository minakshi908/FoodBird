
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/public/HomePage.vue') },
      { path: 'profile', component: () => import('pages/public/ProfilePage.vue') },
      { path: 'login', component: () => import('pages/public/LoginPage.vue') },
      { path: 'dine_in', component: () => import('pages/dine_in_page.vue') },
      { path: 'menu', component: () => import('pages/menu_page.vue') },
      { path: 'cart', component: () => import('pages/cart_page.vue') },
      { path: 'signup', component: () => import('pages/public/SignupFormPage.vue') },


    ]
  },
  {
    path:'/partner',
    component: ()=> import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/partner/DashboardPage.vue')},
      {path: 'category', component: () => import('pages/partner/CategoryPage.vue')},
      {path: 'dishes', component: () => import('pages/partner/DishPage.vue')},
      {path: 'orders', component: () => import('pages/partner/OrderPage.vue')},
      {path: 'restaurants', component: () => import('pages/partner/restaurants_Page.vue')},
      {path: 'restaurants_documents', component: () => import('pages/partner/restaurants_documents.vue')},
      { path: 'menu', component: () => import('pages/menu_page.vue') },

       ]

  },
  {
    path:'/management',
    component: ()=> import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/management/DashboardPage.vue')},
      {path:'restaurants', component: ()=> import('pages/management/RestaurantPage.vue')},
      {path:'restaurant/add', component: ()=> import('pages/management/RestaurantAddPage.vue')},
      {path:'restaurant/:id', component: ()=> import('pages/management/RestaurantSinglePage.vue'), props:true},
      {path: 'category', component: () => import('pages/management/CategoryPage.vue')},
      {path: 'dishes', component: () => import('pages/management/DishPage.vue')},
      {path: 'orders', component: () => import('pages/management/OrderPage.vue')},
    ]

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
