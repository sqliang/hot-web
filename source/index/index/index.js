/**
 * @file index 启动js
 * @author sqliang
 */
import Vue from 'vue';
import App from './app';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});