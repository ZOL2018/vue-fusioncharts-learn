<template>
  <div>
    <div>Funnel</div>
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
  name: 'Funnel',
  data () {
    return {
      type: 'funnel',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': "Website - Harry's SuperMart",
          'subcaption': 'Visit to purchase - Conversion analysis for last year',
          'decimals': '1',
          'isHollow': '1',
          'labelDistance': '15',
          'is2D': '1',
          'plotTooltext': 'Success : $percentOfPrevValue',
          'showPercentValues': '1',
          'theme': 'fusion'
        },
        'data': [
          {
            'label': 'Unique Website Visits',
            'value': '1460000'
          },
          {
            'label': 'Programme Details Section Visits',
            'value': '930000'
          },
          {
            'label': 'Attempts to Register',
            'value': '540000'
          },
          {
            'label': 'Successful Registrations',
            'value': '210000'
          },
          {
            'label': 'Logged In',
            'value': '190000'
          },
          {
            'label': 'Purchased on Introductory Offers',
            'value': '120000'
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
