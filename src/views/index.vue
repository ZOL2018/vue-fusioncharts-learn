<template>
  <div>
    <div>
      <h2>FusionCharts List Demo</h2>
    </div>
    <ol>
      <li><a @click="toIndex('/Area2D')">Area2D(default)</a></li>
      <li><a @click="toIndex('/Bar2D')">Bar2D</a></li>
      <li><a @click="toIndex('/Bar3D')">Bar3D</a></li>
      <li><a @click="toIndex('/BoxAndWhisker2D')">BoxAndWhisker2D</a></li>
      <li><a @click="toIndex('/Bubble')">Bubble</a></li>
      <li><a @click="toIndex('/CandleStick')">CandleStick</a></li>
      <li><a @click="toIndex('/Column2D')">Column2D</a></li>
      <li><a @click="toIndex('/Column3D')">Column3D</a></li>
      <li><a @click="toIndex('/DoughNut2D')">DoughNut2D</a></li>
      <li><a @click="toIndex('/DoughNut3D')">DoughNut3D</a></li>
      <li><a @click="toIndex('/DragNode')">DragNode</a></li>
      <li><a @click="toIndex('/DragArea')">DragArea</a></li>
      <li><a @click="toIndex('/DragColumn2D')">DragColumn2D</a></li>
      <li><a @click="toIndex('/DragLine')">DragLine</a></li>
      <li><a @click="toIndex('/ErrorBar2D')">ErrorBar2D</a></li>
      <li><a @click="toIndex('/ErrorLine')">ErrorLine</a></li>
      <li><a @click="toIndex('/ErrorScatter')">ErrorScatter</a></li>
      <li><a @click="toIndex('/Funnel')">Funnel</a></li>
      <li><a @click="toIndex('/Gantt')">Gantt</a></li>
      <li><a @click="toIndex('/HeatMap')">HeatMap</a></li>
      <li><a @click="toIndex('/HBullet')">HBullet</a></li>
      <li><a @click="toIndex('/HLed')">HLed</a></li>
      <li><a @click="toIndex('/InverseMSArea')">InverseMSArea</a></li>
      <li><a @click="toIndex('/InverseMSColumn2D')">InverseMSColumn2D</a></li>
      <li><a @click="toIndex('/InverseMSLine')">InverseMSLine</a></li>
      <li><a @click="toIndex('/KaGi')">KaGi</a></li>
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
</style>
