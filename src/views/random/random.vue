<template>
  <div>
    <div>
      <div>
        <button @click="rand()">抽奖</button>
        <h3>当前中奖号码：{{whois}}</h3>
        <h5>依次中奖号码为：{{whoi}}</h5>
      </div>
      <ol>
        <li>一等奖:8888金币+888青铜箱子+88甜象草+8小绿马驹+1小绿[随机属性]</li>
        <li> 二等奖:888金币+88青铜箱子+8组白肉血肠+1小绿[随机属性]</li>
        <li>三等奖:88金币+8甜象草+1小绿马驹 +【随机藏宝洞1个】</li>
        <li>参与奖:8金币+1组蒜泥白肉+【有几率获取以下物品】
          <ul>
            <li>
              <span>888个首山铜</span>
              <span>888个黄精</span>
              <span>888上等腰子</span>
            </li>
            <li>
              <span>88个枸杞</span>
              <span>88个甜象草</span>
              <span>88个锡矿</span>
              <span>88个肠</span>
              <span>88个五花肉</span>
              <span>88个上等五花肉</span>
              <span>88个上等里脊肉</span>
              <span>88个白术</span>
              <span>88个紫苏</span>
            <li>
              <span>8个皇竹草</span>
              <span>8个腰部挂件包</span>
              <span>8个背部挂件包</span>
              <span>8个24格背包</span>
            </li>
            <li>
              <span>1禁足小绿</span>
              <span>1双骑麟驹</span>
              <span>1马驹龙子</span>
            </li>
          </ul>
        </li>
      </ol>
    </div>
    <div>
      <h1>一等奖：[中奖码：8888]</h1>
    </div>
    <div><h3>二等奖：[中奖码：888]</h3></div>
    <div><h3>三等奖：[中奖码：666]</h3></div>
    <div>
      <h3>参与奖：[依次顺序]</h3>
      <h5>[中奖码：99/88/66]</h5>
      <h5>[中奖码：90-98]</h5>
      <h5>[中奖码：80-83]</h5>
      <h5>[中奖码：60-62]</h5>
    </div>
  </div>
</template>

<script>
let num = ['8888', '888', '666', '666', '666', '99', '88', '66',
  '90', '91', '92', '93', '94', '95', '96', '97', '98', '80', '81', '82', '83', '60', '61', '62']
export default {
  name: 'random',
  data () {
    return {
      numb: 24,
      whois: 'whois',
      whoi: []
    }
  },
  methods: {
    rand () {
      for (let i = 0; i < 24; i++) {
        if (this.numb === 0) this.whois = 'that is all'
        else {
          num.sort(function () {
            return (0.5 - Math.random())
          })
          this.numb = this.numb - 1
          let tmp = [(Math.random() * 666 / 666 * this.numb).toFixed(0)]
          this.whoi.push(num[tmp])
          this.whois = num.splice(tmp, 1)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
