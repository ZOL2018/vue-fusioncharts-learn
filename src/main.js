// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import vue-fusioncharts and fusioncharts
import VueFusionCharts from 'vue-fusioncharts/dist/vue-fusioncharts.js'
import FusionCharts from 'fusioncharts'
import charts from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
FusionCharts.options.creditLabel = false
Vue.use(VueFusionCharts, FusionCharts, charts, FusionTheme)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
