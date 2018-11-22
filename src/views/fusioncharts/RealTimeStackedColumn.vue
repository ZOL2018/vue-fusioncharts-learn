<template>
  <div>
    <div>RealTimeStackedColumn</div>
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
  name: 'RealTimeStackedColumn',
  data () {
    return {
      type: 'RealTimeStackedColumn',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Live Visitors on Site',
          'subCaption': 'Every 5 seconds',
          'xAxisName': 'Time',
          'yAxisName': 'No. of visitors',
          'refreshinterval': '5',
          'numberSuffix': 's',
          'yaxisminvalue': '0',
          'yaxismaxvalue': '60',
          'numdisplaysets': '10',
          'labeldisplay': 'rotate',
          'showValues': '1',
          'showRealTimeValue': '0',
          'placeValuesInside': '1',
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
              }
            ]
          },
          {
            'seriesName': 'food.hsm.com',
            'data': [
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
