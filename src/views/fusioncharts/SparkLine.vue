<template>
  <div>
    <div>SparkLine</div>
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
  name: 'SparkLine',
  data () {
    return {
      type: 'SparkLine',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Stock Price',
          'subcaption': 'Last month',
          'numberPrefix': '$',
          'canvasleftmargin': '145',
          'chartTopMargin': '10',
          'chartRightMargin': '10',
          'theme': 'fusion'
        },
        'dataset': [
          {
            'data': [
              {
                'value': '38.42'
              },
              {
                'value': '41.43'
              },
              {
                'value': '34.78'
              },
              {
                'value': '40.67'
              },
              {
                'value': '44.12'
              },
              {
                'value': '38.45'
              },
              {
                'value': '40.71'
              },
              {
                'value': '49.90'
              },
              {
                'value': '40.12'
              },
              {
                'value': '34.91'
              },
              {
                'value': '42.02'
              },
              {
                'value': '35.21'
              },
              {
                'value': '43.31'
              },
              {
                'value': '40.21'
              },
              {
                'value': '40.54'
              },
              {
                'value': '40.90'
              },
              {
                'value': '54.21'
              },
              {
                'value': '41.90'
              },
              {
                'value': '33.43'
              },
              {
                'value': '46.73'
              },
              {
                'value': '50.42'
              },
              {
                'value': '40.74'
              },
              {
                'value': '42.31'
              },
              {
                'value': '50.39'
              },
              {
                'value': '51.10'
              },
              {
                'value': '44.84'
              },
              {
                'value': '51.64'
              },
              {
                'value': '47.62'
              },
              {
                'value': '39.61'
              },
              {
                'value': '35.13'
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
