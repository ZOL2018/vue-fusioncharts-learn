<template>
  <div>
    <div>SparkWinloss</div>
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
  name: 'SparkWinloss',
  data () {
    return {
      type: 'SparkWinloss',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'On-target sales by month',
          'subcaption': 'Last year',
          'numberPrefix': '$',
          'chartTopMargin': '10',
          'chartBottomMargin': '10',
          'chartRightMargin': '10',
          'theme': 'fusion'
        },
        'dataset': [
          {
            'data': [
              {
                'value': 'W'
              },
              {
                'value': 'W'
              },
              {
                'value': 'W'
              },
              {
                'value': 'L'
              },
              {
                'value': 'W'
              },
              {
                'value': 'W'
              },
              {
                'value': 'L'
              },
              {
                'value': 'L'
              },
              {
                'value': 'W'
              },
              {
                'value': 'L'
              },
              {
                'value': 'W'
              },
              {
                'value': 'W'
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
