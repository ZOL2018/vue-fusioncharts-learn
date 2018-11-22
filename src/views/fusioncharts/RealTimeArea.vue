<template>
  <div>
    <div>RealTimeArea</div>
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
  name: 'RealTimeArea',
  data () {
    return {
      type: 'RealTimeArea',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Real-time stock price monitor',
          'subCaption': "Harry's SuperMart",
          'xAxisName': 'Time',
          'yAxisName': 'Stock Price',
          'numberPrefix': '$',
          'refreshinterval': '5',
          'yaxisminvalue': '35',
          'yaxismaxvalue': '36',
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
            'data': [
              {
                'value': '55.27'
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
