<template>
  <div>
    <div>Vbullet</div>
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
  name: 'Vbullet',
  data () {
    return {
      type: 'Vbullet',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'lowerLimit': '0',
          'upperLimit': '100',
          'numberPrefix': '$',
          'numberSuffix': 'K',
          'colorRangeFillMix': '{light}',
          'chartBottomMargin': '20',
          'theme': 'fusion'
        },
        'colorRange': {
          'color': [
            {
              'minValue': '0',
              'maxValue': '50',
              'code': '#e44a00',
              'alpha': '70'
            },
            {
              'minValue': '50',
              'maxValue': '75',
              'code': '#f2c500',
              'alpha': '70'
            },
            {
              'minValue': '75',
              'maxValue': '120',
              'code': '#1aaf5d',
              'alpha': '70'
            }
          ]
        },
        'value': '82',
        'target': '90'
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
