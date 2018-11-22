<template>
  <div>
    <div>Waterfall2d</div>
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
  name: 'Waterfall2d',
  data () {
    return {
      type: 'Waterfall2d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Total Profit Calculation',
          'subcaption': 'Last month',
          'yAxisname': 'Amount (In USD)',
          'numberprefix': '$',
          'connectordashed': '1',
          'sumlabel': 'Total {br} Profit',
          'positiveColor': '#6baa01',
          'negativeColor': '#e44a00',
          'theme': 'fusion'
        },
        'data': [
          {
            'label': 'Online sales',
            'value': '420000'
          },
          {
            'label': 'Store Sales',
            'value': '710000'
          },
          {
            'label': 'Total Sales',
            'issum': '1'
          },
          {
            'label': 'Fixed Costs',
            'value': '-250000'
          },
          {
            'label': 'Variable Costs',
            'value': '-156000'
          },
          {
            'label': 'COGS',
            'value': '-310000'
          },
          {
            'label': 'Promotion Costs',
            'value': '-86000'
          },
          {
            'label': 'Total Costs',
            'issum': '1',
            'cumulative': '0'
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
