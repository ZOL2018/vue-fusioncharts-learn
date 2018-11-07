<template>
  <div>
    <div>HBullet</div>
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
  name: 'HBullet',
  data () {
    return {
      type: 'hbullet',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'lowerLimit': '0',
          'upperLimit': '100',
          'caption': 'Monthly Revenue',
          'subcaption': 'Actual vs Target<br>Bakersfield Central',
          'numberPrefix': '$',
          'numberSuffix': 'K',
          'targetColor': '#8e0000',
          'showHoverEffect': '1',
          'colorRangeFillMix': '{light+0}',
          'valuePadding': '7',
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
