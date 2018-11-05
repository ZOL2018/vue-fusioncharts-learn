<template>
  <div>
    <div @click="toIndex()">FusionCharts List Demo</div>
    <div class="content">
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataformat="dataformat"
        :datasource="datasource">
      </fusioncharts>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import VueFusionCharts from 'vue-fusioncharts/dist/vue-fusioncharts.js'
// import FusionCharts from 'fusioncharts'
// import charts from 'fusioncharts/fusioncharts.charts'
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
//
// Vue.use(VueFusionCharts, FusionCharts, charts, FusionTheme)
export default {
  name: 'Area2D',
  data () {
    return {
      'type': 'area2d',
      'width': '550',
      'height': '350',
      'dataformat': 'json',
      'datasource': {
        'chart': {
          // 'caption': 'Number of visitors in the last 3 days',
          // 'subCaption': 'Bakersfield Central vs Los Angeles Topanga',
          // 'theme': 'fusion',
          // 'bgAlpha': '0',
          // 测试属性
          'animation': '1', // 控制动画按钮 0/1
          'animationDuration': '1', // 控制动画时长 1-?
          'palette': '1', // 控制图表颜色主题 1-5
          'paletteColors': '#dddddd', // 图标控制颜色 #??????
          'connectNullData': '1', // 控制是否连接空数据串 0-1
          'showLabels': '1', // # 控制是否显示x轴标签
          'maxLabelHeight': '10', // # 控制除x轴标题之外的x轴标签（数据标签）的最大高度 ?
          'labelDisplay': 'AUTO', // 自定义数据标签的对齐方式（x轴标签）
          // AUTO，自动
          // WRAP，自动换行
          // STAGGER，将标签分为多行
          // ROTATE，垂直旋转标签
          // NONE
          'useEllipsesWhenOverflow': '1', // 通过省略号来表示长数据标签 0-1
          // labelDisplay : AUTO 前提
          'rotateLabels': '1', // 数据标签 是否 旋转标签 0-1
          // labelDisplay : ROTATE 前提
          'slantLabels': '1', // 倾斜标签，完全垂直标签 0-1
          'labelStep': '1', // 选择显示每个第n个标签 1-?
          'staggerLines': '2', // 控制标签错开行数 2-?
          // labelDisplay : STAGGER 前提
          'showValues': '1', // 设置数据值是否显示在 图表上 0-1
          'valuePosition': '1', // AUTO 自动 ABOVE 绘图点上方 BELOW 绘图点下方 0-1
          'rotateValues': '1', // 旋转显示值 0-1
          // showValues : 1 前提
          'showLimits': '1', // 图表限制值 若不指定 showYAxisValues 属性会覆盖此属性 0-1
          'showDivLineValues': '1', // 是否显示div行值 若不指定 showYAxisValues 属性会覆盖此属性 0-1
          'adjustDiv': '0', // 是否 禁止自动分割分区线 0-1
          'clickURL': '', // 热点链接
          'clickURLOverridesPlotLinks': '0', // clickURL 0 不覆盖link 0-1
          'setAdaptiveYMin': '1', // 设置y 轴 是否下限 为0 0-1
          'hasRTLText': '', // 值: 1，向图表指示文本
          'showPrintMenuItem': '1', // # 是否显示打印图表按钮 可用 print() 方式打印
          'plotBinSize': '0.5', // 0.5 最小2列图在1像素宽度内呈现 1 最小列图在1像素宽度内呈现
          'labelBinSize ': '0', // 0 禁止跳过标签显示 1 最小标签显示在一个像素宽度内
          'theme': 'fusion', // 主题 carbon 碳[带边框]  fusion 融合[不带边框] ocean 海洋 zune
          'caption': 'Number of visitors in the last 3 days', // 标题
          'subCaption': 'Bakersfield Central vs Los Angeles Topanga', // 子标题
          'xAxisName': 'X', // x 轴标题
          'yAxisName': 'Y', // y 轴标题
          'captionAlignment': 'center', // 标题水平对齐方式 left center right
          'captionOnTop': '1', // 0 下 1 上 标题是否应位于数据绘图区域之上 0-1
          'captionFontSize': '24', // 标题字体大小
          'subCaptionFontSize': '16', // 副标题字体大小
          'captionFont': '宋体', // 字体名称
          'subCaptionFont': '楷体', // 字体名称
          'captionFontColor': '#663421', // 字体颜色 #??????
          'subCaptionFontColor': '#ef7653', // 字体颜色 #??????
          'captionFontBold': '0', // 字体加粗 0-1
          'subCaptionFontBold': '1', // 字体加粗 0-1
          'alignCaptionWithCanvas ': '1', // 标题是否对齐画布 0-1
          'captionHorizontalPadding ': '10px' // 字体加粗 ? 向左 向右 偏移 像素
          // captionAlignment : left or right 前提
          /// / X 轴 属性配置
          // xAxisNameFontColor 颜色
          // xAxisNameFontSize 字体大小
          // xAxisNameFontBold 加粗
          // xAxisNameFontItalic 斜体
          // xAxisNameBgColor 背景色
          // xAxisNameBorderColor 边框背景色
          // xAxisNameAlpha 字体和背景 透明度
          // xAxisNameFontAlpha 字体 透明度
          // xAxisNameBgAlpha 背景 透明度
          // xAxisNameBorderAlpha 边框 透明度
          // xAxisNameBorderPadding x轴边框填充
          // xAxisNameBorderRadius x轴边框圆角度
          // xAxisNameBorderThickness x轴边框粗细 ?px
          // xAxisNameBorderDashed x轴名称周围的边框 虚线
          // xAxisNameBorderDashLen x轴名称周围的边框 虚线
          // /设置每个短划线的长度
          // xAxisNameBorderDashGap x轴名称周围的边框 虚线
          // /设置连续短划线 之间的间隔 ?px

          // / * Plot * // / 边框属性控制
          // ......

          // label x轴标签 // 设置属性控制
          // ......

          // drawCrossLine 悬停数据时 的十字交叉线
          // ......

          // formatNumber 数字处理
          // ......
        },
        'data': [{
          'label': 'Mon',
          'value': '15123'
        }, {
          'label': 'Tue',
          'value': '14233'
        },
        {
          'vLine': 'true',
          'label': 'Appraisal'
        }, {
          'label': 'Wed',
          'value': '25507'
        }, {
          'label': 'Sed',
          'value': '3333'
        }, {
        }, {
          'label': 'Sed',
          'value': '3333'
        }],
        'line': [{
          'startValue': '10000',
          'color': '#000',
          'isTrendZone': '1'
        }]
      }
    }
  },
  methods: {
    toIndex () {
      this.$router.push('/')
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
