<template>
  <div>
    <div>Bar3D</div>
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
  name: 'Bar3D',
  data () {
    return {
      'type': 'bar3d',
      'width': '550',
      'height': '350',
      'dataFormat': 'json',
      'dataSource': {
        'chart': {
          'caption': 'Top 5 Stores by Sales',
          'subCaption': 'Last month',
          'yAxisName': 'Sales (In USD)',
          'numberPrefix': '$',
          'theme': 'fusion'
        },
        'data': [
          {
            'label': 'Bakersfield Central',
            'value': '880000'
          },
          {
            'label': 'Garden Groove harbour',
            'value': '730000'
          },
          {
            'label': 'Los Angeles Topanga',
            'value': '590000'
          },
          {
            'label': 'Compton-Rancho Dom',
            'value': '520000'
          },
          {
            'label': 'Daly City Serramonte',
            'value': '330000'
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
