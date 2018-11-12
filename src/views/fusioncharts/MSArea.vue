<template>
  <div>
    <div>MSArea</div>
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
  name: 'MSArea',
  data () {
    return {
      type: 'MSArea',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Sales of Liquor',
          'subCaption': 'Previous week vs current week',
          'xAxisName': 'Day',
          'yAxisName': 'Sales (In USD)',
          'numberPrefix': '$',
          'plotFillAlpha': '60',
          'theme': 'fusion'
        },
        'categories': [
          {
            'category': [
              {
                'label': 'Mon'
              },
              {
                'label': 'Tue'
              },
              {
                'label': 'Wed'
              },
              {
                'label': 'Thu'
              },
              {
                'label': 'Fri'
              },
              {
                'label': 'Sat'
              },
              {
                'label': 'Sun'
              }
            ]
          }
        ],
        'dataset': [
          {
            'seriesname': 'Previous Week',
            'data': [
              {
                'value': '13000'
              },
              {
                'value': '14500'
              },
              {
                'value': '13500'
              },
              {
                'value': '15000'
              },
              {
                'value': '15500'
              },
              {
                'value': '17650'
              },
              {
                'value': '19500'
              }
            ]
          },
          {
            'seriesname': 'Current Week',
            'data': [
              {
                'value': '8400'
              },
              {
                'value': '9800'
              },
              {
                'value': '11800'
              },
              {
                'value': '14400'
              },
              {
                'value': '18800'
              },
              {
                'value': '24800'
              },
              {
                'value': '30800'
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
