<template>
  <div>
    <div>Marimekko</div>
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
  name: 'Marimekko',
  data () {
    return {
      type: 'Marimekko',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        'chart': {
          'caption': 'Top 3 Electronic Brands in Top 3 Revenue Earning States',
          'subcaption': 'Last month',
          'aligncaptiontocanvas': '0',
          'yaxisname': 'Statewise Sales (in %)',
          'xaxisname': 'Brand',
          'numberprefix': '$',
          'valueBgColor': '#FFFFFF',
          'valueBgAlpha': '60',
          'showPlotBorder': '1',
          'plotBorderThickness': '0.25',
          'showxaxispercentvalues': '1',
          'showsum': '1',
          'plottooltext': "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$label :</div>{br}State: <b>$seriesName</b>{br}Sales : <b>$dataValue</b>{br}Market share in $seriesName : <b>$percentValue</b>{br}Overall market share of $label: <b>$xAxisPercentValue</b>",
          'theme': 'fusion'
        },
        'categories': [
          {
            'category': [
              {
                'label': 'Bose'
              },
              {
                'label': 'Dell'
              },
              {
                'label': 'Apple'
              }
            ]
          }
        ],
        'dataset': [
          {
            'seriesname': 'California',
            'data': [
              {
                'value': '335000'
              },
              {
                'value': '225100'
              },
              {
                'value': '164200'
              }
            ]
          },
          {
            'seriesname': 'Washington',
            'data': [
              {
                'value': '215000'
              },
              {
                'value': '198000'
              },
              {
                'value': '120000'
              }
            ]
          },
          {
            'seriesname': 'Nevada',
            'data': [
              {
                'value': '298000'
              },
              {
                'value': '109300'
              },
              {
                'value': '153600'
              }
            ]
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
