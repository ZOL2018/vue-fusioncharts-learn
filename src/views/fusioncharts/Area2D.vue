<template>
  <div>
    <div @click="toIndex()">FusionCharts List Demo</div>
    <div class="content">
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataformat="dataformat"
        :datasource="datasource"
        :containerbackgroundopacity="containerbackgroundopacity">
      </fusioncharts>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import VueFusionCharts from 'vue-fusioncharts/dist/vue-fusioncharts.js'
// import FusionCharts from 'fusioncharts'
// import charts from 'fusioncharts/fusioncharts.charts'
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
//
// Vue.use(VueFusionCharts, FusionCharts, charts, FusionTheme)
export default {
  name: 'Area2D',
  data () {
    return {
      'type': 'area2d',
      'width': '550',
      'height': '350',
      'dataformat': 'json',
      'datasource': {
        'chart': {
          'caption': 'Number of visitors in the last 3 days',
          'subCaption': 'Bakersfield Central vs Los Angeles Topanga',
          'theme': 'fusion',
          'bgAlpha': '0'
        },
        'data': [{
          'label': 'Mon',
          'value': '15123'
        }, {
          'label': 'Tue',
          'value': '14233'
        }, {
          'label': 'Wed',
          'value': '25507'
        }]
      }
    }
  },
  methods: {
    toIndex () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .content{
    width: 1000px;
    height: 600px;
  }
</style>
