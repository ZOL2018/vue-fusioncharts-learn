<template>
  <div>
    <div>DoughNut2D</div>
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
  name: 'DoughNut2D',
  data () {
    return {
      type: 'doughnut2D',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Split of Revenue by Product Categories',
          'subCaption': 'Last year',
          'numberPrefix': '$',
          'defaultCenterLabel': 'Total revenue: $64.08K',
          'centerLabel': 'Revenue from $label: $value',
          'decimals': '0',
          'theme': 'fusion'
        },
        'data': [
          {
            'label': 'Food',
            'value': '28504'
          },
          {
            'label': 'Apparels',
            'value': '14633'
          },
          {
            'label': 'Electronics',
            'value': '10507'
          },
          {
            'label': 'Household',
            'value': '4910'
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
