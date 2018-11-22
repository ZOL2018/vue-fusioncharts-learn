<template>
  <div>
    <div>Bulb</div>
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
  name: 'Bulb',
  data () {
    return {
      type: 'Bulb',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Temperature status of deep freezers',
          'upperlimit': '-5',
          'lowerlimit': '-60',
          'captionPadding': '30',
          'showshadow': '0',
          'showvalue': '1',
          'useColorNameAsValue': '1',
          'placeValuesInside': '1',
          'theme': 'fusion'
        },
        'colorrange': {
          'color': [
            {
              'minvalue': '-60',
              'maxvalue': '-35',
              'label': 'Problem detected!',
              'code': '#ff0000'
            },
            {
              'minvalue': '-35',
              'maxvalue': '-25',
              'label': 'Alert!',
              'code': '#ff9900'
            },
            {
              'minvalue': '-25',
              'maxvalue': '-5',
              'label': 'All well!',
              'code': '#00ff00'
            }
          ]
        },
        'value': '-25'
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
