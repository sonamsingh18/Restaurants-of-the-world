import header from './component/header.vue';
import registration from './component/registration.vue';
import restaurant from './component/restaurant/restaurant.vue';
import resetpassword from './component/resetpassword.vue';
import login from './component/login.vue';

export const routes=[
    {path:'/header',name:'header',component:header},
    {path:'/registration',name:'registration',component:registration},
    {path:'/resetpassword',name:'resetpassword',component:resetpassword},
    {path:'/',name:'login',component:login},
    {path:'/restaurant',name:'restaurant',component:restaurant}
];