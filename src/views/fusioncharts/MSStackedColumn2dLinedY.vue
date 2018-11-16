<template>
  <div>
    <div>MSStackedColumn2dLinedY</div>
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
  name: 'MSStackedColumn2dLinedY',
  data () {
    return {
      type: 'MSStackedColumn2dLinedY',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Quarterly Sales vs. Profit % in Last Year',
          'subcaption': "Product-wise Break-up - Harry's SuperMart",
          'xAxisName': 'Quarter',
          'pYAxisName': 'Sales',
          'sYAxisName': 'Profit %',
          'numberPrefix': '$',
          'numbersuffix': 'M',
          'sNumberSuffix': '%',
          'sYAxisMaxValue': '25',
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
            'dataset': [
              {
                'seriesname': 'Processed Food',
                'data': [
                  {
                    'value': '30'
                  },
                  {
                    'value': '26'
                  },
                  {
                    'value': '33'
                  },
                  {
                    'value': '31'
                  }
                ]
              },
              {
                'seriesname': 'Un-Processed Food',
                'data': [
                  {
                    'value': '21'
                  },
                  {
                    'value': '28'
                  },
                  {
                    'value': '39'
                  },
                  {
                    'value': '41'
                  }
                ]
              }
            ]
          },
          {
            'dataset': [
              {
                'seriesname': 'Electronics',
                'data': [
                  {
                    'value': '27'
                  },
                  {
                    'value': '25'
                  },
                  {
                    'value': '28'
                  },
                  {
                    'value': '26'
                  }
                ]
              },
              {
                'seriesname': 'Apparels',
                'data': [
                  {
                    'value': '17'
                  },
                  {
                    'value': '15'
                  },
                  {
                    'value': '18'
                  },
                  {
                    'value': '16'
                  }
                ]
              }
            ]
          }
        ],
        'lineset': [
          {
            'seriesname': 'Profit %',
            'showValues': '0',
            'data': [
              {
                'value': '14'
              },
              {
                'value': '16'
              },
              {
                'value': '15'
              },
              {
                'value': '17'
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
