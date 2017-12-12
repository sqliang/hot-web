/**
 * @file index 启动js
 * @author sqliang
 */
import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import App from './app';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
	el: '#app',
	  template: '<App/>',
	components: { App }
});


// Raven.config('https://7730bdb525604d558c99fd46d5c16e2b@sentry.io/254033')
// 	.addPlugin(RavenVue, Vue)
// 	.install();

// Raven.context(function() {
// 	Vue.use(iView);
// 	new Vue({
// 		el: '#app',
// 	  	template: '<App/>',
// 		components: { App }
// 	});
// });