<template>
  <div>
    <div>InverseMSLine</div>
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
  name: 'InverseMSLine',
  data () {
    return {
      type: 'InverseMSLine',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Average Page Load Time (hsm.com)',
          'subCaption': 'Last Week',
          'showBorder': '0',
          'xAxisName': 'Day',
          'yAxisName': 'Time (In Sec)',
          'numberSuffix': 's',
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
            'seriesname': 'Loading Time',
            'allowDrag': '0',
            'data': [
              {
                'value': '6'
              },
              {
                'value': '5.8'
              },
              {
                'value': '5'
              },
              {
                'value': '4.3'
              },
              {
                'value': '4.1'
              },
              {
                'value': '3.8'
              },
              {
                'value': '3.2'
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
