<template>
  <div>
    <div>MSColumn3d</div>
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
  name: 'MSColumn3d',
  data () {
    return {
      type: 'MSColumn3d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Comparison of Quarterly Revenue',
          'xAxisname': 'Quarter',
          'yAxisName': 'Revenues (In USD)',
          'numberPrefix': '$',
          'plotFillAlpha': '80',
          'theme': 'fusion'
        },
        'categories': [
          {
            'category': [
              {
                'label': 'Q1'
              },
              {
                'label': 'Q2'
              },
              {
                'label': 'Q3'
              },
              {
                'label': 'Q4'
              }
            ]
          }
        ],
        'dataset': [
          {
            'seriesname': 'Previous Year',
            'data': [
              {
                'value': '10000'
              },
              {
                'value': '11500'
              },
              {
                'value': '12500'
              },
              {
                'value': '15000'
              }
            ]
          },
          {
            'seriesname': 'Current Year',
            'data': [
              {
                'value': '25400'
              },
              {
                'value': '29800'
              },
              {
                'value': '21800'
              },
              {
                'value': '26800'
              }
            ]
          }
        ],
        'trendlines': [
          {
            'line': [
              {
                'startvalue': '12250',
                'color': '#0075c2',
                'displayvalue': 'Previous{br}Average',
                'valueOnRight': '1',
                'thickness': '1',
                'showBelow': '1',
                'tooltext': 'Previous year quarterly target  : $13.5K'
              },
              {
                'startvalue': '25950',
                'color': '#1aaf5d',
                'displayvalue': 'Current{br}Average',
                'valueOnRight': '1',
                'thickness': '1',
                'showBelow': '1',
                'tooltext': 'Current year quarterly target  : $23K'
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
