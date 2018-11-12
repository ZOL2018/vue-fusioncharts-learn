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
    }, {
      path: '/Bar3D',
      name: 'Bar3D',
      component: () => import('@/views/fusioncharts/Bar3D')
    }, {
      path: '/BoxAndWhisker2D',
      name: 'BoxAndWhisker2D',
      component: () => import('@/views/fusioncharts/BoxAndWhisker2D')
    }, {
      path: '/Bubble',
      name: 'Bubble',
      component: () => import('@/views/fusioncharts/Bubble')
    }, {
      path: '/CandleStick',
      name: 'CandleStick',
      component: () => import('@/views/fusioncharts/CandleStick')
    }, {
      path: '/Column2D',
      name: 'Column2D',
      component: () => import('@/views/fusioncharts/Column2D')
    }, {
      path: '/Column3D',
      name: 'Column3D',
      component: () => import('@/views/fusioncharts/Column3D')
    }, {
      path: '/DoughNut2D',
      name: 'DoughNut2D',
      component: () => import('@/views/fusioncharts/DoughNut2D')
    }, {
      path: '/DoughNut3D',
      name: 'DoughNut3D',
      component: () => import('@/views/fusioncharts/DoughNut3D')
    }, {
      path: '/DragNode',
      name: 'DragNode',
      component: () => import('@/views/fusioncharts/DragNode')
    }, {
      path: '/DragArea',
      name: 'DragArea',
      component: () => import('@/views/fusioncharts/DragArea')
    }, {
      path: '/DragColumn2D',
      name: 'DragColumn2D',
      component: () => import('@/views/fusioncharts/DragColumn2D')
    }, {
      path: '/DragLine',
      name: 'DragLine',
      component: () => import('@/views/fusioncharts/DragLine')
    }, {
      path: '/ErrorBar2D',
      name: 'ErrorBar2D',
      component: () => import('@/views/fusioncharts/ErrorBar2D')
    }, {
      path: '/ErrorLine',
      name: 'ErrorLine',
      component: () => import('@/views/fusioncharts/ErrorLine')
    }, {
      path: '/ErrorScatter',
      name: 'ErrorScatter',
      component: () => import('@/views/fusioncharts/ErrorScatter')
    }, {
      path: '/Funnel',
      name: 'Funnel',
      component: () => import('@/views/fusioncharts/Funnel')
    }, {
      path: '/Gantt',
      name: 'Gantt',
      component: () => import('@/views/fusioncharts/Gantt')
    }, {
      path: '/HeatMap',
      name: 'HeatMap',
      component: () => import('@/views/fusioncharts/HeatMap')
    }, {
      path: '/HBullet',
      name: 'HBullet',
      component: () => import('@/views/fusioncharts/HBullet')
    }, {
      path: '/HLed',
      name: 'HLed',
      component: () => import('@/views/fusioncharts/HLed')
    }, {
      path: '/InverseMSArea',
      name: 'InverseMSArea',
      component: () => import('@/views/fusioncharts/InverseMSArea')
    }, {
      path: '/InverseMSColumn2D',
      name: 'InverseMSColumn2D',
      component: () => import('@/views/fusioncharts/InverseMSColumn2D')
    }, {
      path: '/InverseMSLine',
      name: 'InverseMSLine',
      component: () => import('@/views/fusioncharts/InverseMSLine')
    }, {
      path: '/KaGi',
      name: 'KaGi',
      component: () => import('@/views/fusioncharts/KaGi')
    }, {
      path: '/Line',
      name: 'Line',
      component: () => import('@/views/fusioncharts/Line')
    }, {
      path: '/LogMSColumn2D',
      name: 'LogMSColumn2D',
      component: () => import('@/views/fusioncharts/LogMSColumn2D')
    }, {
      path: '/LogMSLine',
      name: 'LogMSLine',
      component: () => import('@/views/fusioncharts/LogMSLine')
    }, {
      path: '/Marimekko',
      name: 'Marimekko',
      component: () => import('@/views/fusioncharts/Marimekko')
    }, {
      path: '/MultiAxisLine',
      name: 'MultiAxisLine',
      component: () => import('@/views/fusioncharts/MultiAxisLine')
    }, {
      path: '/MultilevelPie',
      name: 'MultilevelPie',
      component: () => import('@/views/fusioncharts/MultilevelPie')
    }, {
      path: '/Mscombidy2d',
      name: 'Mscombidy2d',
      component: () => import('@/views/fusioncharts/Mscombidy2d')
    }, {
      path: '/Mscombi2d',
      name: 'Mscombi2d',
      component: () => import('@/views/fusioncharts/Mscombi2d')
    }, {
      path: '/Mscombi3d',
      name: 'Mscombi3d',
      component: () => import('@/views/fusioncharts/Mscombi3d')
    }, {
      path: '/MSArea',
      name: 'MSArea',
      component: () => import('@/views/fusioncharts/MSArea')
    }, {
      path: '/MSBar2d',
      name: 'MSBar2d',
      component: () => import('@/views/fusioncharts/MSBar2d')
    }, {
      path: '/MSBar3d',
      name: 'MSBar3d',
      component: () => import('@/views/fusioncharts/MSBar3d')
    }, {
      path: '/MSColumn2d',
      name: 'MSColumn2d',
      component: () => import('@/views/fusioncharts/MSColumn2d')
    }, {
      path: '/MSColumn3d',
      name: 'MSColumn3d',
      component: () => import('@/views/fusioncharts/MSColumn3d')
    }, {
      path: '/MSColumn3dLinedY',
      name: 'MSColumn3dLinedY',
      component: () => import('@/views/fusioncharts/MSColumn3dLinedY')
    }, {
      path: '/MSColumnLine3d',
      name: 'MSColumnLine3d',
      component: () => import('@/views/fusioncharts/MSColumnLine3d')
    }, {
      path: '/MSLine',
      name: 'MSLine',
      component: () => import('@/views/fusioncharts/MSLine')
    }, {
      path: '/MSSpline',
      name: 'MSSpline',
      component: () => import('@/views/fusioncharts/MSSpline')
    }, {
      path: '/MSSplineArea',
      name: 'MSSplineArea',
      component: () => import('@/views/fusioncharts/MSSplineArea')
    }
  ]
})
