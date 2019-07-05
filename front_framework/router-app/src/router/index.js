import Vue from 'vue'
import Router from 'vue-router'
import vSelect from 'vue-select'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import mainPage from '@/components/Main'
import restSearch from '@/components/restSearch'
import myRestaurantpage from '@/components/restaurantPage'
import VueRouter from 'vue-router';

Vue.use(BootstrapVue)
Vue.component('v-select', vSelect)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component:mainPage,
      props: true
    },

    {
      path: '/restSearch/:restaurants',
      name: 'restSearch',
      component:restSearch,
    }

    ,
    {
      path: '/RestaurantPage',
      name: 'RestaurantPage',
      component:myRestaurantpage,
      props:true
    }
  ]
})
