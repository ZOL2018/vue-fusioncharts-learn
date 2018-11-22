<template>
  <div>
    <div>SparkColumn</div>
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
  name: 'SparkColumn',
  data () {
    return {
      type: 'SparkColumn',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Revenue by Month',
          'subcaption': 'Last year',
          'chartTopMargin': '10',
          'chartBottomMargin': '10',
          'chartRightMargin': '10',
          'numberPrefix': '$',
          'theme': 'fusion'
        },
        'dataset': [
          {
            'data': [
              {
                'value': '783000'
              },
              {
                'value': '601000'
              },
              {
                'value': '515000'
              },
              {
                'value': '315900'
              },
              {
                'value': '388000'
              },
              {
                'value': '433000'
              },
              {
                'value': '910000'
              },
              {
                'value': '798000'
              },
              {
                'value': '483300'
              },
              {
                'value': '562000'
              },
              {
                'value': '359400'
              },
              {
                'value': '485000'
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
