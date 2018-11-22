<template>
  <div>
    <div>Spline</div>
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
  name: 'Spline',
  data () {
    return {
      type: 'Spline',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Total footfall in Bakersfield Central',
          'subCaption': 'Last week',
          'xAxisName': 'Day',
          'yAxisName': 'No. of Footfalls',
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
            'value': '25507'
          },
          {
            'vline': 'true',
            'lineposition': '0',
            'color': '#6baa01',
            'labelHAlign': 'left',
            'label': 'National holiday'
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
