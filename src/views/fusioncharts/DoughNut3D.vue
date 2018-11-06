<template>
  <div>
    <div>DoughNut3D</div>
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
  name: 'DoughNut3D',
  data () {
    return {
      type: 'doughnut3D',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Split of Revenue by Product Categories',
          'subCaption': 'Last year',
          'numberPrefix': '$',
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
