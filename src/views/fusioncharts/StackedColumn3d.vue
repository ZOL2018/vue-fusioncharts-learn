<template>
  <div>
    <div>StackedColumn3d</div>
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
  name: 'StackedColumn3d',
  data () {
    return {
      type: 'StackedColumn3d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Product-wise quarterly revenue in current year',
          'subCaption': "Harry's SuperMart",
          'xAxisname': 'Quarter',
          'yAxisName': 'Revenue (In USD)',
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
                'value': '121000'
              },
              {
                'value': '135000'
              },
              {
                'value': '123500'
              },
              {
                'value': '145000'
              }
            ]
          },
          {
            'seriesname': 'Non-Food Products',
            'data': [
              {
                'value': '131400'
              },
              {
                'value': '154800'
              },
              {
                'value': '98300'
              },
              {
                'value': '131800'
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
