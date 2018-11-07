<template>
  <div>
    <div>InverseMSArea</div>
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
  name: 'InverseMSArea',
  data () {
    return {
      type: 'InverseMSArea',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Daily bounce rate',
          'subCaption': 'Last week',
          'xAxisName': 'Day',
          'yAxisName': 'Percentage',
          'numberSuffix': '%',
          'plotFillAlpha': '50',
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
            'seriesname': 'food.hsm.com',
            'data': [
              {
                'value': '27'
              },
              {
                'value': '22'
              },
              {
                'value': '25'
              },
              {
                'value': '27'
              },
              {
                'value': '21'
              },
              {
                'value': '29'
              },
              {
                'value': '22'
              }
            ]
          },
          {
            'seriesname': 'cloth.hsm.com',
            'data': [
              {
                'value': '42'
              },
              {
                'value': '38'
              },
              {
                'value': '39'
              },
              {
                'value': '36'
              },
              {
                'value': '43'
              },
              {
                'value': '44'
              },
              {
                'value': '35'
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
