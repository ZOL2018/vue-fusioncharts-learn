<template>
  <div>
    <div>Cylinder</div>
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
  name: 'Cylinder',
  data () {
    return {
      type: 'Cylinder',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Fuel Meter',
          'subcaption': 'Diesel level in generator Bakersfield Central',
          'subcaptionFontBold': '0',
          'lowerLimit': '0',
          'upperLimit': '120',
          'lowerLimitDisplay': 'Empty',
          'upperLimitDisplay': 'Full',
          'numberSuffix': ' ltrs',
          'showhovereffect': '1',
          'theme': 'fusion'
        },
        'value': '110'
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
