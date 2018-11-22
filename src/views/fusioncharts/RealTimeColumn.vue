<template>
  <div>
    <div>RealTimeColumn</div>
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
  name: 'RealTimeColumn',
  data () {
    return {
      type: 'RealTimeColumn',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Online Transactions per 10 seconds',
          'subCaption': 'HarrysSupermart.com',
          'showrealtimevalue': '1',
          'yaxismaxvalue': '10',
          'numdisplaysets': '10',
          'labeldisplay': 'rotate',
          'slantLabels': '1',
          'showLegend': '0',
          'numbersuffix': ' Transactions',
          'showRealTimeValue': '0',
          'theme': 'fusion'
        },
        'categories': [
          {
            'category': [
              {
                'label': 'Start'
              }
            ]
          }
        ],
        'dataset': [
          {
            'seriesname': '',
            'alpha': '100',
            'data': [
              {
                'value': '12'
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
