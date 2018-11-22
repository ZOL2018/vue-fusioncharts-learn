<template>
  <div>
    <div>StackedArea2d</div>
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
  name: 'StackedArea2d',
  data () {
    return {
      type: 'StackedArea2d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': "Harry's SuperMart",
          'subCaption': 'Product-wise quarterly revenue in current year',
          'xAxisname': 'Quarter',
          'yAxisName': 'Amount',
          'numberPrefix': '$',
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
            'seriesname': 'Food Products',
            'data': [
              {
                'value': '11000'
              },
              {
                'value': '15000'
              },
              {
                'value': '13500'
              },
              {
                'value': '15000'
              }
            ]
          },
          {
            'seriesname': 'Non-Food Products',
            'data': [
              {
                'value': '11400'
              },
              {
                'value': '14800'
              },
              {
                'value': '8300'
              },
              {
                'value': '11800'
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
