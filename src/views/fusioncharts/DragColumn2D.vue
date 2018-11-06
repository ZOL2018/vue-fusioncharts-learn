<template>
  <div>
    <div>DragColumn2D</div>
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
  name: 'DragColumn2D',
  data () {
    return {
      type: 'dragcolumn2d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Inventory status - Bakersfield Central',
          'subCaption': 'Top 5 Food items',
          'xAxisName': 'Food Item',
          'yAxisName': 'No. of Units',
          'theme': 'fusion'
        },
        'categories': [
          {
            'category': [
              {
                'label': 'Poultry'
              },
              {
                'label': 'Rice'
              },
              {
                'label': 'Peanut Butter'
              },
              {
                'label': 'Salmon'
              },
              {
                'label': 'Cereal'
              }
            ]
          }
        ],
        'dataset': [
          {
            'seriesname': 'Available Stock',
            'allowDrag': '0',
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
          },
          {
            'seriesname': 'Estimated Demand',
            'dashed': '1',
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
