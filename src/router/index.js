import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import ('../views/home/Home.vue')
const Login = () =>import ('../views/login/Login.vue')
const Mall = () =>import ('../views/mall/Mall.vue')
const Profile = () => import ('../views/profile/Profile.vue')
const Search = () => import ('../views/serach/Serach.vue')
const Star = () =>import ('../views/star/Star.vue')


Vue.use(VueRouter)

const routes = [
 {
  path:'',
  component:Home
 },
 {
  path:'/home',
  component:Home
 },
 {
  path:'/login',
  component:Login
 },
 {
  path:'/mall',
  component:Mall
 },
 {
  path:'/profile',
  component:Profile
 },
 {
  path:'/search',
  component:Search
 },
 {
  path:'/star',
  component:Star
 },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default router
