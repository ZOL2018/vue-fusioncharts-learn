<template>
  <div>
    <div>Line</div>
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
  name: 'Line',
  data () {
    return {
      type: 'Line',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Total footfall in Bakersfield Central',
          'subCaption': 'Last week',
          'xAxisName': 'Day',
          'yAxisName': 'No. of Visitors',
          'lineThickness': '2',
          'theme': 'fusion'
        },
        'data': [
          {
            'label': 'Mon',
            'value': '15123'
          },
          {
            'label': 'Tue',
            'value': '14233'
          },
          {
            'label': 'Wed',
            'value': '23507'
          },
          {
            'label': 'Thu',
            'value': '9110'
          },
          {
            'label': 'Fri',
            'value': '15529'
          },
          {
            'label': 'Sat',
            'value': '20803'
          },
          {
            'label': 'Sun',
            'value': '19202'
          }
        ],
        'trendlines': [
          {
            'line': [
              {
                'startvalue': '18500',
                'color': '#1aaf5d',
                'displayvalue': 'Average{br}weekly{br}footfall',
                'valueOnRight': '1',
                'thickness': '2'
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
