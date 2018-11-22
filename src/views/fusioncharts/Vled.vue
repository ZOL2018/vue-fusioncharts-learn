<template>
  <div>
    <div>Vled</div>
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
  name: 'Vled',
  data () {
    return {
      type: 'Vled',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Customer score',
          'lowerLimit': '0',
          'upperLimit': '100',
          'lowerLimitDisplay': 'Bad',
          'upperLimitDisplay': 'Good',
          'numberSuffix': '%',
          'tickMarkDistance': '5',
          'alignCaptionWithCanvas': '1',
          'captionAlignment': 'center',
          'theme': 'fusion'
        },
        'colorRange': {
          'color': [
            {
              'minValue': '0',
              'maxValue': '45',
              'code': '#8e0000'
            },
            {
              'minValue': '45',
              'maxValue': '75',
              'code': '#f2c500'
            },
            {
              'minValue': '75',
              'maxValue': '100',
              'code': '#1aaf5d'
            }
          ]
        },
        'value': '92'
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
