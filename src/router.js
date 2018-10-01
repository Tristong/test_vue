import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/home/Home.vue';
import AboutUs from './components/aboutUs/AboutUs.vue';
import ContactUs from './components/contactUs/ContactUs.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/aboutUs', component: AboutUs },
  { path: '/contactUs', component: ContactUs },
];

export default new VueRouter({
  routes,
});
