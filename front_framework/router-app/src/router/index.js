import Vue from 'vue'
import Router from 'vue-router'
import vSelect from 'vue-select'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import mainPage from '@/components/Main'
import restSearch from '@/components/restSearch'


Vue.use(Router)
Vue.use(BootstrapVue)
Vue.component('v-select', vSelect)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    }
  ]
})
