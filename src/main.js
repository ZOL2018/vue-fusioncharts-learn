// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import vue-fusioncharts and fusioncharts
import VueFusionCharts from 'vue-fusioncharts/dist/vue-fusioncharts.js'
import FusionCharts from 'fusioncharts'
// base
import charts from 'fusioncharts/fusioncharts.charts'
// BoxAndWhisker2D CandleStick DragNode DragArea DragColumn2D DragLine ErrorBar2D ErrorLine ErrorScatter HeatMap

import powercharts from 'fusioncharts/fusioncharts.powercharts'
// Funnel HBullet
import widgets from 'fusioncharts/fusioncharts.widgets'
// import ssgrid from 'fusioncharts/fusioncharts.ssgrid'
// import treemap from 'fusioncharts/fusioncharts.treemap'
// overlappedbar2d
import overlappedbar2d from 'fusioncharts/fusioncharts.overlappedbar2d'
// import msstackedcolumn2dsplinedy from 'fusioncharts/fusioncharts.msstackedcolumn2dsplinedy'
// import maps from 'fusioncharts/fusioncharts.maps'
// Gantt
import gantt from 'fusioncharts/fusioncharts.gantt'
// overlappedcolumn2d
import overlappedcolumn2d from 'fusioncharts/fusioncharts.overlappedcolumn2d'
// import vml from 'fusioncharts/fusioncharts.vml'
// import zoomline from 'fusioncharts/fusioncharts.zoomline'
// import zoomscatter from 'fusioncharts/fusioncharts.zoomscatter'
// if test all types need to import all one by one
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
FusionCharts.options.creditLabel = false
Vue.use(VueFusionCharts, FusionCharts, charts, powercharts, widgets, gantt, overlappedbar2d, overlappedcolumn2d, FusionTheme)
// Vue.use(VueFusionCharts, FusionCharts, charts, widgets, gantt, FusionTheme)
// Vue.use(VueFusionCharts, FusionCharts, charts, gantt, FusionTheme)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
