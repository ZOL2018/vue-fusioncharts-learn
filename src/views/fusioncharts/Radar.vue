<template>
  <div>
    <div>Radar</div>
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
  name: 'Radar',
  data () {
    return {
      type: 'Radar',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Budget analysis',
          'subCaption': 'Current month',
          'numberPrefix': '$',
          'theme': 'fusion'
        },
        'categories': [
          {
            'category': [
              {
                'label': 'Marketing'
              },
              {
                'label': 'Product Management'
              },
              {
                'label': 'Customer Service'
              },
              {
                'label': 'Human Resource'
              },
              {
                'label': 'Sales & Distribution'
              }
            ]
          }
        ],
        'dataset': [
          {
            'seriesname': 'Allocated Budget',
            'data': [
              {
                'value': '19000'
              },
              {
                'value': '16500'
              },
              {
                'value': '14300'
              },
              {
                'value': '10000'
              },
              {
                'value': '9800'
              }
            ]
          },
          {
            'seriesname': 'Actual Cost',
            'data': [
              {
                'value': '6000'
              },
              {
                'value': '9500'
              },
              {
                'value': '11900'
              },
              {
                'value': '8000'
              },
              {
                'value': '9700'
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
