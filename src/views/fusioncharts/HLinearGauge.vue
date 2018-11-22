<template>
  <div>
    <div>HLinearGauge</div>
    <div class="content">
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource">
      </fusioncharts>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HLinearGauge',
  data () {
    return {
      type: 'HLinearGauge',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Server CPU Utilization',
          'subcaption': 'food.hsm.com',
          'lowerLimit': '0',
          'upperLimit': '100',
          'numberSuffix': '%',
          'valueAbovePointer': '0',
          'showShadow': '0',
          'gaugeFillMix': '{light}',
          'theme': 'fusion'
        },
        'colorRange': {
          'color': [
            {
              'minValue': '0',
              'maxValue': '35',
              'label': 'Low',
              'code': '#1aaf5d'
            },
            {
              'minValue': '35',
              'maxValue': '70',
              'label': 'Moderate',
              'code': '#f2c500'
            },
            {
              'minValue': '70',
              'maxValue': '100',
              'label': 'High',
              'code': '#c02d00'
            }
          ]
        },
        'pointers': {
          'pointer': [
            {
              'value': '52.5'
            },
            {
              'value': '22.5'
            }
          ]
        }
      }
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
