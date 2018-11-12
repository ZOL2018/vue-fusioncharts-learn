<template>
  <div>
    <div>MSColumnLine3d</div>
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
  name: 'MSColumnLine3d',
  data () {
    return {
      type: 'MSColumnLine3d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'showvalues': '0',
          'caption': 'Cost Analysis',
          'numberprefix': '$',
          'xaxisname': 'Quarters',
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
            'renderas': 'Line',
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
