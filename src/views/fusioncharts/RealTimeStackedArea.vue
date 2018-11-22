<template>
  <div>
    <div>RealTimeStackedArea</div>
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
  name: 'RealTimeStackedArea',
  data () {
    return {
      type: 'RealTimeStackedArea',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Live Visitors on Site',
          'subCaption': 'Updated every 5 seconds',
          'xAxisName': 'Time',
          'yAxisName': 'No. of visitors',
          'numberSuffix': 's',
          'refreshinterval': '5',
          'yaxisminvalue': '0',
          'yaxismaxvalue': '60',
          'numdisplaysets': '10',
          'labeldisplay': 'rotate',
          'showRealTimeValue': '0',
          'theme': 'fusion'
        },
        'categories': [
          {
            'category': [
              {
                'label': 'Day Start'
              }
            ]
          }
        ],
        'dataset': [
          {
            'seriesName': 'clothing.hsm.com',
            'data': [
              {
                'value': '12'
              },
              {
                'value': '12'
              }
            ]
          },
          {
            'seriesName': 'food.hsm.com',
            'data': [
              {
                'value': '20'
              },
              {
                'value': '20'
              }
            ]
          }
        ]
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
