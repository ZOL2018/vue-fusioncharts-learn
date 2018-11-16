<template>
  <div>
    <div>Pie3d</div>
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
  name: 'Pie3d',
  data () {
    return {
      type: 'Pie3d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Split of Visitors by Age Group',
          'subCaption': 'Last year',
          'enableSmartLabels': '0',
          'startingAngle': '0',
          'showPercentValues': '1',
          'decimals': '1',
          'useDataPlotColorForLabels': '1',
          'theme': 'fusion'
        },
        'data': [
          {
            'label': 'Teenage',
            'value': '1250400'
          },
          {
            'label': 'Adult',
            'value': '1463300'
          },
          {
            'label': 'Mid-age',
            'value': '1050700'
          },
          {
            'label': 'Senior',
            'value': '491000'
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
