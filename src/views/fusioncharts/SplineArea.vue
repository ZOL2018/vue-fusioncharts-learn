<template>
  <div>
    <div>SplineArea</div>
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
  name: 'SplineArea',
  data () {
    return {
      type: 'SplineArea',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Total sales of iPhone',
          'subCaption': 'Last month',
          'xAxisName': 'Week',
          'yAxisName': 'Units sold',
          'xAxisLineThickness': '1',
          'theme': 'fusion'
        },
        'data': [
          {
            'label': 'Week 1',
            'value': '530'
          },
          {
            'label': 'Week 2',
            'value': '660'
          },
          {
            'label': 'Week 3',
            'value': '420'
          },
          {
            'label': 'Week 4',
            'value': '580'
          },
          {
            'label': 'Week 5',
            'value': '560'
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
