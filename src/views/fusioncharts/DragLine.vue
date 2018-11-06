<template>
  <div>
    <div>DragLine</div>
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
  name: 'DragLine',
  data () {
    return {
      type: 'dragline',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Quarterly Sales Projections',
          'subCaption': 'iPhone vs Samsung Galaxy',
          'xAxisName': 'Quarter',
          'yAxisName': 'No. of Units',
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
                'label': 'Q3(E)'
              },
              {
                'label': 'Q4(E)'
              }
            ]
          }
        ],
        'dataset': [
          {
            'seriesname': 'Apple',
            'valuePosition': 'ABOVE',
            'allowDrag': '0',
            'data': [
              {
                'value': '1200'
              },
              {
                'value': '1500',
                'dashed': '1'
              },
              {
                'value': '1300',
                'allowDrag': '1',
                'dashed': '1'
              },
              {
                'value': '900',
                'allowDrag': '1',
                'tooltext': 'Predicted sales $value units'
              }
            ]
          },
          {
            'seriesname': 'Samsung',
            'allowDrag': '0',
            'data': [
              {
                'value': '600'
              },
              {
                'value': '850',
                'dashed': '1'
              },
              {
                'value': '1000',
                'allowDrag': '1',
                'dashed': '1'
              },
              {
                'value': '1200',
                'allowDrag': '1',
                'tooltext': 'Predicted sales $value units'
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
