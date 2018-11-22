<template>
  <div>
    <div>
      <h2>FusionCharts List Demo <a @click="toIndex('/random')">random</a></h2>
    </div>
    <ol>
      <div class="float-left">
        <li><a @click="toIndex('/Area2D')">Area2D(default)</a></li>
        <li><a @click="toIndex('/Bar2D')">Bar2D</a></li>
        <li><a @click="toIndex('/Bar3D')">Bar3D</a></li>
        <li><a @click="toIndex('/BoxAndWhisker2D')">BoxAndWhisker2D</a></li>
        <li><a @click="toIndex('/Bubble')">Bubble</a></li>
      </div>
      <div class="float-left">
      <li><a @click="toIndex('/CandleStick')">CandleStick</a></li>
      <li><a @click="toIndex('/Column2D')">Column2D</a></li>
      <li><a @click="toIndex('/Column3D')">Column3D</a></li>
      <li><a @click="toIndex('/DoughNut2D')">DoughNut2D</a></li>
      <li><a @click="toIndex('/DoughNut3D')">DoughNut3D</a></li>
      </div>
      <div class="float-left">
      <li><a @click="toIndex('/DragNode')">DragNode</a></li>
      <li><a @click="toIndex('/DragArea')">DragArea</a></li>
      <li><a @click="toIndex('/DragColumn2D')">DragColumn2D</a></li>
      <li><a @click="toIndex('/DragLine')">DragLine</a></li>
      <li><a @click="toIndex('/ErrorBar2D')">ErrorBar2D</a></li>
      </div>
      <div class="float-left">
      <li><a @click="toIndex('/ErrorLine')">ErrorLine</a></li>
      <li><a @click="toIndex('/ErrorScatter')">ErrorScatter</a></li>
      <li><a @click="toIndex('/Funnel')">Funnel</a></li>
      <li><a @click="toIndex('/Gantt')">Gantt</a></li>
      <li><a @click="toIndex('/HeatMap')">HeatMap</a></li>
      </div>
      <div class="float-left">
      <li><a @click="toIndex('/HBullet')">HBullet</a></li>
      <li><a @click="toIndex('/HLed')">HLed</a></li>
      <li><a @click="toIndex('/InverseMSArea')">InverseMSArea</a></li>
      <li><a @click="toIndex('/InverseMSColumn2D')">InverseMSColumn2D</a></li>
      <li><a @click="toIndex('/InverseMSLine')">InverseMSLine</a></li>
      </div>
      <div class="float-left">
      <li><a @click="toIndex('/KaGi')">KaGi</a></li>
      <li><a @click="toIndex('/Line')">Line</a></li>
      <li><a @click="toIndex('/LogMSColumn2D')">LogMSColumn2D</a></li>
      <li><a @click="toIndex('/LogMSLine')">LogMSLine</a></li>
      <li><a @click="toIndex('/Marimekko')">Marimekko</a></li>
      </div>
      <div class="float-left">
      <li><a @click="toIndex('/MultiAxisLine')">MultiAxisLine</a></li>
      <li><a @click="toIndex('/MultilevelPie')">MultilevelPie</a></li>
      <li><a @click="toIndex('/Mscombidy2d')">Mscombidy2d</a></li>
      <li><a @click="toIndex('/Mscombi2d')">Mscombi2d</a></li>
      <li><a @click="toIndex('/Mscombi3d')">Mscombi3d</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/MSArea')">MSArea</a></li>
        <li><a @click="toIndex('/MSBar2d')">MSBar2d</a></li>
        <li><a @click="toIndex('/MSBar3d')">MSBar3d</a></li>
        <li><a @click="toIndex('/MSColumn2d')">MSColumn2d</a></li>
        <li><a @click="toIndex('/MSColumn3d')">MSColumn3d</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/MSColumn3dLinedY')">MSColumn3dLinedY</a></li>
        <li><a @click="toIndex('/MSColumnLine3d')">MSColumnLine3d</a></li>
        <li><a @click="toIndex('/MSLine')">MSLine</a></li>
        <li><a @click="toIndex('/MSSpline')">MSSpline</a></li>
        <li><a @click="toIndex('/MSSplineArea')">MSSplineArea</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/MSStackedColumn2d')">MSStackedColumn2d</a></li>
        <li><a @click="toIndex('/MSStackedColumn2dLinedY')">MSStackedColumn2dLinedY</a></li>
        <li><a @click="toIndex('/OverLappedColumn2d')">OverLappedColumn2d</a></li>
        <li><a @click="toIndex('/OverLappedBar2d')">OverLappedBar2d</a></li>
        <li><a @click="toIndex('/Pareto2d')">Pareto2d</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/Pareto3d')">Pareto3d</a></li>
        <li><a @click="toIndex('/Pie2d')">Pie2d</a></li>
        <li><a @click="toIndex('/Pie3d')">Pie3d</a></li>
        <li><a @click="toIndex('/Pyramid')">Pyramid</a></li>
        <li><a @click="toIndex('/Radar')">Radar</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/AngulArgauge')">AngulArgauge</a></li>
        <li><a @click="toIndex('/RealTimeArea')">RealTimeArea</a></li>
        <li><a @click="toIndex('/Bulb')">Bulb</a></li>
        <li><a @click="toIndex('/RealTimeColumn')">RealTimeColumn</a></li>
        <li><a @click="toIndex('/Cylinder')">Cylinder</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/HLinearGauge')">HLinearGauge</a></li>
        <li><a @click="toIndex('/RealTimeLine')">RealTimeLine</a></li>
        <li><a @click="toIndex('/RealTimeLineDy')">RealTimeLineDy</a></li>
        <li><a @click="toIndex('/RealTimeStackedArea')">RealTimeStackedArea</a></li>
        <li><a @click="toIndex('/RealTimeStackedColumn')">RealTimeStackedColumn</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/Thermometer')">Thermometer</a></li>
        <li><a @click="toIndex('/Scatter')">Scatter</a></li>
        <li><a @click="toIndex('/ScrollArea2d')">ScrollArea2d</a></li>
        <li><a @click="toIndex('/ScrollColumn2d')">ScrollColumn2d</a></li>
        <li><a @click="toIndex('/ScrollCombidy2d')">ScrollCombidy2d</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/ScrollCombi2d')">ScrollCombi2d</a></li>
        <li><a @click="toIndex('/ScrollLine2d')">ScrollLine2d</a></li>
        <li><a @click="toIndex('/ScrollStackedColumn2d')">ScrollStackedColumn2d</a></li>
        <li><a @click="toIndex('/SelectScatter')">SelectScatter</a></li>
        <li><a @click="toIndex('/Spline')">Spline</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/SplineArea')">SplineArea</a></li>
        <li><a @click="toIndex('/SparkColumn')">SparkColumn</a></li>
        <li><a @click="toIndex('/SparkLine')">SparkLine</a></li>
        <li><a @click="toIndex('/SparkWinloss')">SparkWinloss</a></li>
        <li><a @click="toIndex('/StackedColumn2dLine')">StackedColumn2dLine</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/StackedColumn3dLine')">StackedColumn3dLine</a></li>
        <li><a @click="toIndex('/StackedArea2d')">StackedArea2d</a></li>
        <li><a @click="toIndex('/StackedBar2d')">StackedBar2d</a></li>
        <li><a @click="toIndex('/StackedBar3d')">StackedBar3d</a></li>
        <li><a @click="toIndex('/StackedColumn2d')">StackedColumn2d</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/StackedColumn3d')">StackedColumn3d</a></li>
        <li><a @click="toIndex('/StackedColumn3dLinedy')">StackedColumn3dLinedy</a></li>
        <li><a @click="toIndex('/MsstepLine')">MsstepLine</a></li>
        <li><a @click="toIndex('/TreeMap')">TreeMap</a></li>
        <li><a @click="toIndex('/Vbullet')">Vbullet</a></li>
      </div>
      <div class="float-left">
        <li><a @click="toIndex('/Vled')">Vled</a></li>
        <li><a @click="toIndex('/Waterfall2d')">Waterfall2d</a></li>
        <li><a @click="toIndex('/ZoomLine')">ZoomLine</a></li>
        <li><a @click="toIndex('/ZoomLineDy')">ZoomLineDy</a></li>
        <li><a @click="toIndex('/ZoomScatter')">ZoomScatter</a></li>
      </div>
    </ol>
   </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    toIndex (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: underline;
  }
  a:hover{
    cursor: pointer;
  }
  .float-left{
    float: left;
    width: 300px;
    height: 120px;
  }
</style>
