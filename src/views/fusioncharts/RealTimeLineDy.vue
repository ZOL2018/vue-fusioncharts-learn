<template>
  <div>
    <div>RealTimeLineDy</div>
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
  name: 'RealTimeLineDy',
  data () {
    return {
      type: 'RealTimeLineDy',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Stock Price Monitor',
          'subCaption': "Harry's Supermart",
          'showRealTimeValue': '0',
          'numberprefix': '$',
          'setadaptiveymin': '1',
          'setadaptivesymin': '1',
          'xaxisname': 'Time',
          'labeldisplay': 'Rotate',
          'slantlabels': '1',
          'pyaxisminvalue': '35',
          'pyaxismaxvalue': '36',
          'syaxisminvalue': '10000',
          'syaxismaxvalue': '12000',
          'numDisplaySets': '10',
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
            'seriesname': 'HRYS Price',
            'showvalues': '0',
            'data': [
              {
                'value': '35.1'
              }
            ]
          },
          {
            'seriesname': 'NYSE Index',
            'showvalues': '0',
            'parentyaxis': 'S',
            'data': [
              {
                'value': '10962.87'
              }
            ]
          }
        ],
        'trendlines': [
          {
            'line': [
              {
                'parentyaxis': 'P',
                'startvalue': '35.1',
                'displayvalue': 'Open',
                'thickness': '1',
                'color': '#0075c2',
                'dashed': '1'
              },
              {
                'parentyaxis': 'S',
                'startvalue': '10962.87',
                'displayvalue': 'Open',
                'thickness': '1',
                'color': '#1aaf5d',
                'dashed': '1'
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
