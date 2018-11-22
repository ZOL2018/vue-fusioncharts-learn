<template>
  <div>
    <div>Thermometer</div>
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
  name: 'Thermometer',
  data () {
    return {
      type: 'Thermometer',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Central cold storage',
          'subcaption': 'Bakersfield Central',
          'lowerLimit': '-20',
          'upperLimit': '20',
          'numberSuffix': '°C',
          'theme': 'fusion'
        },
        'value': '-10'
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
