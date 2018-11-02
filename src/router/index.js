import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

// fusioncharts demo
// 必须引入 vue-fusioncharts 和 fusioncharts
import VueFusionCharts from 'vue-fusioncharts'
import FusionCharts from 'fusioncharts/core'
// 可选，引入扁平画主题
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'
// map
// import FusionMaps from 'fusioncharts/maps'
// import World from 'fusioncharts/maps/es/fusioncharts.world'

// 想显示图形，必须引入图形类型模块。
// 比如饼状图如下
import Pie2D from 'fusioncharts/viz/pie2d'
// import Area2D from '@/views/fusioncharts/Area2D/2d'
Vue.use(Router)
// 去除 水印
FusionCharts.options.creditLabel = false
Vue.use(VueFusionCharts, FusionCharts, FusionTheme, Pie2D) // 添加多个类型图形，就在后面添加上。

export default new Router({
  routes: [
    {
      path: '',
      name: 'Index',
      component: Index
    },
    {
      path: '/Area2D',
      name: 'Area2D',
      component: () => import('@/views/fusioncharts/Area2D')
    },
    {
      path: '/Bar2D',
      name: 'Bar2D',
      component: () => import('@/views/fusioncharts/Bar2D')
    }
  ]
})
