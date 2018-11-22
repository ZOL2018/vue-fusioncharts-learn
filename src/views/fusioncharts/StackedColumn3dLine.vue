<template>
  <div>
    <div>StackedColumn3dLine</div>
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
  name: 'StackedColumn3dLine',
  data () {
    return {
      type: 'StackedColumn3dLine',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Cost Analysis',
          'subcaption': 'Last Year',
          'numberprefix': '$',
          'xaxisname': 'Quarter',
          'yaxisname': 'Cost',
          'theme': 'fusion'
        },
        'categories': [
          {
            'category': [
              {
                'label': 'Quarter 1'
              },
              {
                'label': 'Quarter 2'
              },
              {
                'label': 'Quarter 3'
              },
              {
                'label': 'Quarter 4'
              }
            ]
          }
        ],
        'dataset': [
          {
            'seriesname': 'Fixed Cost',
            'data': [
              {
                'value': '235000'
              },
              {
                'value': '225100'
              },
              {
                'value': '222000'
              },
              {
                'value': '230500'
              }
            ]
          },
          {
            'seriesname': 'Variable Cost',
            'data': [
              {
                'value': '230000'
              },
              {
                'value': '143000'
              },
              {
                'value': '198000'
              },
              {
                'value': '327600'
              }
            ]
          },
          {
            'seriesname': 'Budgeted cost',
            'renderAs': 'Line',
            'showValues': '0',
            'data': [
              {
                'value': '455000'
              },
              {
                'value': '334000'
              },
              {
                'value': '426000'
              },
              {
                'value': '403000'
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
