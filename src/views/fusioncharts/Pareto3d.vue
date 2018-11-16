<template>
  <div>
    <div>Pareto3d</div>
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
  name: 'Pareto3d',
  data () {
    return {
      type: 'Pareto3d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Employee late arrivals by reported cause',
          'subCaption': 'Last month',
          'xAxisName': 'Reported Cause',
          'pYAxisName': 'No. of Occurrence',
          'sYAxisname': 'Cumulative Percentage',
          'theme': 'fusion'
        },
        'data': [
          {
            'label': 'Traffic',
            'value': '5680'
          },
          {
            'label': 'Family Engagement',
            'value': '1036'
          },
          {
            'label': 'Public Transport',
            'value': '950'
          },
          {
            'label': 'Weather',
            'value': '500'
          },
          {
            'label': 'Emergency',
            'value': '140'
          },
          {
            'label': 'Others',
            'value': '68'
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
